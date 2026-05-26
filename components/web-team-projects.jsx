"use client";

import React from "react";
import { Icon } from "./primitives";
import { SectionHead } from "./web-about-services";

// Website — Team + FAQ

function Team() {
  const divisions = [
    {
      code: "DIV-01",
      name: "Business",
      tagline: "Client success, sales, delivery, dan after-sales.",
      color: "#D4A571", icon: "building",
      members: [
        { name: "Hendra Setiawan",   role: "Head of Business",     img: "hs", tag: "Lead" },
        { name: "Rina Kusuma",       role: "Project Manager",      img: "rk" },
        { name: "Galang Pradipta",   role: "Business Development", img: "gp" },
        { name: "Sari Widyaningsih", role: "Client Success",       img: "sw" },
      ],
    },
    {
      code: "DIV-02",
      name: "Hardware",
      tagline: "IoT, instalasi lapangan, jaringan, dan perangkat fisik.",
      color: "#2DD4BF", icon: "iot",
      members: [
        { name: "Rizky Maulana",     role: "Head of Hardware",      img: "rm", tag: "Lead" },
        { name: "Faisal Ramadhan",   role: "IoT & Embedded",         img: "fr" },
        { name: "Tomi Hidayat",      role: "Field & Support",        img: "th" },
        { name: "Bagas Wicaksono",   role: "Network & Infra",        img: "bw" },
      ],
    },
    {
      code: "DIV-03",
      name: "Software",
      tagline: "Web, mobile, AI, data engineering, dan integrasi sistem.",
      color: "#4A8BFF", icon: "code",
      members: [
        { name: "Andika Pratama",    role: "Head of Software",       img: "ap", tag: "Lead" },
        { name: "Dewi Larasati",     role: "AI / Computer Vision",   img: "dl" },
        { name: "Nadya Hartono",     role: "Mobile Engineer",        img: "nh" },
        { name: "Putri Anggraini",   role: "QA & Integration",       img: "pa" },
        { name: "Arya Ramadhan",     role: "Full-Stack Engineer",    img: "ar" },
      ],
    },
  ];
  return (
    <section id="tim">
      <div className="wrap">
        <SectionHead
          label="Tim kami"
          title="Tiga divisi. Satu tim."
          lede="13 ahli in-house — dibagi ke divisi Business, Hardware, dan Software, bekerja end-to-end pada setiap proyek."
          right={{ num: "13", desc: "Anggota tim\n03 divisi · in-house" }}
        />

        <div className="team-divisions">
          {divisions.map(d => <TeamBlock key={d.code} d={d}/>)}
        </div>
      </div>
    </section>
  );
}

function TeamBlock({ d }) {
  const Ic = Icon[d.icon] || Icon.cog;
  return (
    <div className="team-block reveal">
      <div className="team-block-head" style={{
        background: `linear-gradient(90deg, ${d.color}1F, transparent 70%)`,
      }}>
        <div className="ic" style={{
          background: d.color,
          boxShadow: `0 8px 18px -4px ${d.color}80`,
        }}><Ic /></div>
        <div className="head-text">
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span className="code" style={{ color: d.color }}>{d.code}</span>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--line)" }}/>
            <span className="kicker" style={{ fontSize: 10 }}>{d.members.length} ANGGOTA</span>
          </div>
          <div className="name">{d.name}</div>
        </div>
        <div className="tagline">{d.tagline}</div>
      </div>

      <div className="team-grid" style={{ gridTemplateColumns: `repeat(${d.members.length === 5 ? 5 : 4}, 1fr)` }}>
        {d.members.map(m => <Member key={m.img} m={m} color={d.color} />)}
      </div>
    </div>
  );
}

function Member({ m, color }) {
  return (
    <div className="team-member">
      {m.tag && <span className="tag" style={{ color }}>{m.tag}</span>}
      <div className="avatar-photo" style={{ borderColor: color }}>
        <img src={`/assets/team/${m.img}.jpg`}   alt={m.name} className="frame-a"/>
        <img src={`/assets/team/${m.img}-b.jpg`} alt=""        aria-hidden="true" className="frame-b"/>
        <img src={`/assets/team/${m.img}-c.jpg`} alt=""        aria-hidden="true" className="frame-c"/>
        <div className="avatar-ring" style={{ borderColor: color }}/>
      </div>
      <div className="name">{m.name}</div>
      <div className="role">{m.role}</div>
    </div>
  );
}

/* FAQ — accordion */
function FAQ() {
  const items = [
    {
      q: "Berapa lama proses implementasi tipikal?",
      a: "Untuk pilot bisa dimulai dalam 2–4 minggu. Rollout penuh untuk solusi terintegrasi biasanya 2–6 bulan tergantung skala — kami mulai dengan pilot kecil yang terukur sebelum scale-up.",
    },
    {
      q: "Apakah data klien aman dan bisa di-host on-premise?",
      a: "Ya. Semua produk kami mendukung deployment on-premise atau private cloud. Untuk klien sektor pemerintah dan keuangan, kami biasanya merekomendasikan opsi on-prem dengan audit log lengkap.",
    },
    {
      q: "Apakah Sentra bisa integrasi dengan sistem yang sudah kami pakai?",
      a: "Ya, ini justru menjadi kekuatan kami. Tim integrasi kami terbiasa menyambungkan ERP lama, HRIS, CCTV, dan database lain ke platform Sentra melalui API atau connector custom.",
    },
    {
      q: "Apakah kami harus berlangganan semua produk?",
      a: "Tidak. Mulai dari satu produk yang paling mendesak (mis. Attendance atau Smartlock), lalu tambahkan sesuai kebutuhan operasi. Tidak ada vendor lock-in.",
    },
    {
      q: "Bagaimana dukungan after-sales?",
      a: "Tim support kami 100% in-house dan berbasis di Indonesia. Tersedia paket SLA dengan response time 1–4 jam tergantung tier, dan tim lapangan dapat hadir on-site untuk implementasi besar.",
    },
    {
      q: "Apakah Sentra hanya melayani Kalimantan Timur?",
      a: "Tidak. Kami berbasis di Samarinda, tapi proyek kami tersebar di berbagai provinsi. Implementasi dilakukan dengan kombinasi tim on-site dan remote.",
    },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" className="tight">
      <div className="wrap">
        <SectionHead
          center
          label="FAQ"
          title="Pertanyaan yang sering diajukan."
        />

        <div className="faq-list reveal">
          {items.map((it, i) => (
            <div key={i} className={`faq-item ${open === i ? "open" : ""}`}>
              <button
                className="faq-q"
                type="button"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? -1 : i)}>
                {it.q}
                <span className="faq-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </span>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">{it.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Team, FAQ, TeamBlock };
