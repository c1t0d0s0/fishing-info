import { DEFAULT_SPOTS } from "@/lib/data/defaultSpots";
import SpotDetailClient from "@/components/spots/SpotDetailClient";

export function generateStaticParams() {
  return DEFAULT_SPOTS.map((spot) => ({
    id: spot.id,
  }));
}

export default function SpotPage({ params }: { params: { id: string } }) {
  return <SpotDetailClient spotId={params.id} />;
}
