"use client";

import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import { Heart, Sparkles } from "lucide-react";

const TITLE = "𓆩⚚ 𝐌ʏ 𝐁ᴀᴄᴋʙᴏɴᴇ · 𝐌ʏ 𝐒ᴛʀᴇɴɢᴛʜ ⚚𓆪";
const TEXT = "𝐃ᴇᴅɪᴄᴀᴛᴇᴅ 𝐓ᴏ 𝐌ʏ 𝐖ɪғᴇ, 𝐀ʟɪᴢᴀ 𝐀ɴᴡᴀʀ, 𝐓ʜᴇ 𝐎ɴᴇ 𝐖ʜᴏ 𝐒ᴛᴀɴᴅs 𝐁ᴇʜɪɴᴅ 𝐌ᴇ 𝐓ʜʀᴏᴜɢʜ 𝐄ᴠᴇʀʏ 𝐒ᴛᴇᴘ. ♡";
const PLAIN_TITLE = "My Backbone · My Strength";
const PLAIN_TEXT =
  "Dedicated to my wife, Aliza Anwar, the one who stands behind me through every step.";

// Deterministic "random" so server and client render the same markup.
const r = (i, k) => {
  const x = Math.sin(i * 12.9898 + k * 78.233) * 43758.5453;
  return x - Math.floor(x);
};
const hearts = Array.from({ length: 14 }, (_, i) => ({
  left: 4 + r(i, 1) * 92,
  size: 12 + r(i, 2) * 18,
  dur: 7 + r(i, 3) * 7,
  delay: -r(i, 4) * 12,
  drift: (r(i, 5) - 0.5) * 80,
}));
const stars = Array.from({ length: 18 }, (_, i) => ({
  left: 6 + r(i, 6) * 88,
  top: 4 + r(i, 7) * 48,
  size: 2 + r(i, 8) * 3,
  delay: -r(i, 9) * 4,
}));

function Chars({ text }) {
  return Array.from({ length: 0 }).concat(
    text.split(" ").map((word, wi) => (
      <span className="bb__word" key={wi}>
        {Array.from(word).map((ch, ci) => (
          <span className="bb__ch" key={ci}>
            {ch}
          </span>
        ))}
        {"\u00a0"}
      </span>
    ))
  );
}

export default function Backbone() {
  const root = useRef(null);
  const [state, setState] = useState("idle"); // idle | live | done

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      setState("done");
      return;
    }

    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        setState("live");
        try {
          animate(el.querySelector(".bb__frame img"), {
            scale: [1.35, 1],
            duration: 2600,
            ease: "outExpo",
          });
          animate(el.querySelector(".bb__frame"), {
            clipPath: ["inset(100% 0 0 0 round 28px)", "inset(0% 0 0 0 round 28px)"],
            duration: 1600,
            ease: "outExpo",
          });
          animate(el.querySelectorAll(".bb__title .bb__ch"), {
            opacity: [0, 1],
            translateY: [30, 0],
            rotate: [stagger([-12, 12]), 0],
            filter: ["blur(8px)", "blur(0px)"],
            delay: stagger(45, { start: 500 }),
            duration: 900,
            ease: "outBack",
          });
          animate(el.querySelectorAll(".bb__text .bb__ch"), {
            opacity: [0, 1],
            translateY: [14, 0],
            delay: stagger(22, { start: 1500 }),
            duration: 700,
            ease: "outQuart",
          });
          animate(el.querySelector(".bb__heart"), {
            scale: [0, 1],
            rotate: [-90, 0],
            delay: 1100,
            duration: 1200,
            ease: "outElastic(1, .6)",
          });
          animate(el.querySelectorAll(".bb__rule"), {
            scaleX: [0, 1],
            delay: 900,
            duration: 1400,
            ease: "outExpo",
          });
        } catch (err) {
          setState("done"); // never leave the text hidden
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    const failsafe = setTimeout(() => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) setState((s) => (s === "idle" ? "done" : s));
    }, 5000);
    return () => {
      clearTimeout(failsafe);
      io.disconnect();
    };
  }, []);

  return (
    <section ref={root} id="backbone" className={`bb bb--${state}`}>
      <div className="container bb__grid">
        <div className="bb__visual">
          <div className="bb__glow" aria-hidden="true" />
          <figure className="bb__frame">
            <img
              src="/backbone.jpg"
              alt="A couple sitting together on a balcony at night, city lights glowing behind them"
              width="1380"
              height="1140"
              loading="lazy"
            />
            <div className="bb__stars" aria-hidden="true">
              {stars.map((s, i) => (
                <span
                  key={i}
                  style={{
                    left: `${s.left}%`,
                    top: `${s.top}%`,
                    width: s.size,
                    height: s.size,
                    animationDelay: `${s.delay}s`,
                  }}
                />
              ))}
            </div>
            <div className="bb__vignette" aria-hidden="true" />
          </figure>
          <div className="bb__hearts" aria-hidden="true">
            {hearts.map((h, i) => (
              <Heart
                key={i}
                fill="currentColor"
                strokeWidth={0}
                style={{
                  left: `${h.left}%`,
                  width: h.size,
                  height: h.size,
                  animationDuration: `${h.dur}s`,
                  animationDelay: `${h.delay}s`,
                  "--drift": `${h.drift}px`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="bb__copy">
          <h2 className="bb__title display" aria-label={PLAIN_TITLE}>
            <span aria-hidden="true">
              <Chars text={TITLE} />
            </span>
          </h2>

          <div className="bb__divider" aria-hidden="true">
            <span className="bb__rule bb__rule--l" />
            <span className="bb__heart">
              <Heart size={18} fill="currentColor" strokeWidth={0} />
            </span>
            <span className="bb__rule bb__rule--r" />
          </div>

          <p className="bb__text" aria-label={PLAIN_TEXT}>
            <span aria-hidden="true">
              <Chars text={TEXT} />
            </span>
          </p>

          <span className="bb__sign mono" aria-hidden="true">
            <Sparkles size={14} strokeWidth={1.6} /> Forever grateful
          </span>
        </div>
      </div>
    </section>
  );
}
