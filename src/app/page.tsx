"use client";

import { FormEvent, useState } from "react";
import { LetterSection } from "@/components/narrative/LetterSection";
import { ImmersiveMediaStream } from "@/components/media/ImmersiveMediaStream";
import { DynamicFeedbackNode } from "@/components/feedback/DynamicFeedbackNode";

const SIGNIFICANT_DATE = "06-29-2026";
const KEEP_SAKE_IMAGES = [
  { src: "/memories/memory-1.jpg", alt: "Smiling together outdoors" },
  { src: "/memories/memory-2.jpg", alt: "Holding hands at sunset" },
  { src: "/memories/memory-3.jpg", alt: "Laughing over coffee" },
  { src: "/memories/memory-4.jpg", alt: "A candid portrait" },
  { src: "/memories/memory-5.jpg", alt: "Walking through the city" },
  { src: "/memories/memory-6.jpg", alt: "A quiet shared moment" },
];

export default function Home() {
  const [dateInput, setDateInput] = useState("");
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isHidingGate, setIsHidingGate] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (dateInput.trim() === SIGNIFICANT_DATE) {
      setError("");
      setIsHidingGate(true);

      window.setTimeout(() => {
        setIsAuthenticated(true);
      }, 450);

      return;
    }

    setError("That date does not match. Please try again.");
  };

  return (
    <main className="min-h-screen w-full px-4 py-8 sm:px-6 sm:py-10">
      {!isAuthenticated && (
        <section
          className={`mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-md items-center justify-center transition-all duration-500 ${
            isHidingGate ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          <div className="w-full rounded-2xl border border-black/10 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-7">
            <p className="text-xs uppercase tracking-[0.16em] text-[#800020]/70">
              Private Keepsake
            </p>
            <h1 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">
              Enter our significant date to unlock the keepsake
            </h1>
            <p className="mt-2 text-sm text-neutral-600">
              Use MM-DD-YYYY format to continue.
            </p>

            <form className="mt-6 space-y-3" onSubmit={handleSubmit}>
              <label htmlFor="significant-date" className="sr-only">
                Significant date
              </label>
              <input
                id="significant-date"
                type="text"
                inputMode="numeric"
                autoComplete="off"
                placeholder="MM-DD-YYYY"
                value={dateInput}
                onChange={(event) => {
                  setDateInput(event.target.value);
                  setError("");
                }}
                className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-base outline-none transition focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/20"
              />

              {error && <p className="text-sm text-[#800020]">{error}</p>}

              <button
                type="submit"
                className="w-full rounded-xl bg-[#800020] px-4 py-3 text-sm font-medium text-white transition hover:opacity-95 active:scale-[0.99]"
              >
                Unlock Keepsake
              </button>
            </form>
          </div>
        </section>
      )}

      {isAuthenticated && (
        <section className="mx-auto w-full max-w-5xl py-8 sm:py-12">
          <div className="space-y-8 sm:space-y-12">
            <LetterSection />
            <ImmersiveMediaStream images={KEEP_SAKE_IMAGES} />
            <DynamicFeedbackNode />
          </div>
        </section>
      )}
    </main>
  );
}
