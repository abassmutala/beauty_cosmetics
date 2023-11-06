import Image from "next/image";
import React from "react";
import { Icons } from "./icons";
import { heroConfig } from "@/config/Hero";
import ImageCarousel from "./ui/ImageCarousel";

function Hero() {
  return (
    <section className="relative pb-8 md:pb-12 bg-white">
      <ImageCarousel images={heroConfig.images} />
    </section>
  );
}

export default Hero;
