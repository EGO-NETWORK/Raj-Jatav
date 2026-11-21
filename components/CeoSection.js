"use client";

import { useEffect, useRef, useState } from "react";
import { Crown, Target, TrendingUp, Landmark } from "lucide-react";
import { styled } from "@/lib/fancy";

const lines = ["Thinking in decades.", "Building in silence.", "Power moves quietly."];
const headline = ["I’m a", "future", "CEO."];

export default function CeoSection() {
  const ref = useRef(null);
  const stage = useRef(null);
  const [live, setLive] = useState(false);
  const [line, setLine] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setLive(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setLine((i) => (i + 1) % lines.length), 3200);
    return () => clearInterval(t);
  }, []);

  const onMove = (e) => {
    const s = stage.current;
    if (!s) return;
    const r = s.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    s.style.setProperty("--ry", `${x * 10}deg`);
    s.style.setProperty("--rx", `${-y * 8}deg`);
    s.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
    s.style.setProperty("--my", `${(y + 0.5) * 100}%`);
  };
  const onLeave = () => {
    const s = stage.current;
    if (!s) return;
    s.style.setProperty("--ry", "0deg");
    s.style.setProperty("--rx", "0deg");
  };

  let n = 0;

  return (
    <section id="future" ref={ref} className={`ceo ${live ? "is-live" : ""}`}>
      <div className="ceo__aurora" aria-hidden="true" />
      <div className="container ceo__grid">
        <div className="ceo__copy">
          <span className="mono ceo__eyebrow">
            <Crown size={15} strokeWidth={1.6} />
            <span className="sc">{styled("The next chapter")}</span>
          </span>

          <h2 className="ceo__title display" aria-label="I’m a future CEO.">
            {headline.map((word, wi) => (
              <span className={`ceo__word ${wi === 2 ? "ceo__word--hot" : ""}`} key={word} aria-hidden="true">
                {Array.from(styled(word)).map((ch, ci) => (
                  <span
                    className="ceo__ch"
                    key={ci}
                    style={{ animationDelay: `${300 + n++ * 55}ms` }}
                  >
                    {ch}
                  </span>
                ))}
              </span>
            ))}
          </h2>

          <div className="ceo__ticker" aria-live="polite">
            {lines.map((l, i) => (
              <span key={l} className={`ceo__line ${i === line ? "is-on" : ""}`}>
                <span className="sc">{styled(l)}</span>
              </span>
            ))}
          </div>

          <p className="ceo__text">
            Not a title I’m waiting for. A seat I’m building toward, one venture, one decision and
            one quiet move at a time.
          </p>

          <ul className="ceo__tags">
            <li><Target size={15} strokeWidth={1.6} /> <span className="sc">{styled("Focused")}</span></li>
            <li><TrendingUp size={15} strokeWidth={1.6} /> <span className="sc">{styled("Compounding")}</span></li>
            <li><Landmark size={15} strokeWidth={1.6} /> <span className="sc">{styled("Legacy first")}</span></li>
          </ul>
        </div>

        <div
          className="ceo__stage"
          ref={stage}
          onPointerMove={onMove}
          onPointerLeave={onLeave}
        >
          <div className="ceo__ring" aria-hidden="true" />
          <div className="ceo__frame">
            <img
              src="/future-ceo.jpg"
              alt="Silhouette of a seated CEO while an advisor leans in to speak"
              width="736"
              height="988"
              loading="lazy"
            />
            <span className="ceo__spot" aria-hidden="true" />
            <span className="ceo__scan" aria-hidden="true" />
            <span className="ceo__corner ceo__corner--tl" aria-hidden="true" />
            <span className="ceo__corner ceo__corner--br" aria-hidden="true" />
          </div>
          <span className="ceo__crown" aria-hidden="true">
            <Crown size={22} strokeWidth={1.5} />
          </span>
        </div>
      </div>

      <div className="ceo__marquee" aria-hidden="true">
        <div className="ceo__track">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k}>
              {["Future CEO", "Egoistic", "Power moves quietly", "Building my own legacy"].map((t) => (
                <span key={t} className="ceo__m">
                  <Crown size={14} strokeWidth={1.5} /> {styled(t)}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
