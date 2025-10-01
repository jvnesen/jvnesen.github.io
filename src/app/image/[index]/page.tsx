import { ImageViewer } from "@/components/viewers/image-viewer";
import { galleryImages } from "@/lib/gallery";

export default function ImagePage({ params }: any) {
  const raw = Array.isArray(params.index) ? params.index[0] : params.index;
  const parsed = Number.parseInt(raw ?? "0", 10);
  const index = Number.isFinite(parsed) ? parsed : 0;

  return (
    // Fullscreen viewer handles its own layout
    <ImageViewer index={index} />
  );
}

export async function generateStaticParams() {
  const indices = galleryImages.map((_, i) => i.toString());
  return indices.map((index) => ({ index }));
}