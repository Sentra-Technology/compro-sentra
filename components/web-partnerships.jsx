"use client";

import React from "react";
import { SectionHead } from "./web-about-services";

// Website — Partnership section with brand logos via Simple Icons CDN + float animations

function Partnership() {
  const partners = [
    {
      name: "TP-Link",
      category: "Networking & Infrastructure",
      desc: "Pemasok perangkat jaringan enterprise untuk implementasi konektivitas Sentra.",
      color: "#4ACBD6",
      // Simple Icons CDN — open-source brand icon library
      logo: "https://cdn.simpleicons.org/tplink/4ACBD6",
    },
    {
      name: "VIGI",
      category: "Surveillance Cameras",
      desc: "Kamera CCTV professional yang menjadi dasar lapisan AI vision Sentra.",
      color: "#10B981",
      // VIGI doesn't have an SI entry — wordmark fallback
      wordmark: "VIGI",
      typeWeight: 900,
      letterSpacing: ".05em",
    },
    {
      name: "Teltonika",
      category: "IoT Telematics",
      desc: "Perangkat tracking dan gateway industrial untuk solusi fleet & remote monitoring.",
      color: "#E60028",
      wordmark: "TELTONIKA",
      typeWeight: 700,
      letterSpacing: ".18em",
    },
    {
      name: "Lenovo",
      category: "Enterprise Computing",
      desc: "Server, workstation, dan perangkat enterprise untuk deployment on-premise.",
      color: "#E2231A",
      logo: "https://cdn.simpleicons.org/lenovo/E2231A",
    },
    {
      name: "Institut Teknologi Kalimantan",
      shortName: "ITK",
      category: "Academic Partner",
      desc: "Kolaborasi riset, magang, dan pengembangan talenta teknologi di Kalimantan.",
      color: "#1D4ED8",
      wordmark: "ITK",
      typeWeight: 800,
      letterSpacing: ".12em",
    },
  ];

  return (
    <section id="partner" className="partnership">
      <div className="wrap">
        <SectionHead
          label="Mitra teknologi"
          title="Bekerja bersama nama-nama terbaik di industrinya."
          lede="Kami berkolaborasi dengan mitra global dan institusi pendidikan untuk memastikan setiap solusi dibangun di atas fondasi yang teruji."
          right={{ num: "05", desc: "Partner aktif\n2025" }}
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
                {p.logo ? (
                  <img src={p.logo} alt={`${p.name} logo`}
                       loading="lazy"
                       onError={(e) => {
                         // Fallback to wordmark if CDN fails
                         e.target.style.display = "none";
                         e.target.nextSibling && (e.target.nextSibling.style.display = "block");
                       }}/>
                ) : null}
                {p.wordmark && (
                  <span className="partner-wordmark"
                        style={{
                          color: p.color,
                          fontWeight: p.typeWeight,
                          letterSpacing: p.letterSpacing,
                          display: p.logo ? "none" : "block",
                        }}>
                    {p.wordmark}
                  </span>
                )}
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
            Bersama kami membangun ekosistem teknologi yang lebih kuat untuk Indonesia.
          </div>
        </div>
      </div>
    </section>
  );
}

export { Partnership };
