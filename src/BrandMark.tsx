import { useId } from "react";

function BrandMark() {
  const uid = useId().replace(/:/g, "");

  return (
    <svg className="brand-mark" viewBox="0 0 40 40" role="img" aria-label="Lakshan Perera">
      <defs>
        <linearGradient id={`${uid}-stroke`} x1="4" y1="2" x2="38" y2="38">
          <stop offset="0%" stopColor="#9bffd5" />
          <stop offset="52%" stopColor="#8bd8f9" />
          <stop offset="100%" stopColor="#b4a5ff" />
        </linearGradient>
        <linearGradient id={`${uid}-fill`} x1="12" y1="9" x2="30" y2="31">
          <stop offset="0%" stopColor="#c8ffe6" />
          <stop offset="100%" stopColor="#91f5c8" />
        </linearGradient>
      </defs>

      <rect x="1.4" y="1.4" width="37.2" height="37.2" rx="11" fill="#10131d" stroke={`url(#${uid}-stroke)`} strokeWidth="1.4" />
      <path
        d="M28.5 8.8a11.2 11.2 0 0 1 2.7 7.4"
        fill="none"
        stroke="#b4a5ff"
        strokeWidth="1.15"
        strokeLinecap="round"
        opacity=".7"
      />

      <path
        d="M14.2 10.6c0-.7.55-1.25 1.25-1.25h2.15c.7 0 1.25.55 1.25 1.25v12.35h7.55c.7 0 1.25.55 1.25 1.25v2.1c0 .7-.55 1.25-1.25 1.25H15.45c-.7 0-1.25-.55-1.25-1.25V10.6Z"
        fill={`url(#${uid}-fill)`}
      />
      <rect x="26.6" y="27.4" width="3.4" height="3.4" rx=".7" fill="#91f5c8" />
    </svg>
  );
}

export default BrandMark;
