import { ImageViewer } from "@/components/viewers/image-viewer";

interface PageProps {
  params: { index: string };
}

export default function ImagePage({ params }: PageProps) {
  const raw = Array.isArray(params.index) ? params.index[0] : params.index;
  const parsed = Number.parseInt(raw ?? "0", 10);
  const index = Number.isFinite(parsed) ? parsed : 0;

  return (
    // Fullscreen viewer handles its own layout
    <ImageViewer index={index} />
  );
}