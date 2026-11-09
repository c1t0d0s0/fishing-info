// 魚種図鑑のサムネイル (public/fish-models/thumbs/<モデルのid>.webp) を 3D モデルから作る。
// モデルを入れ替えたときだけ手で実行し、出力した画像はコミットする（ビルドでは実行しない）。
//
//   npm install --no-save playwright-core && node scripts/render-fish-thumbnails.mjs [id ...]
//
// ブラウザは CHROME_PATH、無ければ playwright-core のブラウザ (npx playwright-core install chromium) を使う。
import { createServer } from "node:http";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const OUT_DIR = join(ROOT, "public/fish-models/thumbs");
const IDS = [
  "aji", "seabass", "mebaru", "kasago", "saba", "tachiuo", "sawara", "kamasu",
  "buri", "hiramasa", "kihada", "magochi", "kurodai", "madai", "isaki", "shibudai", "katakuchi",
];
// 止まった姿勢 (hover) が横向きにならない種類
const MOTION = { tachiuo: "swim", mebaru: "swim" };
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".glb": "model/gltf-binary", ".webp": "image/webp" };

const server = createServer(async (req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname));
  try {
    const body = await readFile(join(ROOT, path));
    res.writeHead(200, { "content-type": TYPES[extname(path)] ?? "application/octet-stream" });
    res.end(body);
  } catch {
    res.writeHead(404).end();
  }
});
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const origin = `http://127.0.0.1:${server.address().port}`;

const browser = await chromium.launch({
  executablePath: process.env.CHROME_PATH || undefined,
  args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader"],
});
await mkdir(OUT_DIR, { recursive: true });

let failed = 0;
for (const id of process.argv.slice(2).length ? process.argv.slice(2) : IDS) {
  const page = await browser.newPage();
  await page.goto(`${origin}/scripts/render-fish-thumbnails.html?id=${id}&motion=${MOTION[id] ?? "hover"}`);
  await page.waitForFunction(() => window.thumbnail || window.thumbnailError, null, { timeout: 60_000 });
  const { thumbnail, thumbnailError } = await page.evaluate(() => ({
    thumbnail: window.thumbnail,
    thumbnailError: window.thumbnailError,
  }));
  await page.close();
  if (thumbnailError || !thumbnail.startsWith("data:image/webp")) {
    console.error(`${id}: ${thumbnailError ?? "webp に書き出せませんでした"}`);
    failed++;
    continue;
  }
  const file = join(OUT_DIR, `${id}.webp`);
  await writeFile(file, Buffer.from(thumbnail.split(",")[1], "base64"));
  console.log(`${id}: ${file}`);
}

await browser.close();
server.close();
process.exit(failed ? 1 : 0);
