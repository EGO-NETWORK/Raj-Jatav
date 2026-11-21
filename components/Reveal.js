"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";

// Each variant describes where an element comes from. Values are [from, to].
const VARIANTS = {
  up: { translateY: [56, 0] },
  down: { translateY: [-56, 0] },
  left: { translateX: [-72, 0] },
  right: { translateX: [72, 0] },
  zoom: { scale: [0.82, 1] },
  pop: { scale: [0.55, 1], ease: "outBack" },
  blur: { filter: ["blur(16px)", "blur(0px)"], translateY: [24, 0] },
  clip: { clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)"], translateX: [-24, 0] },
  clipUp: { clipPath: ["inset(100% 0 0 0)", "inset(0% 0 0 0)"], translateY: [40, 0] },
  twist: { rotate: [-7, 0], scale: [0.88, 1], translateY: [40, 0] },
  skew: { skewY: [8, 0], translateY: [48, 0] },
  drop: { translateY: [-90, 0], ease: "outBounce", duration: 1100 },
};
const NAMES = Object.keys(VARIANTS);

function show(el) {
  el.style.opacity = "";
  el.style.transform = "";
  el.style.filter = "";
  el.style.clipPath = "";
  el.classList.add("is-in");
}

export default function Reveal({
  as: Tag = "div",
  delay = 0,
  variant = "up", // any key above, or "auto" for a random one on every visit
  replay = false, // play again each time it scrolls back into view
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      show(el);
      return;
    }

    let anim = null;
    let visible = false;

    const play = () => {
      const name = variant === "auto" ? NAMES[Math.floor(Math.random() * NAMES.length)] : variant;
      const { ease, duration, ...props } = VARIANTS[name] || VARIANTS.up;
      try {
        anim?.cancel?.();
        el.classList.remove("is-in");
        anim = animate(el, {
          opacity: [0, 1],
          ...props,
          duration: duration ?? 1000,
          delay,
          ease: ease ?? "outExpo",
          onComplete: () => show(el),
        });
      } catch (e) {
        show(el); // never leave content hidden if the animation fails
      }
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          visible = true;
          play();
          if (!replay) io.disconnect();
        } else if (!entry.isIntersecting && visible && replay) {
          visible = false;
          anim?.cancel?.();
          el.classList.remove("is-in");
          el.style.opacity = "0";
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);

    // Safety net: if something blocks the observer, reveal anyway.
    const failsafe = setTimeout(() => {
      if (!visible && !el.classList.contains("is-in")) {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          visible = true;
          play();
        }
      }
    }, 1800);

    return () => {
      clearTimeout(failsafe);
      io.disconnect();
      anim?.cancel?.();
    };
  }, [variant, delay, replay]);

  return (
    <Tag ref={ref} className={`reveal ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
