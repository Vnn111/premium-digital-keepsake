"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CONFETTI_COLORS = ["#800020", "#b8576b", "#f1b8c3", "#f8d9df"];

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function DynamicFeedbackNode() {
  const boundaryRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const [noOffset, setNoOffset] = useState({ x: 0, y: 0 });
  const [isLovedBack, setIsLovedBack] = useState(false);
  const [burstKey, setBurstKey] = useState(0);

  const evadeNoButton = () => {
    const boundary = boundaryRef.current;
    const noButton = noButtonRef.current;

    if (!boundary || !noButton) {
      return;
    }

    const maxX = Math.max((boundary.clientWidth - noButton.clientWidth) / 2 - 8, 0);
    const maxY = Math.max((boundary.clientHeight - noButton.clientHeight) / 2 - 8, 0);

    setNoOffset({
      x: randomBetween(-maxX, maxX),
      y: randomBetween(-maxY, maxY),
    });
  };

  const handleYes = () => {
    setIsLovedBack(true);
    setBurstKey((value) => value + 1);
  };

  return (
    <section className="mx-auto w-full max-w-3xl rounded-2xl bg-white/75 p-6 text-center shadow-sm backdrop-blur sm:p-10">
      <p className="text-xs uppercase tracking-[0.16em] text-[#800020]/70"></p>
      <h3 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">Loveee muuuu ba meeee?</h3>

      <div ref={boundaryRef} className="relative mx-auto mt-8 h-36 w-full max-w-md">
        <motion.button
          type="button"
          onClick={handleYes}
          whileTap={{ scale: 0.98 }}
          className="absolute left-1/2 top-1/2 -translate-x-[120%] -translate-y-1/2 rounded-xl bg-[#800020] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-95"
        >
          Yes
        </motion.button>

        <motion.button
          ref={noButtonRef}
          type="button"
          onMouseEnter={evadeNoButton}
          onFocus={evadeNoButton}
          onPointerDown={evadeNoButton}
          animate={{ x: noOffset.x, y: noOffset.y }}
          transition={{ type: "spring", stiffness: 380, damping: 20 }}
          className="absolute left-1/2 top-1/2 translate-x-[20%] -translate-y-1/2 rounded-xl bg-neutral-200 px-6 py-3 text-sm font-medium text-neutral-700"
        >
          No
        </motion.button>

        <AnimatePresence>
          {isLovedBack && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="absolute inset-x-0 -bottom-14"
            >
              <p className="text-base font-medium text-[#800020] sm:text-lg">
                Yeyyyy I Lovee youu soo muchh loveeeloveeee koooooo.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isLovedBack && (
            <div key={burstKey} className="pointer-events-none absolute inset-0">
              {Array.from({ length: 18 }).map((_, index) => (
                <motion.span
                  key={index}
                  initial={{ x: 0, y: 0, opacity: 0, scale: 0.7 }}
                  animate={{
                    x: randomBetween(-130, 130),
                    y: randomBetween(-120, 70),
                    opacity: [0, 1, 0],
                    scale: [0.7, 1, 0.9],
                    rotate: randomBetween(-25, 25),
                  }}
                  transition={{ duration: randomBetween(0.9, 1.4), ease: "easeOut" }}
                  className="absolute left-1/2 top-1/2 h-2.5 w-2.5 rounded-full"
                  style={{
                    backgroundColor: CONFETTI_COLORS[index % CONFETTI_COLORS.length],
                    animationDelay: `${index * 20}ms`,
                  }}
                />
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
