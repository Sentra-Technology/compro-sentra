"use client";

import React from "react";
import { useLang } from "./i18n";

// Website — Client band: logo instansi asli + hover memunculkan detail proyek

function ClientLogos() {
  const { t } = useLang();
  const CLIENTS = [
    { name: "Pemkot Samarinda", logo: "/assets/clients/samarinda.png", img: "/assets/clients/preview-city.jpg" },
    { name: "Diskominfosandi Kab. Barito Utara", logo: "/assets/clients/barut.png", img: "/assets/projects/barito-dash.jpg" },
    { name: "Universitas Mulawarman", logo: "/assets/clients/unmul.png", img: "/assets/projects/attendance.jpg" },
    { name: "Institut Teknologi Kalimantan", logo: "/assets/clients/itk.png", img: "/assets/team-photo.jpg" },
    { name: "STT Migas Balikpapan", logo: "/assets/clients/sttmigas.png", img: "/assets/clients/preview-campus.jpg" },
    { name: "PT. Kideco Jaya Agung", logo: "/assets/clients/kideco.png", img: "/assets/products/integrasi.jpg" },
    { name: "PT. Adhi Karya", logo: "/assets/clients/adhi.png", img: "/assets/projects/safety.jpg" },
    { name: "1Ci Enterprise", mono: "1Ci", color: "#F59E0B", img: "/assets/projects/integration.jpg" },
    { name: "MBC Entertainment", mono: "MBC", color: "#8B5CF6", img: "/assets/projects/imm.jpg" },
  ];
  const clients = CLIENTS.map((c, i) => ({
    ...c,
    sub: t.clients.items[i].sub,
    preview: { img: c.img, title: t.clients.items[i].pt, desc: t.clients.items[i].pd },
  }));
  const loop = [...clients, ...clients];
  return (
    <section className="clients-band" id="trusted">
      <div className="label">{t.clients.label}</div>
      <div className="marquee-mask">
        <div className="marquee">
          {loop.map((c, i) => (
            <div className="client-logo" key={i}>
              <div className="client-mark">
                {c.logo ? (
                  <img src={c.logo} alt={`Logo ${c.name}`} loading="lazy"/>
                ) : (
                  <span className="client-mono" style={{ color: c.color }}>{c.mono}</span>
                )}
              </div>
              <div>
                <div className="name">{c.name}</div>
                <div className="sub">{c.sub}</div>
              </div>
              <div className="client-pop">
                <div className="client-pop-img">
                  <img src={c.preview.img} alt={c.preview.title} loading="lazy"/>
                </div>
                <div className="client-pop-body">
                  <div className="t">{c.preview.title}</div>
                  <div className="d">{c.preview.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { ClientLogos };
