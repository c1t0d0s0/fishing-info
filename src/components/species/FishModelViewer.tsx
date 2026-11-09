"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { X, Loader2 } from "lucide-react";
import { loadFish, createFish, MOTIONS } from "@/lib/fishModels/fish-kit";
import { fishModelAsset } from "@/lib/data/fishModels";
import FishModelCredit from "./FishModelCredit";

interface FishModelViewerProps {
  modelId: string;
  name: string;
  onClose: () => void;
}

const MOTION_IDS = ["swim", "power", "hooked", "air", "landed"];
const MOTION_BUTTONS = MOTIONS.filter((m) => MOTION_IDS.includes(m.id));

export default function FishModelViewer({ modelId, name, onClose }: FishModelViewerProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const setMotionRef = useRef<(motion: string) => void>(() => {});
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [motion, setMotion] = useState("swim");

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    let disposed = false;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    stage.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.add(new THREE.HemisphereLight(0xffffff, 0x6b7f99, 2.2));
    const sun = new THREE.DirectionalLight(0xffffff, 1.6);
    sun.position.set(0.3, 1, 1);
    scene.add(sun);

    const camera = new THREE.PerspectiveCamera(30, 1, 0.01, 100);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = stage;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(stage);

    let fish: ReturnType<typeof createFish> = null;
    const clock = new THREE.Clock();

    loadFish(fishModelAsset(), [modelId])
      .then(() => {
        if (disposed) return;
        fish = createFish(modelId);
        if (!fish) throw new Error(`model not found: ${modelId}`);
        fish.object.rotation.y = -Math.PI / 2; // 頭を左に向ける
        fish.setMotion("swim");
        scene.add(fish.object);
        setMotionRef.current = (m) => fish?.setMotion(m);

        // 体の長さに合わせてカメラを寄せる
        const size = new THREE.Box3().setFromObject(fish.object).getSize(new THREE.Vector3());
        const length = Math.max(size.x, size.z);
        camera.position.set(0, length * 0.25, length * 1.9);
        controls.target.set(0, 0, 0);
        controls.minDistance = length * 0.6;
        controls.maxDistance = length * 5;
        controls.update();

        clock.start();
        renderer.setAnimationLoop(() => {
          fish?.update(Math.min(clock.getDelta(), 0.1));
          controls.update();
          renderer.render(scene, camera);
        });
        setStatus("ready");
      })
      .catch((e) => {
        console.error(e);
        if (!disposed) setStatus("error");
      });

    return () => {
      disposed = true;
      renderer.setAnimationLoop(null);
      observer.disconnect();
      controls.dispose();
      fish?.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [modelId]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const changeMotion = (m: string) => {
    setMotion(m);
    setMotionRef.current(m);
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${name} の3Dモデル`}
    >
      <div
        className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 dark:border-slate-800">
          <h3 className="font-black text-slate-900 dark:text-white">{name}</h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:text-slate-200 dark:hover:bg-slate-800"
            aria-label="閉じる"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div
          ref={stageRef}
          className="relative h-72 sm:h-96 touch-none bg-[radial-gradient(ellipse_at_50%_40%,#2a4a63_0%,#14263a_60%,#0c1520_100%)]"
        >
          {status !== "ready" && (
            <div className="absolute inset-0 flex items-center justify-center text-sm text-slate-300">
              {status === "loading" ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                "3Dモデルを読み込めませんでした"
              )}
            </div>
          )}
        </div>

        <div className="px-5 py-3 space-y-2">
          <div className="flex flex-wrap gap-1.5">
            {MOTION_BUTTONS.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => changeMotion(m.id)}
                disabled={status !== "ready"}
                className={`text-xs font-bold px-2.5 py-1 rounded-lg border transition-colors disabled:opacity-50 ${
                  motion === m.id
                    ? "bg-ocean-500 text-white border-ocean-500"
                    : "bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-ocean-300"
                }`}
              >
                {m.ja}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] text-slate-400">ドラッグで回転・ピンチ/ホイールで拡大</span>
            <FishModelCredit />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
