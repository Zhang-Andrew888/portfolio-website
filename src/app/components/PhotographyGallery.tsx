"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export type PhotographyItem = {
  src: string;
  alt: string;
};

type Props = {
  items: PhotographyItem[];
};

const PhotographyGallery = ({ items }: Props) => {
  const [open, setOpen] = useState<PhotographyItem | null>(null);

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <button
            key={item.src}
            type="button"
            className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-lg border border-white/10 p-0 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            onClick={() => setOpen(item)}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Full screen photo"
          onClick={close}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-10 rounded border border-white/30 bg-black/50 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm hover:bg-black/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
          >
            Close
          </button>
          <div
            className="relative h-[min(85vh,100%)] w-full max-w-[1600px]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={open.src}
              alt={open.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PhotographyGallery;
