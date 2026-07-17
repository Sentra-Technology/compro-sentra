"use client";

import React from "react";
import { Icon } from "./primitives";
import { useLang } from "./i18n";

// Website — About + Services v5 (dense, no empty space, animated timeline, i18n)

function SectionHead({ label, title, lede, right, center }) {
  return (
    <div className={`section-head reveal ${center ? "center" : ""}`}>
      <div className="left">
        <p className="section-label">{label}</p>
        <h2 className="h-section">{title}</h2>
        {lede && <p className="lede" style={{ marginTop: 14 }}>{lede}</p>}
      </div>
      {right && (
        <div className="right">
          <div className="num">{right.num}</div>
          <div className="desc">{right.desc}</div>
        </div>
      )}
    </div>
  );
}

function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <section id="tentang" className="about-center">
      <div className="wrap">
        <div className="ac-head reveal">
          <p className="section-label">{a.label}</p>
          <h2 className="h-section">
            {a.hPre} <span className="hl-gold">{a.hHl1}</span> {a.hMid}
            <span className="hl-gold"> {a.hHl2}</span>
          </h2>
        </div>

        {/* Narrative + visual + sidebar stats */}
        <div className="ac-grid">
          <div className="ac-narrative reveal-left">
            <p className="lede-big">
              {a.p1a} <strong>2019</strong> {a.p1b} <em>{a.p1em}</em>
            </p>
            <p>{a.p2}</p>

            <div className="ac-pillars">
              <div className="ac-pillar">
                <div className="ac-pillar-head">
                  <div className="ic gold"><Icon.zap/></div>
                  <h4>{a.visiT}</h4>
                </div>
                <p>{a.visiD}</p>
              </div>

              <div className="ac-pillar">
                <div className="ac-pillar-head">
                  <div className="ic blue"><Icon.cog/></div>
                  <h4>{a.misiT}</h4>
                </div>
                <ul>
                  {a.misi.map((m, i) => <li key={i}>{m}</li>)}
                </ul>
              </div>
            </div>

            {/* Statistik ringkas — memadatkan kolom naratif */}
            <div className="ac-mini-stats">
              {["6+", "50+", "12", "11"].map((v, i) => (
                <div className="ac-mini-stat" key={i}>
                  <div className="v">{v}</div>
                  <div className="k">{a.stats[i]}</div>
                </div>
              ))}
            </div>

            {/* Sektor yang dilayani */}
            <div className="ac-sectors">
              <div className="ac-sectors-label">{a.sectorsLabel}</div>
              <div className="ac-sectors-chips">
                {a.sectors.map(s => (
                  <span className="ac-sector-chip" key={s}>{s}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="ac-side reveal-right">
            <div className="ac-photo">
              <img src="/assets/team-photo-v2.jpg" alt={a.photoTag}/>
              <div className="ac-photo-overlay">
                <div className="ac-photo-tag">
                  <span className="ac-photo-dot"/>
                  {a.photoTag}
                </div>
                <div className="ac-photo-caption">
                  Leadership · Hardware · Software
                </div>
              </div>
            </div>
            <AboutVisual/>
            <AboutValues/>
          </div>
        </div>

        {/* Animated timeline with hover thumbnails */}
        <Timeline/>
      </div>
    </section>
  );
}

/* Animated visualization: orbiting capability chips + center quote */
function AboutVisual() {
  const { t } = useLang();
  const a = t.about;
  const labels = [
    { txt: "AI",            deg:   0, color: "var(--gold)" },
    { txt: "Computer Vision", deg:  60, color: "var(--accent)" },
    { txt: "IoT",           deg: 120, color: "var(--teal)" },
    { txt: "Software",      deg: 180, color: "var(--gold-2)" },
    { txt: "Analytics",     deg: 240, color: "var(--accent-2)" },
    { txt: "Integration",   deg: 300, color: "var(--gold)" },
  ];
  return (
    <div className="ac-visual">
      <div className="ac-orbit">
        <div className="ac-ring r1"/>
        <div className="ac-ring r2"/>
        <div className="ac-ring r3"/>

        {labels.map((l, i) => (
          <div key={i} className="ac-chip"
               style={{
                 transform: `rotate(${l.deg}deg) translateX(140px) rotate(${-l.deg}deg)`,
                 animationDelay: `${i * 0.15}s`,
                 borderColor: l.color, color: l.color,
               }}>
            {l.txt}
          </div>
        ))}

        <div className="ac-center">
          <div className="ac-quote-mark">"</div>
          <div className="ac-quote">
            {a.q1} <strong>{a.qStrong}</strong> {a.q2}
          </div>
          <div className="ac-cred">{a.qCred}</div>
        </div>

        {[0, 1, 2, 3].map(i => (
          <span key={i} className={`ac-spark s${i+1}`}/>
        ))}
      </div>
    </div>
  );
}

/* Values cards under the visual to fill space */
function AboutValues() {
  const { t } = useLang();
  const ics = ["shield", "user", "history", "zap"];
  return (
    <div className="ac-values">
      {t.about.values.map((v, i) => {
        const Ic = Icon[ics[i]];
        return (
          <div className="ac-value" key={i} style={{ animationDelay: `${i * 90}ms` }}>
            <div className="ic"><Ic/></div>
            <div className="ac-value-text">
              <div className="t">{v.t}</div>
              <div className="d">{v.d}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* Timeline with hover-reveal photo thumbnails */
function Timeline() {
  const { t } = useLang();
  const a = t.about;
  const years = ["2019", "2021", "2023", "2024", "2025"];
  const items = years.map((year, i) => ({
    year,
    t: a.timeline[i].t,
    d: a.timeline[i].d,
    img: `/assets/timeline/${year}-v2.jpg`,
  }));
  const [hover, setHover] = React.useState(null);

  return (
    <div className="ac-timeline reveal">
      <div className="ac-timeline-label">
        <p className="section-label" style={{ justifyContent: "center", color: "var(--gold-2)" }}>{a.tlLabel}</p>
        <h3>{a.tlH}</h3>
        <p className="ac-tl-sub">{a.tlSub}</p>
      </div>
      <div className="ac-timeline-track">
        <div className="ac-timeline-line"/>
        {/* Star-Wars-style sweeping beam */}
        <div className="ac-timeline-beam"/>
        <div className="ac-timeline-spark"/>
        {items.map((it, i) => (
          <div className={`ac-tl-item ${hover === i ? "is-hover" : ""}`}
               key={it.year}
               style={{ animationDelay: `${i * 120}ms` }}
               onMouseEnter={() => setHover(i)}
               onMouseLeave={() => setHover(null)}>
            <div className="ac-tl-dot"/>
            <div className="ac-tl-thumb">
              <img src={it.img} alt={`${it.year} milestone`}/>
              <div className="ac-tl-thumb-overlay">
                <span className="ac-tl-thumb-year">{it.year}</span>
                <span className="ac-tl-thumb-tag">{a.tlDoc}</span>
              </div>
            </div>
            <div className="ac-tl-year">{it.year}</div>
            <div className="ac-tl-title">{it.t}</div>
            <div className="ac-tl-desc">{it.d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Services() {
  const { t } = useLang();
  const META = [
    { ic: "cam",      chips: ["Object Detection", "ANPR", "Heatmap"] },
    { ic: "iot",      chips: ["Sensor", "Gateway", "4G/LoRa"] },
    { ic: "ai",       chips: ["YOLO", "Face Reco", "OCR"] },
    { ic: "cloud",    chips: ["RAG", "On-Prem", "Multi-tenant"] },
    { ic: "code",     chips: ["Web", "Mobile", "API"] },
    { ic: "building", chips: ["REST API", "SSO", "ETL"] },
    { ic: "data",     chips: ["Dashboard", "BI", "Real-time"] },
    { ic: "cog",      chips: ["IT Audit", "Roadmap", "Training"] },
  ];
  return (
    <section id="solusi">
      <div className="wrap">
        <SectionHead
          label={t.services.label}
          title={t.services.title}
          lede={t.services.lede}
          right={{ num: "11", desc: t.services.rightDesc }}
        />

        <div className="svc-grid">
          {t.services.tiles.map((s, i) => {
            const Ic = Icon[META[i].ic];
            return (
              <div className="svc-tile reveal" key={i} style={{ transitionDelay: `${(i % 4) * 80}ms` }}>
                <div className="ic"><Ic/></div>
                <h4>{s.t}</h4>
                <p>{s.d}</p>
                {/* Detail muncul saat hover — pola sama dengan kartu fitur CCTV */}
                <div className="svc-detail">
                  <div className="svc-detail-inner">
                    <p>{t.services.details[i]}</p>
                    <div className="svc-chips">
                      {META[i].chips.map(c => <span key={c}>{c}</span>)}
                    </div>
                  </div>
                </div>
                <div className="svc-hint">{t.cctv.hint}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { About, Services, SectionHead, Timeline, AboutVisual, AboutValues };
