"use client";

import React from "react";
import { Icon } from "./primitives";
import { useLang } from "./i18n";

// Website — CCTV Analytics (flagship) — each feature has hover illustration

function CCTV() {
  const { t } = useLang();
  const META = [
    { ic: "user",    anim: "detect",   color: "#06B6D4" },
    { ic: "shield",  anim: "alarm",    color: "#EF4444" },
    { ic: "cam",     anim: "trigger",  color: "#4A8BFF" },
    { ic: "data",    anim: "track",    color: "#2DD4BF" },
    { ic: "history", anim: "playback", color: "#8B5CF6" },
    { ic: "bell",    anim: "notify",   color: "#10B981" },
  ];
  const features = META.map((m, i) => ({ ...m, ...t.cctv.features[i] }));
  const PROOF_IMGS = ["gal-ppe", "gal-existing", "gal-monitor", "gal-mobile", "gal-traffic", "gal-dashboard"];
  const proof = PROOF_IMGS.map((img, i) => ({ img: `/assets/cctv/${img}.jpg`, ...t.cctv.proof[i] }));

  return (
    <section className="cctv" id="cctv">
      <div className="wrap">
        <div className="cctv-hero reveal">
          <div>
            <span className="flag">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="4"/>
              </svg>
              {t.cctv.flag}
            </span>
            <h2 className="h-section">
              {t.cctv.hPre} <span className="gold">{t.cctv.hHl}</span> {t.cctv.hPost}
            </h2>
            <p>{t.cctv.p}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#contact" className="btn btn-primary">
                {t.cctv.cta1}
                <Icon.arrow/>
              </a>
              <a href="#produk" className="btn btn-ghost">
                {t.cctv.cta2}
              </a>
            </div>
          </div>

          <div className="cctv-frame cctv-photo">
            <img src="/assets/cctv/hero.jpg" alt="Jaringan kamera CCTV — lapisan AI Sentra"/>
            <span className="cctv-photo-label">CAM-GRID · AI LAYER AKTIF</span>
            <span className="cctv-photo-rec"><span className="dot"/>REC</span>
          </div>
        </div>

        <div className="cctv-features">
          {features.map((f, i) => {
            const Ic = Icon[f.ic];
            return (
              <div className="cctv-feat reveal" key={i}
                   style={{ transitionDelay: `${(i % 3) * 80}ms`, ["--fc"]: f.color }}>
                <div className="cctv-feat-row">
                  <div className="ic"><Ic/></div>
                  <h4>{f.t}</h4>
                </div>
                <p>{f.d}</p>
                <div className="cctv-feat-illu">
                  <FeatIllu kind={f.anim} color={f.color}/>
                </div>
                <div className="cctv-feat-hint">{t.cctv.hint}</div>
              </div>
            );
          })}
        </div>

        {/* Dokumentasi nyata dari implementasi di lapangan */}
        <div className="cctv-proof reveal">
          <div className="cctv-proof-head">
            <p className="section-label">{t.cctv.proofLabel}</p>
            <h3>{t.cctv.proofH}</h3>
          </div>
          <div className="cctv-proof-grid">
            {proof.map(s => (
              <figure className="cctv-shot" key={s.t}>
                <img src={s.img} alt={s.t} loading="lazy"/>
                <figcaption>
                  <strong>{s.t}</strong>
                  <span>{s.d}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Tiny per-feature illustrations that play on hover */
function FeatIllu({ kind, color }) {
  switch (kind) {
    case "detect": return (
      <svg viewBox="0 0 200 100" className="ill ill-detect">
        {/* silhouette of person */}
        <g fill="rgba(255,255,255,0.18)">
          <circle cx="60" cy="40" r="10"/>
          <rect x="50" y="50" width="20" height="32" rx="3"/>
          <circle cx="130" cy="45" r="8"/>
          <rect x="122" y="53" width="16" height="28" rx="3"/>
        </g>
        {/* detection boxes that animate in */}
        <rect className="db b1" x="44" y="26" width="32" height="62" rx="2" fill="none" stroke={color} strokeWidth="2"/>
        <text className="dl l1" x="44" y="20" fill={color} fontFamily="JetBrains Mono" fontSize="7" fontWeight="700">PERSON · 98%</text>
        <rect className="db b2" x="116" y="34" width="26" height="50" rx="2" fill="none" stroke={color} strokeWidth="2"/>
        <text className="dl l2" x="116" y="28" fill={color} fontFamily="JetBrains Mono" fontSize="7" fontWeight="700">PERSON · 94%</text>
      </svg>
    );

    case "alarm": return (
      <svg viewBox="0 0 200 100" className="ill ill-alarm">
        {/* central alarm circle */}
        <circle cx="100" cy="50" r="22" fill="none" stroke={color} strokeWidth="2.5" className="alm-core"/>
        <g className="alm-rays" stroke={color} strokeWidth="2" strokeLinecap="round">
          <line x1="100" y1="14" x2="100" y2="22"/>
          <line x1="100" y1="78" x2="100" y2="86"/>
          <line x1="64"  y1="50" x2="72"  y2="50"/>
          <line x1="128" y1="50" x2="136" y2="50"/>
          <line x1="74"  y1="24" x2="80"  y2="30"/>
          <line x1="120" y1="70" x2="126" y2="76"/>
          <line x1="74"  y1="76" x2="80"  y2="70"/>
          <line x1="120" y1="30" x2="126" y2="24"/>
        </g>
        <circle cx="100" cy="50" r="6" fill={color} className="alm-bulb"/>
        {/* sound waves */}
        <path d="M 36 50 Q 28 50, 28 42 M 36 50 Q 28 50, 28 58" stroke={color} strokeWidth="1.6" fill="none" className="alm-wave w1"/>
        <path d="M 164 50 Q 172 50, 172 42 M 164 50 Q 172 50, 172 58" stroke={color} strokeWidth="1.6" fill="none" className="alm-wave w2"/>
      </svg>
    );

    case "trigger": return (
      <svg viewBox="0 0 200 100" className="ill ill-trigger">
        {/* zone boundary dashed line */}
        <line x1="100" y1="10" x2="100" y2="90" stroke={color} strokeWidth="2" strokeDasharray="5 4" opacity="0.6"/>
        <text x="106" y="20" fill={color} fontFamily="JetBrains Mono" fontSize="7" fontWeight="700">ZONA TERLARANG</text>
        {/* arrow crossing */}
        <g className="trg-arrow">
          <circle cx="40" cy="55" r="8" fill="rgba(255,255,255,0.2)"/>
          <path d="M 50 55 L 150 55 M 145 50 L 150 55 L 145 60" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        {/* trigger flash burst */}
        <circle cx="100" cy="55" r="4" fill={color} className="trg-flash"/>
      </svg>
    );

    case "track": return (
      <svg viewBox="0 0 200 100" className="ill ill-track">
        {/* multiple moving targets with bounding boxes */}
        <g className="trk-target t1">
          <rect x="-12" y="-16" width="24" height="32" rx="2" fill="none" stroke={color} strokeWidth="1.8"/>
          <circle cx="0" cy="0" r="3" fill={color}/>
        </g>
        <g className="trk-target t2">
          <rect x="-12" y="-16" width="24" height="32" rx="2" fill="none" stroke="#fff" strokeWidth="1.8" opacity="0.7"/>
          <circle cx="0" cy="0" r="3" fill="#fff"/>
        </g>
        <g className="trk-target t3">
          <rect x="-12" y="-16" width="24" height="32" rx="2" fill="none" stroke={color} strokeWidth="1.5" opacity="0.6"/>
          <circle cx="0" cy="0" r="3" fill={color}/>
        </g>
        {/* trail path */}
        <path d="M 20 60 Q 80 30, 140 60 T 180 40" stroke={color} strokeWidth="1" strokeDasharray="3 3" fill="none" opacity="0.4"/>
      </svg>
    );

    case "playback": return (
      <svg viewBox="0 0 200 100" className="ill ill-playback">
        {/* timeline bar */}
        <rect x="20" y="58" width="160" height="4" rx="2" fill="rgba(255,255,255,0.15)"/>
        <rect x="20" y="58" width="160" height="4" rx="2" fill={color} className="pb-fill" style={{ clipPath: "inset(0 0 0 0)" }}/>
        {/* thumbnails */}
        <g className="pb-thumbs">
          <rect x="28" y="20" width="22" height="30" rx="2" fill="rgba(255,255,255,0.2)" stroke={color} strokeWidth="1.5"/>
          <rect x="58" y="20" width="22" height="30" rx="2" fill="rgba(255,255,255,0.15)" stroke={color} strokeWidth="1" opacity="0.7"/>
          <rect x="88" y="20" width="22" height="30" rx="2" fill="rgba(255,255,255,0.1)" stroke={color} strokeWidth="1" opacity="0.5"/>
          <rect x="118" y="20" width="22" height="30" rx="2" fill="rgba(255,255,255,0.1)" stroke={color} strokeWidth="1" opacity="0.5"/>
          <rect x="148" y="20" width="22" height="30" rx="2" fill="rgba(255,255,255,0.1)" stroke={color} strokeWidth="1" opacity="0.5"/>
        </g>
        {/* scrub head */}
        <circle r="6" fill={color} stroke="white" strokeWidth="1.5" className="pb-head">
          <animate attributeName="cx" values="20;180;20" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="cy" values="60;60;60" dur="3s" repeatCount="indefinite"/>
        </circle>
      </svg>
    );

    case "notify": return (
      <svg viewBox="0 0 200 100" className="ill ill-notify">
        {/* bell at left */}
        <g className="nf-bell" transform="translate(40, 50)">
          <path d="M -10 -2 A 10 10 0 1 1 10 -2 L 12 8 L -12 8 Z" fill={color}/>
          <rect x="-4" y="8" width="8" height="3" rx="1.5" fill={color}/>
        </g>
        {/* notification cards floating right */}
        <g className="nf-card c1">
          <rect x="80" y="14" width="105" height="22" rx="4" fill="rgba(16,185,129,0.15)" stroke={color} strokeWidth="1"/>
          <circle cx="92" cy="25" r="4" fill={color}/>
          <rect x="102" y="20" width="60" height="3" rx="1.5" fill={color} opacity="0.8"/>
          <rect x="102" y="26" width="40" height="2" rx="1" fill="rgba(255,255,255,0.5)"/>
        </g>
        <g className="nf-card c2">
          <rect x="80" y="42" width="105" height="22" rx="4" fill="rgba(74,139,255,0.15)" stroke="var(--gold)" strokeWidth="1"/>
          <circle cx="92" cy="53" r="4" fill="var(--gold)"/>
          <rect x="102" y="48" width="70" height="3" rx="1.5" fill="var(--gold)" opacity="0.8"/>
          <rect x="102" y="54" width="50" height="2" rx="1" fill="rgba(255,255,255,0.5)"/>
        </g>
        <g className="nf-card c3">
          <rect x="80" y="70" width="105" height="22" rx="4" fill="rgba(74,139,255,0.15)" stroke="var(--accent)" strokeWidth="1"/>
          <circle cx="92" cy="81" r="4" fill="var(--accent)"/>
          <rect x="102" y="76" width="55" height="3" rx="1.5" fill="var(--accent)" opacity="0.8"/>
          <rect x="102" y="82" width="35" height="2" rx="1" fill="rgba(255,255,255,0.5)"/>
        </g>
      </svg>
    );

    default: return null;
  }
}

function CCTVPreview() {
  return (
    <div className="cctv-frame">
      <div className="hud tl">CAM-04 · GERBANG UTAMA</div>
      <div className="hud tr"><span className="rec">REC</span></div>
      <div className="hud bl">24 MAY 2026 · 14:32:08</div>
      <div className="hud br">AI · 24 FPS</div>
      <div className="scanline"/>

      <svg viewBox="0 0 400 250" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1 }}
           preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="floor" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#1A2640"/>
            <stop offset="100%" stopColor="#0A1224"/>
          </linearGradient>
        </defs>
        <rect x="0" y="180" width="400" height="70" fill="url(#floor)"/>
        <g stroke="rgba(74,139,255,0.15)" strokeWidth="0.5" fill="none">
          <line x1="0" y1="180" x2="400" y2="180"/>
          <line x1="0" y1="200" x2="400" y2="200"/>
          <line x1="0" y1="220" x2="400" y2="220"/>
          <line x1="0" y1="240" x2="400" y2="240"/>
          <line x1="200" y1="180" x2="50" y2="250"/>
          <line x1="200" y1="180" x2="350" y2="250"/>
          <line x1="200" y1="180" x2="130" y2="250"/>
          <line x1="200" y1="180" x2="270" y2="250"/>
        </g>
        <g fill="#0F1A2E" opacity="0.7">
          <rect x="0" y="100" width="60" height="80"/>
          <rect x="65" y="80" width="50" height="100"/>
          <rect x="120" y="120" width="40" height="60"/>
          <rect x="240" y="90" width="50" height="90"/>
          <rect x="300" y="110" width="60" height="70"/>
          <rect x="365" y="95" width="35" height="85"/>
        </g>
        <g fill="#8FB1E8" opacity="0.4">
          <rect x="10" y="115" width="4" height="6"/>
          <rect x="25" y="120" width="4" height="6"/>
          <rect x="40" y="115" width="4" height="6"/>
          <rect x="75" y="95" width="4" height="6"/>
          <rect x="90" y="100" width="4" height="6"/>
          <rect x="250" y="105" width="4" height="6"/>
          <rect x="270" y="115" width="4" height="6"/>
          <rect x="315" y="125" width="4" height="6"/>
          <rect x="375" y="110" width="4" height="6"/>
        </g>
        <g fill="#2A3547">
          <ellipse cx="80" cy="170" rx="6" ry="7"/>
          <rect x="74" y="176" width="12" height="22"/>
          <rect x="76" y="195" width="3" height="14"/>
          <rect x="81" y="195" width="3" height="14"/>
          <ellipse cx="200" cy="174" rx="5" ry="6"/>
          <rect x="195" y="179" width="10" height="20"/>
          <rect x="197" y="195" width="2" height="12"/>
          <rect x="201" y="195" width="2" height="12"/>
          <rect x="290" y="170" width="50" height="22" rx="3"/>
          <rect x="298" y="162" width="32" height="12" rx="2"/>
          <circle cx="300" cy="192" r="4" fill="#0A0F1A"/>
          <circle cx="330" cy="192" r="4" fill="#0A0F1A"/>
        </g>
      </svg>

      <div className="det-box b1" data-label="Person · 98%"/>
      <div className="det-box b2" data-label="Person · 94%"/>
      <div className="det-box b3" data-label="Vehicle · 99%"/>
    </div>
  );
}

export { CCTV, CCTVPreview, FeatIllu };
