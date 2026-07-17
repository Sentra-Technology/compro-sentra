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
      code: "DIV-01", name: "Leadership", color: "#8FB1E8", icon: "building",
      members: [
        { name: "Muhammad Nabil Akbar Pratama", role: "Chief Executive Officer", img: "nabil",     tag: "CEO" },
        { name: "Richard Chandra Tjiang",       role: "Chief Operating Officer", img: "richard-c", tag: "COO" },
      ],
    },
    {
      code: "DIV-02", name: "Hardware", color: "#2DD4BF", icon: "iot",
      members: [
        { name: "Adam Naufal Ashalhuda",   role: "Hardware Lead",   img: "adam", tag: "Lead" },
        { name: "Paul Vincent Mendrov",    role: "Network & Infra", img: "paul" },
        { name: "Zikri Maulana",           role: "Network & Infra", img: "zikri" },
        { name: "Khrisna Dhika Sonjaya",   role: "Field Support",   img: "khrisna" },
        { name: "Ridhwan Cahyo Kuncoro",   role: "Field Support",   img: "ridhwan" },
      ],
    },
    {
      code: "DIV-03", name: "Software", color: "#4A8BFF", icon: "code",
      members: [
        { name: "Richard Owen Hoan",                 role: "Software Lead",      img: "richard-o", tag: "Lead" },
        { name: "Ahmad Rusdianto Andarina Syakbani", role: "AI Engineer",        img: "ahmad" },
        { name: "Muhamad Ilham",                     role: "UI & UX Designer",   img: "ilham" },
        { name: "Rudy Rachman",                      role: "Mobile Engineer",    img: "rudy" },
        { name: "Jihan Apriliani Nurhasanah",        role: "Fullstack Engineer", img: "jihan" },
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
          right={{ num: "12", desc: t.team.rightDesc }}
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

      <div className="team-grid" style={ d.members.length === 2
        ? { gridTemplateColumns: "repeat(2, minmax(0, 300px))", justifyContent: "center" }
        : { gridTemplateColumns: `repeat(${d.members.length === 5 ? 5 : 4}, 1fr)` } }>
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
