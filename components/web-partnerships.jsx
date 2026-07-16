"use client";

import React from "react";
import { SectionHead } from "./web-about-services";
import { useLang } from "./i18n";

// Website — Partnership section with real brand logos (local assets) + float animations

function Partnership() {
  const { t } = useLang();
  const META = [
    { name: "TP-Link", color: "#4ACBD6", logo: "/assets/partners/tplink.png" },
    { name: "VIGI", color: "#10B981", logo: "/assets/partners/vigi.png" },
    { name: "Teltonika", color: "#1B2F7E", logo: "/assets/partners/teltonika.png" },
    { name: "Lenovo", color: "#E2231A", logo: "/assets/partners/lenovo.png" },
    { name: "Institut Teknologi Kalimantan", shortName: "ITK", color: "#1D4ED8", logo: "/assets/partners/itk.png" },
  ];
  const partners = META.map((m, i) => ({ ...m, ...t.partner.partners[i] }));

  return (
    <section id="partner" className="partnership">
      <div className="wrap">
        <SectionHead
          label={t.partner.label}
          title={t.partner.title}
          lede={t.partner.lede}
          right={{ num: "05", desc: t.partner.rightDesc }}
        />

        <div className="partner-grid">
          {partners.map((p, i) => (
            <div className="partner-card reveal" key={p.name}
                 style={{
                   transitionDelay: `${i * 80}ms`,
                   ["--pc"]: p.color,
                   animationDelay: `${i * 0.4}s`,
                 }}>
              <div className="partner-mark">
                <img src={p.logo} alt={`${p.name} logo`} loading="lazy"/>
              </div>
              <div className="partner-name">{p.shortName || p.name}</div>
              {p.shortName && <div className="partner-full">{p.name}</div>}
              <div className="partner-cat">{p.category}</div>
              <p className="partner-desc">{p.desc}</p>
              <div className="partner-glow"/>
              <div className="partner-shimmer"/>
            </div>
          ))}
        </div>

        <div className="partner-strip reveal">
          <div className="partner-strip-label">
            {t.partner.strip}
          </div>
        </div>
      </div>
    </section>
  );
}

export { Partnership };
