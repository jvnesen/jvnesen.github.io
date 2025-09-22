"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/lib/gallery";

export const ImageViewer = ({ index }: { index: number }) => {
  const router = useRouter();
  const total = galleryImages.length;
  const safeIndex = ((index % total) + total) % total;

  const goTo = useCallback(
    (i: number) => {
      const nextIndex = ((i % total) + total) % total;
      router.push(`/image/${nextIndex}`);
    },
    [router, total]
  );

  const handlePrev = useCallback(() => goTo(index - 1), [goTo, index]);
  const handleNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const handleClose = useCallback(() => router.push("/"), [router]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      else if (e.key === "ArrowLeft") handlePrev();
      else if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, handleClose]);

  const currentImage = galleryImages[safeIndex];

  return (
    <div className="fixed inset-0 z-50 bg-white text-black flex flex-col">
      <div className="flex justify-end items-center p-4 md:p-5 text-sm lowercase">
        <button
          aria-label="Close viewer"
          onClick={handleClose}
          className="focus-visible:ring-2 focus-visible:ring-black outline-none rounded-full p-1"
        >
          <X className="w-5 h-5 hover:opacity-80 transition-opacity" />
        </button>
      </div>

      <div
        className="flex-1 flex items-center justify-center p-4 md:p-8 relative"
        onClick={handleClose}
      >
        <div className="relative max-h-[85vh] w-auto" onClick={(e) => e.stopPropagation()}>
          <Image
            src={currentImage.src}
            alt="Alex Feggi"
            width={currentImage.width}
            height={currentImage.height}
            sizes="(max-width: 768px) 90vw, min(80vw, 1200px)"
            className="object-contain h-auto w-auto"
            style={{ maxHeight: "85vh" }}
          />

        </div>

        <button
          aria-label="Previous image"
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="fixed left-4 md:left-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-black outline-none"
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>

        <button
          aria-label="Next image"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-black outline-none"
        >
          <ChevronRight className="w-6 h-6 text-black" />
        </button>
      </div>
    </div>
  );
};