import type { Photo as PhotoData } from "@/content/photos";

type Props = {
  photo: PhotoData;
  className?: string;
  priority?: boolean;
  /** How wide the photo renders, so the browser can pick the 640px file on small layouts. */
  sizes?: string;
};

/**
 * A responsive photo. Static export can't use next/image optimization, so this
 * serves WebP at two widths (photo.webp and photo-640.webp, made from the JPEG)
 * with the JPEG as a fallback.
 */
export function Photo({ photo, className = "", priority = false, sizes = "(min-width: 1024px) 45vw, 100vw" }: Props) {
  const base = photo.src.replace(/\.jpg$/, "");
  return (
    <picture className="contents">
      <source type="image/webp" srcSet={`${base}-640.webp 640w, ${base}.webp ${photo.width}w`} sizes={sizes} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
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
    </picture>
  );
}
