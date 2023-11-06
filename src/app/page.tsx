import Categories from "@/components/Categories";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import NewReleases from "@/components/NewReleases";
import CategorySection from "@/components/ui/CategorySection";
import { bodyConfig } from "@/config/Body";
import { faceConfig } from "@/config/Face";
import { fragranceConfig } from "@/config/Fragrance";
import { hairConfig } from "@/config/Hair";

export default function Home() {
  return (
    <main className="min-h-screen font-body">
      <Hero />
      <Categories />
      <NewReleases />
      <CategorySection section={faceConfig} />
      <CategorySection section={hairConfig} />
      <CategorySection section={bodyConfig} />
      <CategorySection section={fragranceConfig} />
      <Features />
    </main>
  );
}
