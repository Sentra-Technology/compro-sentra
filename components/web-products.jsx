"use client";

import React from "react";
import { Icon } from "./primitives";
import { SectionHead } from "./web-about-services";
import { ProductPreview } from "./web-product-previews";

// Website — Product Showcase (tabbed) + Portfolio (filterable)

const PRODUCTS = [
  {
    code: "SL-01", name: "Smartlock", icon: "lock", color: "#0EA5E9",
    tagline: "Akses pintu pintar.",
    desc: "Kontrol akses ruangan dari satu dashboard, dengan audit trail lengkap.",
    features: ["Kartu, PIN, atau app", "Audit log real-time", "Integrasi HRIS", "Offline mode"],
  },
  {
    code: "AI-02", name: "Safety AI", icon: "shield", color: "#EF4444",
    tagline: "Computer vision untuk K3.",
    desc: "Deteksi otomatis pelanggaran APD & area terlarang dari CCTV existing.",
    features: ["Deteksi APD lengkap", "Alert real-time", "CCTV existing", "Laporan compliance"],
  },
  {
    code: "AT-03", name: "Attendance", icon: "user", color: "#10B981",
    tagline: "Absensi face-recognition.",
    desc: "Akurat, anti-titip absen, dan terhubung otomatis ke HRIS.",
    features: ["Akurasi 98%+", "Geofencing & shift", "Sinkron HRIS", "Mobile / kiosk"],
  },
  {
    code: "HR-04", name: "HRIS Sentra", icon: "building", color: "#2C5BB8",
    tagline: "HR end-to-end.",
    desc: "Cuti, payroll, performance, dokumen — satu sistem, mobile-first.",
    features: ["Self-service", "Payroll & BPJS", "Approval workflow", "iOS & Android"],
  },
  {
    code: "FM-05", name: "Fleet", icon: "truck", color: "#F59E0B",
    tagline: "Telematik armada.",
    desc: "Tracking, konsumsi BBM, perilaku driver — dalam satu peta operasional.",
    features: ["GPS + replay", "Sensor BBM ±2%", "Driver scoring", "Maintenance reminder"],
  },
  {
    code: "AI-06", name: "sentrAI", icon: "ai", color: "#7C3AED",
    tagline: "Private LLM on-prem.",
    desc: "Asisten AI dilatih di atas dokumen internal, data tidak keluar jaringan.",
    features: ["100% on-prem", "Indexing dokumen", "Audit per query", "Multi-tenant"],
  },
  {
    code: "WB-07", name: "Website", icon: "code", color: "#8B5CF6",
    tagline: "Portal & web app custom.",
    desc: "Website korporat, portal pemerintahan, dashboard analitik — dibangun dari nol.",
    features: ["Design system custom", "CMS mudah dikelola", "SEO terukur", "Hosting & support"],
  },
  {
    code: "IN-08", name: "Integrasi", icon: "cog", color: "#06B6D4",
    tagline: "Menyatukan sistem lama.",
    desc: "API, connector, dan SSO yang membuat data mengalir lintas platform.",
    features: ["API custom", "Migrasi data aman", "Single sign-on", "Monitoring SLA"],
  },
  {
    code: "MT-09", name: "Sentra Meeting", icon: "cam", color: "#14B8A6",
    tagline: "Video conference enterprise.",
    desc: "Rapat HD dengan rekaman otomatis, transkripsi AI, dan integrasi langsung ke kalender perusahaan.",
    features: ["HD video hingga 100 peserta", "Transkripsi AI Bahasa Indonesia", "Rekaman cloud + on-prem", "Integrasi kalender & HRIS"],
  },
  {
    code: "IV-10", name: "Sentra Invoice", icon: "money", color: "#F97316",
    tagline: "Invoicing & billing modern.",
    desc: "Buat invoice profesional dalam hitungan detik — lengkap dengan pajak, pengiriman, dan tracking pembayaran.",
    features: ["Template kustom & multi-mata uang", "PPN otomatis & e-Faktur ready", "Reminder pembayaran terjadwal", "Sinkron ke akuntansi & ERP"],
  },
  {
    code: "KS-11", name: "Custom KIOSK", icon: "building", color: "#EC4899",
    tagline: "Self-service kiosk untuk layanan publik.",
    desc: "Mesin kiosk layar sentuh yang dirancang khusus untuk antrian, pendaftaran, pembayaran, dan layanan publik mandiri \u2014 lengkap dengan printer, scanner QR, dan integrasi e-KTP.",
    features: ["Layar sentuh 21\u201932 inch HD", "Printer thermal & scanner e-KTP", "Software custom sesuai workflow", "Maintenance & after-sales lokal"],
  },
];

function ProductShowcase() {
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const p = PRODUCTS[active];

  // Auto-advance every 6s, paused on hover
  React.useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => {
      setActive(a => (a + 1) % PRODUCTS.length);
    }, 6000);
    return () => clearTimeout(t);
  }, [active, paused]);

  return (
    <section id="produk">
      <div className="wrap">
        <SectionHead
          label="Lini produk"
          title="Sebelas produk yang saling terintegrasi."
          lede="Pilih satu, atau gabungkan beberapa dalam satu platform terpadu — tanpa vendor lock-in."
          right={{ num: "11", desc: "Product lines\nOne platform" }}
        />

        <div className="showcase reveal"
             style={{ ["--prod-color"]: p.color }}
             onMouseEnter={() => setPaused(true)}
             onMouseLeave={() => setPaused(false)}>
          <div className="showcase-glow" style={{ background: `radial-gradient(circle, ${p.color}33 0%, transparent 70%)` }}/>
          <div className="tab-list">
            {PRODUCTS.map((pr, i) => {
              const TIc = Icon[pr.icon];
              return (
                <button key={pr.code}
                        className={active === i ? "active" : ""}
                        style={{ ["--ic-color"]: pr.color }}
                        onClick={() => setActive(i)}>
                  <span className="tab-ic"><TIc /></span>
                  <span className="tab-text">
                    <span className="code">{pr.code}</span>
                    <span className="name">{pr.name}</span>
                  </span>
                  {active === i && !paused && <span className="tab-progress"/>}
                </button>
              );
            })}
          </div>

          <div className="tab-panel" key={p.code}>
            <div className="tab-content">
              <div className="code" style={{ color: p.color }}>{p.code} · {p.tagline}</div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <ul className="feat-list" style={{ ["--ic-color"]: p.color }}>
                {p.features.map(f => (
                  <li key={f}><Icon.check /> {f}</li>
                ))}
              </ul>
              <a href="#contact" className="product-link"
                 style={{ color: p.color, borderColor: p.color }}>
                Minta demo <Icon.ne />
              </a>
            </div>

            <div className="pv" style={{ ["--pc"]: p.color }}>
              <div className="pv-rim"/>
              <span className="pv-badge">{p.code}</span>
              <ProductPreview code={p.code}/>
              <div className="pv-particles">
                {[0,1,2,3,4,5].map(i => <span key={i} className={`pv-spark s${i}`}/>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductVisual({ color, icon }) {
  const Ic = Icon[icon];
  return (
    <div style={{ position: "relative", width: "62%", aspectRatio: "1/1", zIndex: 2 }}>
      <div style={{
        position: "absolute", inset: 0, borderRadius: "50%",
        background: `radial-gradient(circle, ${color}55 0%, transparent 65%)`,
        animation: "pulseGlow 4s ease-in-out infinite",
      }}/>
      <div style={{
        position: "absolute", inset: "22%", borderRadius: 20,
        background: `linear-gradient(135deg, ${color}, ${color}aa)`,
        display: "grid", placeItems: "center",
        color: "#fff",
        boxShadow: `0 24px 60px -16px ${color}90`,
        animation: "floatXY 5s ease-in-out infinite",
      }}>
        <div style={{ transform: "scale(2.6)" }}>
          <Ic />
        </div>
      </div>
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <div key={i} style={{
          position: "absolute",
          top: "50%", left: "50%",
          width: 0, height: 0,
          transform: `rotate(${deg}deg) translateY(-50%)`,
        }}>
          <div style={{
            position: "absolute",
            top: "-50%", left: "-4px",
            width: 8, height: 8,
            borderRadius: "50%",
            background: color,
            opacity: i % 2 === 0 ? 1 : .4,
          }}/>
        </div>
      ))}
    </div>
  );
}

/* PORTFOLIO with category filter — projects & imagery diambil dari company profile Sentra */
function Portfolio() {
  const projects = [
    { year:"2025", cat:"IoT",      client:"Kontraktor Tambang · Kaltim",   title:"Fleet Management System — Telematik Armada Hauling", tags:["FMS","Telematics","CAN-Bus"], color:"#F59E0B", img:"/assets/projects/fms.jpg" },
    { year:"2025", cat:"Software", client:"Pemkab Barito Utara",           title:"POMPy BATARA — Portal One Map & Dashboard Daerah",   tags:["Web","GIS","One Map"],        color:"#10B981", img:"/assets/projects/barito-dash.jpg" },
    { year:"2024", cat:"Software", client:"Pemkab Barito Utara",           title:"Dashboard Geospasial DAPODIK — Pemetaan Sekolah",    tags:["GIS","Data Pendidikan"],      color:"#06B6D4", img:"/assets/projects/dapodik.jpg" },
    { year:"2025", cat:"AI",       client:"Universitas Mulawarman",        title:"Smart Attendance — Absensi Face Recognition",        tags:["Face Reco","CCTV","Mobile"],  color:"#2C5BB8", img:"/assets/projects/attendance.jpg" },
    { year:"2025", cat:"IoT",      client:"Fakultas Farmasi Unmul",        title:"Sentra Smartlock — Akses Digital Gedung Kampus",     tags:["IoT","Access Control"],       color:"#0EA5E9", img:"/assets/projects/smartlock.jpg" },
    { year:"2025", cat:"AI",       client:"PT. Multi Harapan Utama",       title:"Deteksi Atribut Keselamatan (APD) Berbasis AI",      tags:["AI","Vision","K3"],           color:"#EF4444", img:"/assets/projects/safety.jpg" },
    { year:"2024", cat:"Software", client:"Bukit Baiduri Energi",          title:"HRIS Sentra — Absensi, Payroll & Slip Gaji Mobile",  tags:["HRIS","Mobile","Payroll"],    color:"#7C3AED", img:"/assets/projects/hris.jpg" },
    { year:"2024", cat:"Software", client:"FEB Universitas Mulawarman",    title:"Website & Sistem Informasi Fakultas",                tags:["Web","CMS"],                  color:"#8B5CF6", img:"/assets/projects/feb-unmul.jpg" },
    { year:"2023", cat:"Software", client:"Fakultas Farmasi Unmul",        title:"Website Resmi Fakultas Farmasi",                     tags:["Web","CMS"],                  color:"#14B8A6", img:"/assets/projects/farmasi.jpg" },
    { year:"2024", cat:"AI",       client:"Intelligence Media Management", title:"Dashboard Media Monitoring & Analitik Isu",          tags:["NLP","Analytics"],            color:"#E11D48", img:"/assets/projects/imm.jpg" },
    { year:"2025", cat:"AI",       client:"Platform Analitik Media Sosial", title:"Dashboard Analisis Sentimen & Social Listening",    tags:["NLP","Social Listening"],     color:"#475569", img:"/assets/projects/sentiment.jpg" },
  ];
  const cats = ["All", "IoT", "AI", "Software"];
  const [filter, setFilter] = React.useState("All");
  const filtered = filter === "All" ? projects : projects.filter(p => p.cat === filter);

  return (
    <section id="portfolio">
      <div className="wrap">
        <SectionHead
          label="Sudah berjalan di lapangan"
          title="Solusi yang nyata bekerja."
          lede="Sebelas dari 50+ proyek lintas industri sepanjang 2023–2025 — pemerintahan, pendidikan, dan industri."
          right={{ num: "50+", desc: "Proyek terdeliver\n2019 – sekarang" }}
        />

        <div className="filter-pills reveal">
          {cats.map(c => (
            <button key={c}
                    className={`filter-pill ${filter === c ? "active" : ""}`}
                    onClick={() => setFilter(c)}>
              {c}
              {c !== "All" && (
                <span style={{ marginLeft: 6, opacity: .6, fontSize: 11 }}>
                  {projects.filter(p => p.cat === c).length}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="proj-grid">
          {filtered.map((p, i) => (
            <div className="proj-card proj-anim" key={p.title} style={{ animationDelay: `${i * 60}ms`, ["--pc"]: p.color }}>
              <div className="proj-img">
                <img src={p.img} alt={`${p.title} — ${p.client}`} loading="lazy"/>
                <span className="idx">{p.cat.toUpperCase()} · {String(i+1).padStart(2,"0")}</span>
                <span className="yr" style={{ color: p.color }}>{p.year}</span>
              </div>
              <div className="proj-body">
                <div className="client" style={{ color: p.color }}>{p.client}</div>
                <div className="title">{p.title}</div>
                <div className="tags">
                  {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { ProductShowcase, Portfolio };
