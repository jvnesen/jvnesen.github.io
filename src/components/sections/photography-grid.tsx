"use client";

import Image from "next/image";
import Link from "next/link";
import { galleryImages } from "@/lib/gallery";

export default function PhotographyGrid() {
  return (
    <main className="bg-background w-full py-10 md:pl-[220px] px-2.5">
      <div className="columns-2 md:columns-3 xl:columns-4 gap-2.5">
        {galleryImages.map((image, index) => (
          <figure key={index} className="[break-inside:avoid] mb-2.5">
            <div className="group relative overflow-hidden">
              <Link href={`/image/${index}`} aria-label={`Open image ${index + 1}`} className="block">
                <Image
                  src={image.src}
                  alt="Alex Feggi"
                  width={image.width}
                  height={image.height}
                  className="w-full h-auto object-cover duration-300 ease-in-out transition-transform group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  priority={index < 8}
                />
              </Link>
            </div>
          </figure>
        ))}
      </div>
    </main>
  );
}