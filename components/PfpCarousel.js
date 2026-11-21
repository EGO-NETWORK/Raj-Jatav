"use client";

import { useEffect, useState } from "react";
import { Bike, Eye, UserRound } from "lucide-react";

const slides = [
  { src: "/pfp-portrait.jpg", alt: "Portrait of Raj Jatav", Icon: UserRound, pos: "50% 28%", label: "Portrait" },
  { src: "/pfp-rider.jpg", alt: "Raj Jatav with his bike at night", Icon: Bike, pos: "50% 30%", label: "Rider" },
  { src: "/pfp-eyes.jpg", alt: "Close-up of Raj Jatav's eyes", Icon: Eye, pos: "50% 40%", label: "Vision" },
];

export default function PfpCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((i) => (i + 1) % slides.length), 4800);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <div
      className="pfp"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((s, i) => (
        <img
          key={s.src}
          className={`pfp__img ${i === active ? "is-active" : ""}`}
          src={s.src}
          alt={s.alt}
          width="800"
          height="1000"
          style={{ objectPosition: s.pos }}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}
      <div className="pfp__dots" role="tablist" aria-label="Choose photo">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={s.label}
            className={`pfp__dot ${i === active ? "is-active" : ""}`}
            onClick={() => setActive(i)}
          >
            <s.Icon size={15} strokeWidth={1.7} />
          </button>
        ))}
      </div>
    </div>
  );
}
