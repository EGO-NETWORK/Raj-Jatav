export default function Badge() {
  return (
    <svg className="badge" viewBox="0 0 120 120" aria-hidden="true">
      <defs>
        <path id="ring" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
      </defs>
      <circle cx="60" cy="60" r="58" className="badge__bg" />
      <text className="badge__text">
        <textPath href="#ring" startOffset="0">
          BUILDING MY OWN LEGACY • EGOISTIC • BUILDING MY OWN LEGACY • EGOISTIC •
        </textPath>
      </text>
      <circle cx="60" cy="60" r="4" className="badge__dot" />
    </svg>
  );
}
