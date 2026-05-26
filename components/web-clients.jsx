"use client";

import React from "react";

// Website — Client Logos band — international + Indonesia clients

function ClientLogos() {
  const clients = [
    {
      name: "Pemkot Samarinda",
      sub: "Pemerintahan · ID",
      mark: (
        <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
          <path d="M6 32 V18 L20 8 L34 18 V32 Z" stroke="#D4A571" strokeWidth="1.8"/>
          <rect x="12" y="22" width="4" height="10" fill="#D4A571"/>
          <rect x="24" y="22" width="4" height="10" fill="#D4A571"/>
          <rect x="18" y="18" width="4" height="14" fill="#D4A571"/>
        </svg>
      ),
    },
    {
      name: "Pemkab Barito Utara",
      sub: "Pemerintahan · ID",
      mark: (
        <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
          <path d="M20 4 L36 12 V28 L20 36 L4 28 V12 Z" stroke="#D4A571" strokeWidth="1.8"/>
          <path d="M14 18 L20 14 L26 18 L26 26 L14 26 Z" stroke="#D4A571" strokeWidth="1.4" fill="rgba(212,165,113,0.15)"/>
          <rect x="18" y="20" width="4" height="6" fill="#D4A571"/>
        </svg>
      ),
    },
    {
      name: "Universitas Mulawarman",
      sub: "Pendidikan · ID",
      mark: (
        <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
          <path d="M4 18 L20 10 L36 18 L20 26 Z" stroke="#8FB1E8" strokeWidth="1.8" fill="rgba(143,177,232,0.2)"/>
          <path d="M12 22 V28 M28 22 V28" stroke="#8FB1E8" strokeWidth="1.8"/>
          <circle cx="20" cy="32" r="2" fill="#8FB1E8"/>
        </svg>
      ),
    },
    {
      name: "Institut Teknologi Kalimantan",
      sub: "Pendidikan · ID",
      mark: (
        <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
          <path d="M20 4 L34 10 V22 C34 30 28 36 20 38 C12 36 6 30 6 22 V10 Z"
                stroke="#1D4ED8" strokeWidth="1.8" fill="rgba(29,78,216,0.15)"/>
          <text x="20" y="24" fill="#1D4ED8" fontFamily="Space Grotesk"
                fontWeight="800" fontSize="10" textAnchor="middle">ITK</text>
        </svg>
      ),
    },
    {
      name: "STT Migas Balikpapan",
      sub: "Pendidikan · ID",
      mark: (
        <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
          <path d="M14 8 L26 8 L30 14 L30 30 C30 33 27 36 24 36 L16 36 C13 36 10 33 10 30 L10 14 Z"
                stroke="#10B981" strokeWidth="1.8" fill="rgba(16,185,129,0.12)"/>
          <circle cx="20" cy="20" r="3.5" fill="#10B981"/>
          <path d="M20 23.5 L20 30" stroke="#10B981" strokeWidth="1.8"/>
        </svg>
      ),
    },
    {
      name: "PT. Kideco Jaya Agung",
      sub: "Mining · ID",
      mark: (
        <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
          <path d="M6 28 L16 18 L22 24 L34 12" stroke="#D4A571" strokeWidth="2.2"/>
          <circle cx="16" cy="18" r="2.5" fill="#D4A571"/>
          <circle cx="22" cy="24" r="2.5" fill="#D4A571"/>
          <circle cx="34" cy="12" r="2.5" fill="#D4A571"/>
        </svg>
      ),
    },
    {
      name: "PT. Adhi",
      sub: "Construction · ID",
      mark: (
        <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
          <path d="M8 32 L20 6 L32 32 Z" stroke="#EF4444" strokeWidth="1.8" fill="rgba(239,68,68,0.15)"/>
          <path d="M14 24 H26" stroke="#EF4444" strokeWidth="1.8"/>
        </svg>
      ),
    },
    {
      name: "1Ci Enterprise",
      sub: "Software · International",
      mark: (
        <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
          <rect x="6" y="6" width="28" height="28" rx="6" stroke="#F59E0B" strokeWidth="1.8"/>
          <text x="20" y="26" fill="#F59E0B" fontFamily="Space Grotesk"
                fontWeight="900" fontSize="14" textAnchor="middle">1Ci</text>
        </svg>
      ),
    },
    {
      name: "MBC Entertainment",
      sub: "Media · International",
      mark: (
        <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
          <path d="M8 14 L8 26 C8 30 12 32 16 32 L24 32 C28 32 32 30 32 26 L32 14"
                stroke="#8B5CF6" strokeWidth="1.8" fill="rgba(139,92,246,0.15)"/>
          <path d="M8 14 L20 22 L32 14" stroke="#8B5CF6" strokeWidth="1.8" fill="none"/>
          <circle cx="20" cy="10" r="2" fill="#8B5CF6"/>
        </svg>
      ),
    },
  ];
  const loop = [...clients, ...clients];
  return (
    <section className="clients-band" id="trusted">
      <div className="label">Dipercaya klien lintas industri di Indonesia & mancanegara</div>
      <div className="marquee-mask">
        <div className="marquee">
          {loop.map((c, i) => (
            <div className="client-logo" key={i}>
              <div className="client-mark">{c.mark}</div>
              <div>
                <div className="name">{c.name}</div>
                <div className="sub">{c.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { ClientLogos };
