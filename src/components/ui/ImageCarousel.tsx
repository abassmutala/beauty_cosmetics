"use client";

import { Image as CarouselImages } from "@/types/index";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Icons } from "../icons";

function ImageCarousel({ images }: { images: CarouselImages[] }) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  function showPrevImage() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function showNextImage() {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  useEffect(() => {
    const moveToNextImage = () => {
      showNextImage();
    };

    const timer = setInterval(moveToNextImage, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [currentIndex]);

  return (
    <div className="relative w-full max-h-[440px] aspeect-[3.5] flex">
      <div className="w-full h-full overflow-hidden">
        <Image
          key={images[currentIndex].alt}
          src={`/images/${images[currentIndex].src}`}
          alt={images[currentIndex].alt}
          width="1280"
          height="720"
          className="block w-full h-full object-contain object-center overflow-hidden"
        />
      </div>
      <button
        className="absolute top-1/2 left-4 md:left-6 bg-white/50 p-2 aspect-square rounded-full hidden lg:flex items-center justify-center -translate-y-1/2 hover:bg-white/80 transition-colors"
        onClick={showPrevImage}
      >
        <Icons.chevronLeft className="w-8 h-8" />
      </button>
      <button
        className="absolute top-1/2 right-4 md:right-6 bg-white/50 p-2 aspect-square rounded-full hidden lg:flex items-center justify-center -translate-y-1/2 hover:bg-white/80 transition-colors"
        onClick={showNextImage}
      >
        <Icons.chevronRight className="w-8 h-8" />
      </button>
    </div>
  );
}

export default ImageCarousel;
