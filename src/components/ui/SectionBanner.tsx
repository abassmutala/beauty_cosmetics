import { Category } from "@/types";
import Image from "next/image";

function SectionBanner({ section }: { section: Category }) {
  return (
    <div className="w-full h-[120px] md:h-80 overflow-hidden relative">
      <Image
        src={section.image}
        alt={section.name}
        height="1280"
        width="720"
        className="relative w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 h-full w-full bg-black/30">
        <div className="h-full flex items-center justify-center px-6 md:px-8">
          <h5 className="font-heading text-center text-white text-3xl md:text-5xl">
            {section.name}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default SectionBanner;
