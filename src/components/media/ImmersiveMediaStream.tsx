"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type StreamImage = {
  src: string;
  alt?: string;
};

type ImmersiveMediaStreamProps = {
  images: StreamImage[];
};

export function ImmersiveMediaStream({ images }: ImmersiveMediaStreamProps) {
  return (
    <section className="mx-auto w-full max-w-3xl">
      <header className="mb-5 text-center sm:mb-7">
        <p className="text-xs uppercase tracking-[0.16em] text-[#800020]/70">
          Immersive Media Stream
        </p>
        <h3 className="mt-2 text-2xl font-semibold leading-tight sm:text-3xl">
          Our Moments
        </h3>
      </header>

      <div className="columns-1 gap-3 sm:columns-2 sm:gap-4">
        {images.map((image, index) => (
          <motion.figure
            key={`${image.src}-${index}`}
            whileHover={{ scale: 1.015, y: -2 }}
            whileTap={{ scale: 0.985 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-3 break-inside-avoid overflow-hidden rounded-xl sm:mb-4"
          >
            <Image
              src={image.src}
              alt={image.alt ?? `Keepsake memory ${index + 1}`}
              width={1200}
              height={1600}
              sizes="(max-width: 640px) 100vw, 50vw"
              className="h-auto w-full object-cover"
            />
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
