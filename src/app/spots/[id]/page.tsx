import { DEFAULT_SPOTS } from "@/lib/data/defaultSpots";
import SpotDetailClient from "@/components/spots/SpotDetailClient";

export function generateStaticParams() {
  return DEFAULT_SPOTS.map((spot) => ({
    id: spot.id,
  }));
}

export default async function SpotPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <SpotDetailClient spotId={id} />;
}
