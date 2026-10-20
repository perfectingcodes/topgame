import type { Photo as PhotoData } from "@/data/site";
import { cn } from "@/lib/cn";

/**
 * Club photo with a responsive source pair. Every photo ships at its native
 * width plus a 640px `-sm` variant, so phones don't pull the full-size file.
 */
export default function Photo({
  photo,
  className,
  imgClassName,
  sizes = "100vw",
  priority = false,
}: {
  photo: PhotoData;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("overflow-hidden rounded-2xl bg-navy-850", className)}>
      <img
        src={`${photo.src}.jpg`}
        srcSet={`${photo.src}-sm.jpg 640w, ${photo.src}.jpg 1206w`}
        sizes={sizes}
        alt={photo.alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={cn("h-full w-full object-cover", imgClassName)}
      />
    </div>
  );
}
