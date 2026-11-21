"use client";

import { useState } from "react";
import Icon from "./Icon";

export default function VentureImage({ src, alt, icon }) {
  const [failed, setFailed] = useState(false);

  return (
    <>
      <span className="venture__grid" />
      <Icon name={icon} size={72} strokeWidth={1} className="venture__icon" />
      {!failed && (
        <img
          className="venture__img"
          src={src}
          alt={alt}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
        />
      )}
    </>
  );
}
