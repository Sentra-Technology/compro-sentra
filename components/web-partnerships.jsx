"use client";

import React from "react";
import { SectionHead } from "./web-about-services";

// Website — Partnership section with real brand logos (local assets) + float animations

function Partnership() {
  const partners = [
    {
      name: "TP-Link",
      category: "Networking & Infrastructure",
      desc: "Pemasok perangkat jaringan enterprise untuk implementasi konektivitas Sentra.",
      color: "#4ACBD6",
      logo: "/assets/partners/tplink.png",
    },
    {
      name: "VIGI",
      category: "AI Surveillance",
      desc: "Kamera CCTV professional yang menjadi dasar lapisan AI vision Sentra.",
      color: "#10B981",
      logo: "/assets/partners/vigi.png",
    },
    {
      name: "Teltonika",
      category: "IoT Telematics",
      desc: "Perangkat tracking dan gateway industrial berstandar Eropa untuk solusi fleet & remote monitoring.",
      color: "#1B2F7E",
      logo: "/assets/partners/teltonika.png",
    },
    {
      name: "Lenovo",
      category: "Enterprise Computing",
      desc: "Server, workstation, dan perangkat enterprise untuk deployment on-premise.",
      color: "#E2231A",
      logo: "/assets/partners/lenovo.png",
    },
    {
      name: "Institut Teknologi Kalimantan",
      shortName: "ITK",
      category: "Academic Partner",
      desc: "Kolaborasi riset, magang, dan pengembangan talenta teknologi di Kalimantan.",
      color: "#1D4ED8",
      logo: "/assets/partners/itk.png",
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
            Bersama kami membangun ekosistem teknologi yang lebih kuat untuk Indonesia.
          </div>
        </div>
      </div>
    </section>
  );
}

export { Partnership };
