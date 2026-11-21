import { styled } from "@/lib/fancy";

// Bold first letter + small-caps rest. Real text stays available to screen readers.
export default function Sc({ children }) {
  const text = Array.isArray(children) ? children.join("") : String(children);
  return (
    <>
      <span className="sr-only">{text}</span>
      <span className="sc" aria-hidden="true">
        {styled(text)}
      </span>
    </>
  );
}
