"use client";

import React from "react";
import { Icon } from "./primitives";
import { SectionHead } from "./web-about-services";
import { useLang } from "./i18n";

// Website — Team + FAQ

function Team() {
  const { t } = useLang();
  const DIV_META = [
    {
      code: "DIV-01", name: "Business", color: "#8FB1E8", icon: "building",
      members: [
        { name: "Hendra Setiawan",   role: "Head of Business",     img: "hs", tag: "Lead" },
        { name: "Rina Kusuma",       role: "Project Manager",      img: "rk" },
        { name: "Galang Pradipta",   role: "Business Development", img: "gp" },
        { name: "Sari Widyaningsih", role: "Client Success",       img: "sw" },
      ],
    },
    {
      code: "DIV-02", name: "Hardware", color: "#2DD4BF", icon: "iot",
      members: [
        { name: "Rizky Maulana",     role: "Head of Hardware",      img: "rm", tag: "Lead" },
        { name: "Faisal Ramadhan",   role: "IoT & Embedded",         img: "fr" },
        { name: "Tomi Hidayat",      role: "Field & Support",        img: "th" },
        { name: "Bagas Wicaksono",   role: "Network & Infra",        img: "bw" },
      ],
    },
    {
      code: "DIV-03", name: "Software", color: "#4A8BFF", icon: "code",
      members: [
        { name: "Andika Pratama",    role: "Head of Software",       img: "ap", tag: "Lead" },
        { name: "Dewi Larasati",     role: "AI / Computer Vision",   img: "dl" },
        { name: "Nadya Hartono",     role: "Mobile Engineer",        img: "nh" },
        { name: "Putri Anggraini",   role: "QA & Integration",       img: "pa" },
        { name: "Arya Ramadhan",     role: "Full-Stack Engineer",    img: "ar" },
      ],
    },
  ];
  const divisions = DIV_META.map((d, i) => ({ ...d, tagline: t.team.taglines[i] }));

  return (
    <section id="tim">
      <div className="wrap">
        <SectionHead
          label={t.team.label}
          title={t.team.title}
          lede={t.team.lede}
          right={{ num: "13", desc: t.team.rightDesc }}
        />

        <div className="team-divisions">
          {divisions.map(d => <TeamBlock key={d.code} d={d}/>)}
        </div>
      </div>
    </section>
  );
}

function TeamBlock({ d }) {
  const { t } = useLang();
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
            <span className="kicker" style={{ fontSize: 10 }}>{d.members.length} {t.team.member}</span>
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
  const { t } = useLang();
  const items = t.faq.items;
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" className="tight">
      <div className="wrap">
        <SectionHead
          center
          label={t.faq.label}
          title={t.faq.title}
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
