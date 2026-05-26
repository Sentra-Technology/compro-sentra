// Website — About + Services v5 (dense, no empty space, animated timeline)

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
  return (
    <section id="tentang" className="about-center">
      <div className="wrap">
        <div className="ac-head reveal">
          <p className="section-label">Pusat Teknologi · About Center</p>
          <h2 className="h-section">
            Lebih dari penyedia <span className="hl-gold">teknologi</span> — kami adalah
            <span className="hl-gold"> tim yang tumbuh bersama operasi Anda.</span>
          </h2>
        </div>

        {/* Narrative + visual + sidebar stats */}
        <div className="ac-grid">
          <div className="ac-narrative reveal-left">
            <p className="lede-big">
              PT. Sentra Visi Teknologi adalah pusat teknologi yang lahir di
              Samarinda pada <strong>2019</strong> — dengan satu fokus: membantu
              organisasi Indonesia membuat keputusan operasional yang
              <em> terlihat, terukur, dan terkendali.</em>
            </p>
            <p>
              Selama enam tahun, kami berkembang dari studio kecil yang
              membangun perangkat IoT lokal menjadi mitra teknologi end-to-end
              untuk pemerintahan, industri, pendidikan, dan korporasi.
            </p>

            <div className="ac-pillars">
              <div className="ac-pillar">
                <div className="ac-pillar-head">
                  <div className="ic gold"><Icon.zap/></div>
                  <h4>Visi</h4>
                </div>
                <p>
                  Menjadi pusat teknologi terkemuka di Indonesia Timur yang
                  menghadirkan solusi cerdas, terintegrasi, dan berdampak nyata
                  bagi setiap klien dan komunitas yang kami layani.
                </p>
              </div>

              <div className="ac-pillar">
                <div className="ac-pillar-head">
                  <div className="ic blue"><Icon.cog/></div>
                  <h4>Misi</h4>
                </div>
                <ul>
                  <li>Merancang solusi yang nyata bekerja di lapangan — bukan hanya bagus di atas kertas.</li>
                  <li>Mengembangkan talenta teknologi lokal yang siap bersaing secara nasional.</li>
                  <li>Menjadikan AI dan analitik sebagai alat keputusan yang terjangkau bagi organisasi Indonesia.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="ac-side reveal-right">
            <div className="ac-photo">
              <img src="assets/team-photo.jpg" alt="Tim Sentra Technology saat bekerja"/>
              <div className="ac-photo-overlay">
                <div className="ac-photo-tag">
                  <span className="ac-photo-dot"/>
                  Tim kami sedang bekerja
                </div>
                <div className="ac-photo-caption">
                  Samarinda · Kalimantan Timur
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
            Kami percaya teknologi terbaik adalah yang
            <strong> tidak terasa</strong> — bekerja diam-diam di belakang, agar
            tim Anda bisa fokus pada keputusan yang penting.
          </div>
          <div className="ac-cred">— Tim Sentra Technology</div>
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
  const values = [
    { ic: "shield",  t: "Aman & terukur",       d: "On-premise, audit-ready." },
    { ic: "user",    t: "Tim lokal",            d: "100% in-house di Indonesia." },
    { ic: "history", t: "Pendampingan",         d: "Bukan one-shot delivery." },
    { ic: "zap",     t: "Pilot 30 hari",        d: "Hasil terukur sebelum scale." },
  ];
  return (
    <div className="ac-values">
      {values.map((v, i) => {
        const Ic = Icon[v.ic];
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

/* Floating visual cluster that fills the head's empty space */
function AboutHeadVisuals() {
  const items = [
    {
      ic: "shield",
      t: "Indonesia-first",
      d: "Riset, build, dan support dikerjakan tim lokal — bukan outsource.",
      color: "var(--gold)",
    },
    {
      ic: "cog",
      t: "End-to-end delivery",
      d: "Dari workshop awal, instalasi lapangan, hingga pendampingan operasi.",
      color: "var(--accent)",
    },
    {
      ic: "zap",
      t: "Pilot 30 hari",
      d: "Hasil terukur lebih dulu — sebelum komitmen scale-up.",
      color: "var(--teal)",
    },
  ];
  return (
    <div className="ac-head-strip">
      {items.map((it, i) => {
        const Ic = Icon[it.ic];
        return (
          <div className="ac-strip-card" key={i}
               style={{ ["--sc"]: it.color, animationDelay: `${i * 0.18}s` }}>
            <div className="ac-strip-ic">
              <Ic/>
              <div className="ac-strip-pulse"/>
            </div>
            <div className="ac-strip-text">
              <div className="t">{it.t}</div>
              <div className="d">{it.d}</div>
            </div>
            <div className="ac-strip-arrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </div>
            {i < items.length - 1 && (
              <svg className="ac-strip-link" viewBox="0 0 80 20" preserveAspectRatio="none">
                <path d="M0 10 L80 10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 4"/>
                <circle r="3" fill="currentColor">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M0 10 L80 10"/>
                </circle>
              </svg>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* Full-width stat band that fills horizontal whitespace */
function AboutStats() {
  const stats = [
    { v: 6,    suffix: "+",  k: "Tahun pengalaman",  d: "Sejak 2019 hingga sekarang"           },
    { v: 50,   suffix: "+",  k: "Proyek terdeliver", d: "Pemerintahan, industri, korporasi"     },
    { v: 13,   suffix: "",   k: "Tim ahli in-house", d: "Engineer, PM, spesialis lapangan"      },
    { v: 10,   suffix: "",   k: "Lini produk",       d: "Hardware, software, AI, integrasi"     },
    { v: 5,    suffix: "",   k: "Mitra teknologi",   d: "TP-Link, VIGI, Teltonika, Lenovo, ITK" },
  ];
  const ref = React.useRef(null);
  const [start, setStart] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { setStart(true); obs.disconnect(); } });
    }, { threshold: 0.3 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div className="ac-stats reveal" ref={ref}>
      {stats.map((s, i) => (
        <div className="ac-stat" key={i}>
          <div className="v">
            <CountUp end={s.v} start={start} duration={1800 + i * 100}/>
            <span className="suf">{s.suffix}</span>
          </div>
          <div className="k">{s.k}</div>
          <div className="d">{s.d}</div>
        </div>
      ))}
    </div>
  );
}

function CountUp({ end, start, duration = 1800 }) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(end * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, start, duration]);
  return <span>{val}</span>;
}

/* Timeline with hover-reveal photo thumbnails */
function Timeline() {
  const items = [
    { year: "2019", t: "Berdiri di Samarinda",   d: "Studio teknologi mulai dengan proyek IoT lokal — tiga pendiri, satu garasi.", img: "assets/timeline/2019.jpg" },
    { year: "2021", t: "Ekspansi ke software",   d: "Meluncurkan lini HRIS, Attendance, dan portal web. Tim tumbuh ke 7 anggota.",  img: "assets/timeline/2021.jpg" },
    { year: "2023", t: "Masuk era AI",           d: "Meluncurkan CCTV AI dan sentrAI — LLM private on-premise pertama di Kaltim.", img: "assets/timeline/2023.jpg" },
    { year: "2024", t: "50+ proyek terdeliver",  d: "Klien tersebar di pemerintahan, industri, perbankan, dan pendidikan.",         img: "assets/timeline/2024.jpg" },
    { year: "2025", t: "Kemitraan global",       d: "Menjalin kemitraan resmi dengan TP-Link, Teltonika, Lenovo, VIGI, dan ITK.",   img: "assets/timeline/2025.jpg" },
  ];
  const [hover, setHover] = React.useState(null);

  return (
    <div className="ac-timeline reveal">
      <div className="ac-timeline-label">
        <p className="section-label" style={{ justifyContent: "center", color: "var(--gold-2)" }}>Perjalanan kami</p>
        <h3>Enam tahun, satu komitmen.</h3>
        <p className="ac-tl-sub">Arahkan kursor ke setiap milestone untuk melihat dokumentasinya.</p>
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
                <span className="ac-tl-thumb-tag">Dokumentasi</span>
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
  const svcs = [
    { ic: "cam",      t: "CCTV Analytics",    d: "AI di atas CCTV existing — flagship Sentra." },
    { ic: "iot",      t: "IoT & Hardware",    d: "Smartlock, telematics, sensor jaringan." },
    { ic: "ai",       t: "Computer Vision",   d: "Safety detection & face recognition." },
    { ic: "cloud",    t: "Private LLM",       d: "AI internal on-prem, data tetap aman." },
    { ic: "code",     t: "Custom Software",   d: "Web & mobile sesuai workflow tim Anda." },
    { ic: "building", t: "Integrasi Sistem",  d: "Menyatukan ERP, HRIS, CCTV existing." },
    { ic: "data",     t: "Data & Analytics",  d: "Dashboard real-time, ETL otomatis." },
    { ic: "cog",      t: "Konsultasi",        d: "Roadmap teknologi & change management." },
  ];
  return (
    <section id="solusi">
      <div className="wrap">
        <SectionHead
          label="Apa yang kami kerjakan"
          title="Kapabilitas full-stack, satu tim terpadu."
          lede="Dari hardware sampai LLM private — semua di-deliver oleh tim in-house yang sama."
          right={{ num: "11", desc: "Produk\n3 divisi" }}
        />

        <div className="svc-grid">
          {svcs.map((s, i) => {
            const Ic = Icon[s.ic];
            return (
              <div className="svc-tile reveal" key={i} style={{ transitionDelay: `${(i % 4) * 80}ms` }}>
                <div className="ic"><Ic/></div>
                <h4>{s.t}</h4>
                <p>{s.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { About, Services, SectionHead, Timeline, AboutVisual, AboutValues, AboutStats });
