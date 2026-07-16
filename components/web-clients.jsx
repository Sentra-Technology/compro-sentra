"use client";

import React from "react";

// Website — Client band: logo instansi asli + hover memunculkan detail proyek

function ClientLogos() {
  const clients = [
    {
      name: "Pemkot Samarinda",
      sub: "Pemerintahan · Kaltim",
      logo: "/assets/clients/samarinda.png",
      preview: {
        img: "/assets/clients/preview-city.jpg",
        title: "Layanan Publik Digital & Smart City",
        desc: "Custom KIOSK layanan mandiri dan konsultasi transformasi digital kota.",
      },
    },
    {
      name: "Diskominfosandi Kab. Barito Utara",
      sub: "Pemerintahan · Kalteng",
      logo: "/assets/clients/barut.png",
      preview: {
        img: "/assets/projects/barito-dash.jpg",
        title: "POMPy BATARA & Dashboard Geospasial",
        desc: "Portal One Map daerah dan pemetaan DAPODIK untuk pengambilan keputusan.",
      },
    },
    {
      name: "Universitas Mulawarman",
      sub: "Pendidikan · Samarinda",
      logo: "/assets/clients/unmul.png",
      preview: {
        img: "/assets/projects/attendance.jpg",
        title: "Smart Attendance & Smartlock Kampus",
        desc: "Absensi face recognition dan akses digital gedung fakultas.",
      },
    },
    {
      name: "Institut Teknologi Kalimantan",
      sub: "Pendidikan · Balikpapan",
      logo: "/assets/clients/itk.png",
      preview: {
        img: "/assets/team-photo.jpg",
        title: "Kemitraan Akademik & Riset",
        desc: "Kolaborasi riset terapan, magang, dan pengembangan talenta teknologi.",
      },
    },
    {
      name: "STT Migas Balikpapan",
      sub: "Pendidikan · Balikpapan",
      logo: "/assets/clients/sttmigas.png",
      preview: {
        img: "/assets/clients/preview-campus.jpg",
        title: "Sistem Informasi Akademik",
        desc: "Digitalisasi layanan kampus dan portal informasi akademik.",
      },
    },
    {
      name: "PT. Kideco Jaya Agung",
      sub: "Mining · Kaltim",
      mono: "KJ",
      color: "#2C5BB8",
      preview: {
        img: "/assets/products/integrasi.jpg",
        title: "CCTV & Network Infrastructure",
        desc: "Rollout infrastruktur jaringan dan CCTV area operasional tambang.",
      },
    },
    {
      name: "PT. Adhi Karya",
      sub: "Konstruksi · BUMN",
      logo: "/assets/clients/adhi.png",
      preview: {
        img: "/assets/projects/safety.jpg",
        title: "AI Safety Monitoring Proyek",
        desc: "Deteksi APD otomatis berbasis computer vision di area konstruksi.",
      },
    },
    {
      name: "1Ci Enterprise",
      sub: "Software · International",
      mono: "1Ci",
      color: "#F59E0B",
      preview: {
        img: "/assets/projects/integration.jpg",
        title: "Integrasi Sistem Enterprise",
        desc: "Konektor dan integrasi lintas platform untuk klien enterprise.",
      },
    },
    {
      name: "MBC Entertainment",
      sub: "Media · International",
      mono: "MBC",
      color: "#8B5CF6",
      preview: {
        img: "/assets/projects/imm.jpg",
        title: "Media Monitoring & Analitik Isu",
        desc: "Dashboard intelijen media dengan analisis isu dan tokoh otomatis.",
      },
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
