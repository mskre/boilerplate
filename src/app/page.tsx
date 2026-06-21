import { FishingScene } from "@/components/fishing-scene";
import { SiteNav } from "@/components/site-nav";

export default function Home() {
  return (
    <main className="page-stage ocean-stage" aria-label="Cartoon fisherman in a boat">
      <SiteNav />
      <FishingScene />
    </main>
  );
}
