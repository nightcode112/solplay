/* global React */

/* =========================================================
   Custom SVG marks — line-art, no emoji
   ========================================================= */
function BrandMark({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id="bm-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--accent-2)" />
          <stop offset="1" stopColor="var(--accent)" />
        </linearGradient>
      </defs>
      <path d="M3 8h20l-3 4H6L3 8Z" fill="url(#bm-grad)" />
      <path d="M3 14h20l-3 4H6L3 14Z" fill="url(#bm-grad)" opacity="0.7" />
      <path d="M3 20h20l-3 4H6L3 20Z" fill="url(#bm-grad)" opacity="0.5" />
    </svg>
  );
}

const STROKE = { stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round' };

function MDice({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M24 5 6 13v22l18 8 18-8V13L24 5Z" {...STROKE} />
      <path d="M24 27 6 19m18 8 18-8M24 27v16" {...STROKE} />
      <circle cx="15" cy="20" r="1.4" fill="currentColor" />
      <circle cx="13" cy="29" r="1.4" fill="currentColor" />
      <circle cx="20" cy="34" r="1.4" fill="currentColor" />
      <circle cx="33" cy="20" r="1.4" fill="currentColor" />
      <circle cx="35" cy="29" r="1.4" fill="currentColor" />
      <circle cx="28" cy="34" r="1.4" fill="currentColor" />
    </svg>
  );
}

function MCard({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect x="10" y="6" width="24" height="34" rx="3" {...STROKE} />
      <text x="14" y="15" fontFamily="Bricolage Grotesque, serif" fontSize="9" fontWeight="600" fill="currentColor">A</text>
      <text x="34" y="36" fontFamily="Bricolage Grotesque, serif" fontSize="9" fontWeight="600" fill="currentColor" textAnchor="end" transform="rotate(180 30 33)">A</text>
      <path d="M24 17c-3 2-5 4-5 7s2 5 5 5 5-2 5-5-2-5-5-7Z" {...STROKE} />
      <path d="M24 32v3" {...STROKE} />
    </svg>
  );
}

function MSlot({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect x="5" y="10" width="38" height="28" rx="3" {...STROKE} />
      <line x1="17" y1="10" x2="17" y2="38" {...STROKE} />
      <line x1="31" y1="10" x2="31" y2="38" {...STROKE} />
      <circle cx="11" cy="24" r="3" {...STROKE} />
      <path d="M21 20h6M21 24h6M21 28h6" {...STROKE} />
      <path d="M37 21l-2 3 2 3M35 24h4" {...STROKE} />
    </svg>
  );
}

function MSwords({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M9 9l4 0 18 18-4 4L9 13V9Z" {...STROKE} />
      <path d="M39 9l-4 0L17 27l4 4L39 13V9Z" {...STROKE} />
      <path d="M27 31l6 6M21 31l-6 6" {...STROKE} />
    </svg>
  );
}

function MCoin({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <ellipse cx="24" cy="22" rx="15" ry="6" {...STROKE} />
      <path d="M9 22v6c0 3.3 6.7 6 15 6s15-2.7 15-6v-6" {...STROKE} />
      <path d="M20 19v6M28 19v6M16 21l16 2" {...STROKE} opacity="0.5" />
    </svg>
  );
}

function MStar({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M24 7v34M7 24h34M11 11l26 26M37 11 11 37" {...STROKE} />
      <circle cx="24" cy="24" r="6" {...STROKE} fill="var(--bg)" />
    </svg>
  );
}

function MTreasury({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M6 18 24 8l18 10" {...STROKE} />
      <path d="M9 18v20M39 18v20M6 38h36" {...STROKE} />
      <path d="M14 22v12M22 22v12M26 22v12M34 22v12" {...STROKE} />
    </svg>
  );
}

function MBolt({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M26 5 10 27h11l-3 16 16-22H23l3-16Z" {...STROKE} fill="none" />
    </svg>
  );
}

function MSkull({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M10 24c0-8 6-14 14-14s14 6 14 14v6l3 4h-7v6H14v-6H7l3-4v-6Z" {...STROKE} />
      <circle cx="18" cy="26" r="2.5" {...STROKE} />
      <circle cx="30" cy="26" r="2.5" {...STROKE} />
      <path d="M22 34h4" {...STROKE} />
    </svg>
  );
}

function MTelegram({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M21 3 3 10.5l7 2.5 2.5 7L21 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="m10 13 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MArrowRight({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M2 8h12m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function MSolana({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 5l2-2h8l-2 2H3ZM3 11l2-2h8l-2 2H3ZM3 8l2 2h8L11 8H3Z" fill="currentColor"/>
    </svg>
  );
}

Object.assign(window, {
  BrandMark, MDice, MCard, MSlot, MSwords, MCoin, MStar,
  MTreasury, MBolt, MSkull, MTelegram, MArrowRight, MSolana,
});
