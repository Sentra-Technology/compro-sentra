// Shared visual primitives for Sentra Technology compro
// Exposes globals via window.

/* ---------- Logo (recreated, original SVG of dotted hex motif) ---------- */
function SentraLogo({ size = 36, withWordmark = true, color = "#2C5BB8", ink = "#0F172A" }) {
  // 9-dot dotted hex arrangement (3 rows: 2/3/2 + center accents)
  // We'll draw 8 ring dots + 1 center, with circle outlines around each
  const r = 5;     // dot radius
  const ring = 8;  // outline radius
  const cx = 32, cy = 32;
  const positions = [
    [cx - 18, cy - 12], [cx, cy - 18], [cx + 18, cy - 12],
    [cx - 22, cy + 6],  [cx, cy + 0],  [cx + 22, cy + 6],
    [cx - 12, cy + 18], [cx + 12, cy + 18],
  ];
  // mark a couple as "filled" for the brand accent
  const filled = new Set([1, 4, 6]);
  return (
    <div className="logo-row" style={{ gap: 10 }}>
      <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
        {positions.map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r={ring} fill="none" stroke={color} strokeWidth="1.6" />
            <circle cx={x} cy={y} r={r - 1} fill={filled.has(i) ? ink : color} />
          </g>
        ))}
      </svg>
      {withWordmark && (
        <div className="name">
          Sentra<br /><small>Technology</small>
        </div>
      )}
    </div>
  );
}

/* ---------- Tiny logo mark only ---------- */
function SentraMark({ size = 22, color = "#2C5BB8", ink = "#0F172A" }) {
  return <SentraLogo size={size} withWordmark={false} color={color} ink={ink} />;
}

/* ---------- Circuit-line decorative SVG (corner ornament) ---------- */
function CircuitOrnament({ position = "tr", opacity = 0.5 }) {
  // Simple PCB-style routing with terminal nodes
  const transform = {
    tr: "translate(0,0)",
    br: "translate(0,0) scale(1,-1) translate(0,-340)",
    bl: "translate(0,0) scale(-1,-1) translate(-340,-340)",
    tl: "translate(0,0) scale(-1,1) translate(-340,0)",
  }[position];
  const style = {
    position: "absolute",
    pointerEvents: "none",
    opacity,
    color: "#C8D2E6",
    ...(position === "tr" && { right: 0, top: 0 }),
    ...(position === "br" && { right: 0, bottom: 0 }),
    ...(position === "bl" && { left: 0, bottom: 0 }),
    ...(position === "tl" && { left: 0, top: 0 }),
  };
  return (
    <svg width="280" height="340" viewBox="0 0 340 340" style={style} fill="none" stroke="currentColor" strokeWidth="1">
      <g transform={transform}>
        <path d="M340 60 L260 60 L260 110 L210 110 L210 170 L150 170" />
        <path d="M340 130 L290 130 L290 200 L240 200" />
        <path d="M340 220 L260 220 L260 280 L180 280 L180 320" />
        <path d="M340 30 L300 30 L300 90" />
        <circle cx="260" cy="60" r="3" fill="currentColor" />
        <circle cx="210" cy="110" r="3" fill="currentColor" />
        <circle cx="150" cy="170" r="6" fill="none" />
        <circle cx="240" cy="200" r="3" fill="currentColor" />
        <circle cx="180" cy="320" r="6" fill="none" />
        <circle cx="290" cy="200" r="3" fill="currentColor" />
        <circle cx="300" cy="90" r="3" fill="currentColor" />
      </g>
    </svg>
  );
}

/* ---------- Page header (logo + page number) ---------- */
function PageHeader({ pageNo, total, title = "" }) {
  return (
    <div style={{
      position: "absolute", top: 32, left: 56, right: 56,
      display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 5
    }}>
      <SentraMark size={22} />
      <span className="kicker">{title}</span>
    </div>
  );
}

/* ---------- Page footer ---------- */
function PageFoot({ pageNo, total = 16, label = "PT. SENTRA VISI TEKNOLOGI" }) {
  return (
    <div className="pagefoot">
      <span>{label}</span>
      <span className="rule" />
      <span>{String(pageNo).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
    </div>
  );
}

/* ---------- Section chip header (replaces the rounded-tab on every product page) ---------- */
function SectionChip({ children, color }) {
  return <div className="section-chip" style={color ? { background: color } : null}>{children}</div>;
}

/* ---------- Inline icon set (line, monoweight) ---------- */
const Icon = {
  arrow: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M5 12h14M13 6l6 6-6 6"/></svg>,
  ne:    (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M7 17 17 7M9 7h8v8"/></svg>,
  phone: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><path d="M22 16.92V21a1 1 0 0 1-1.1 1A19 19 0 0 1 2 4.1 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.27 1L7.21 10.2a16 16 0 0 0 6.59 6.59l1.45-1.61a1 1 0 0 1 1-.27l4 1a1 1 0 0 1 .75 1Z"/></svg>,
  mail:  (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>,
  globe: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>,
  pin:   (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><path d="M12 22s8-7.58 8-13a8 8 0 1 0-16 0c0 5.42 8 13 8 13Z"/><circle cx="12" cy="9" r="2.5"/></svg>,
  ai:    (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2"/><rect x="6" y="6" width="12" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/></svg>,
  iot:   (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><circle cx="12" cy="12" r="2"/><path d="M8 12a4 4 0 0 1 8 0M5 12a7 7 0 0 1 14 0M2 12a10 10 0 0 1 20 0"/></svg>,
  code:  (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/></svg>,
  shield:(p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M12 3 4 6v6c0 5 3.5 7.7 8 9 4.5-1.3 8-4 8-9V6l-8-3z"/><path d="m9 12 2 2 4-4"/></svg>,
  truck: (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M3 7h11v10H3zM14 11h4l3 3v3h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>,
  cam:   (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><rect x="3" y="7" width="13" height="10" rx="2"/><path d="m21 8-5 4 5 4z"/></svg>,
  cog:   (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>,
  data:  (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>,
  lock:  (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>,
  bell:  (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21a2 2 0 0 0 4 0"/></svg>,
  user:  (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>,
  cloud: (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M7 19a5 5 0 1 1 1-9.9A6 6 0 0 1 20 12a4 4 0 0 1 0 8z"/></svg>,
  history:(p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5"/><path d="M12 7v5l3 2"/></svg>,
  building:(p)=> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><rect x="4" y="3" width="16" height="18"/><path d="M8 7h2M8 11h2M8 15h2M14 7h2M14 11h2M14 15h2"/></svg>,
  cal:   (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></svg>,
  cert:  (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><circle cx="12" cy="9" r="5"/><path d="m9 13-2 8 5-3 5 3-2-8"/></svg>,
  money: (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="3"/></svg>,
  zap:   (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M13 2 3 14h7l-1 8 10-12h-7z"/></svg>,
  check: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" {...p}><path d="m4 12 5 5 11-11"/></svg>,
};

/* ---------- Hex pattern background ---------- */
function HexPattern({ opacity = 0.08, color = "#2C5BB8" }) {
  return (
    <svg className="hex-pattern" style={{ opacity }} viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <pattern id="hexp" width="60" height="52" patternUnits="userSpaceOnUse" patternTransform="translate(0,0)">
          <path d="M30 1 58 17v18L30 51 2 35V17z" fill="none" stroke={color} strokeWidth="0.8"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hexp)"/>
    </svg>
  );
}

/* ---------- Photo placeholder (striped) ---------- */
function Placeholder({ children, style, ratio = "16/10" }) {
  return (
    <div className="placeholder" style={{ aspectRatio: ratio, ...style }}>
      {children || "PHOTO PLACEHOLDER"}
    </div>
  );
}

Object.assign(window, { SentraLogo, SentraMark, CircuitOrnament, PageHeader, PageFoot, SectionChip, Icon, HexPattern, Placeholder });
