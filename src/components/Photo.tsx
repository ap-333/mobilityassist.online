import type { Photo as PhotoData } from "@/content/photos";

/** A responsive photo. Static export can't use next/image optimization, so this is a plain, sized <img>. */
export function Photo({ photo, className = "", priority = false }: { photo: PhotoData; className?: string; priority?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={photo.src}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={`object-cover ${className}`}
    />
  );
}
