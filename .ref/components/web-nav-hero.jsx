// Website — Nav + Hero v4

function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["Tentang",     "#tentang"],
    ["Solusi",      "#solusi"],
    ["CCTV AI",     "#cctv"],
    ["Produk",      "#produk"],
    ["Partner",     "#partner"],
    ["Portfolio",   "#portfolio"],
    ["Tim",         "#tim"],
    ["Kontak",      "#contact"],
  ];
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <a href="#top" className="nav-brand">
          <img className="nav-logo" src="assets/sentra-logo.png" alt="Sentra Technology"/>
        </a>
        <div className="nav-links">
          {links.map(([t, h]) => <a key={h} href={h}>{t}</a>)}
        </div>
        <div className="nav-actions">
          <LangSelector/>
          <ThemeToggle/>
        </div>
      </div>
    </nav>
  );
}

/* Theme toggle (inline, lives in nav) */
function ThemeToggle() {
  const [light, setLight] = React.useState(() => {
    try { return localStorage.getItem("sentra-theme") === "light"; }
    catch (e) { return false; }
  });
  React.useEffect(() => {
    document.body.classList.toggle("light", light);
    document.documentElement.classList.toggle("pre-light", light);
    try { localStorage.setItem("sentra-theme", light ? "light" : "dark"); } catch (e) {}
  }, [light]);
  return (
    <button className={`theme-toggle-inline ${light ? "is-light" : ""}`}
            onClick={() => setLight(v => !v)}
            aria-label={light ? "Switch to dark mode" : "Switch to light mode"}>
      {light ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )}
    </button>
  );
}

function LangSelector() {
  const langs = [
    { code: "ID", name: "Bahasa Indonesia", flag: <FlagID/> },
    { code: "EN", name: "English",          flag: <FlagEN/> },
    { code: "ZH", name: "中文",              flag: <FlagZH/> },
    { code: "KO", name: "한국어",            flag: <FlagKO/> },
    { code: "MS", name: "Bahasa Melayu",    flag: <FlagMS/> },
  ];
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState("ID");
  const ref = React.useRef(null);

  React.useEffect(() => {
    try {
      const saved = localStorage.getItem("sentra-lang");
      if (saved) setActive(saved);
    } catch (e) {}
  }, []);
  React.useEffect(() => {
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  const pick = (code) => {
    setActive(code);
    setOpen(false);
    try { localStorage.setItem("sentra-lang", code); } catch (e) {}
  };

  const activeLang = langs.find(l => l.code === active) || langs[0];

  return (
    <div className="lang-wrap" ref={ref}>
      <button className="lang-btn" onClick={() => setOpen(o => !o)} aria-label="Select language">
        <span className="lang-flag">{activeLang.flag}</span>
        <span>{active}</span>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
             style={{ transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform .2s" }}>
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>
      {open && (
        <div className="lang-menu">
          {langs.map(l => (
            <button key={l.code}
                    className={`lang-opt ${active === l.code ? "active" : ""}`}
                    onClick={() => pick(l.code)}>
              <span className="lang-flag">{l.flag}</span>
              <span className="lang-code">{l.code}</span>
              <span className="lang-name">{l.name}</span>
              {active === l.code && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="m4 12 5 5 11-11"/>
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* Minimalist rounded flag SVGs (20×14, simplified to identifying bands/marks) */
function FlagID() {
  return (
    <svg viewBox="0 0 20 14" width="20" height="14" aria-hidden="true">
      <rect width="20" height="14" rx="2" fill="#fff"/>
      <rect width="20" height="7" rx="2" fill="#E70011"/>
      <rect y="5" width="20" height="2" fill="#E70011"/>
    </svg>
  );
}
function FlagEN() {
  // Union Jack — simplified
  return (
    <svg viewBox="0 0 20 14" width="20" height="14" aria-hidden="true">
      <rect width="20" height="14" rx="2" fill="#012169"/>
      <path d="M0 0 L20 14 M20 0 L0 14" stroke="#fff" strokeWidth="2"/>
      <path d="M0 0 L20 14 M20 0 L0 14" stroke="#C8102E" strokeWidth="1" clipPath="url(#half)"/>
      <path d="M10 0 V14 M0 7 H20" stroke="#fff" strokeWidth="3"/>
      <path d="M10 0 V14 M0 7 H20" stroke="#C8102E" strokeWidth="1.5"/>
    </svg>
  );
}
function FlagZH() {
  return (
    <svg viewBox="0 0 20 14" width="20" height="14" aria-hidden="true">
      <rect width="20" height="14" rx="2" fill="#EE1C25"/>
      <g fill="#FFFF00">
        <polygon points="4,2.5 4.6,4.3 6.5,4.3 5,5.5 5.6,7.4 4,6.2 2.4,7.4 3,5.5 1.5,4.3 3.4,4.3"/>
        <circle cx="8" cy="2" r="0.7"/>
        <circle cx="9.5" cy="3.5" r="0.5"/>
        <circle cx="9.5" cy="5.5" r="0.5"/>
        <circle cx="8" cy="7" r="0.7"/>
      </g>
    </svg>
  );
}
function FlagKO() {
  return (
    <svg viewBox="0 0 20 14" width="20" height="14" aria-hidden="true">
      <rect width="20" height="14" rx="2" fill="#fff"/>
      <g transform="translate(10 7)">
        <path d="M -3 0 A 3 3 0 0 1 3 0 A 1.5 1.5 0 0 1 0 0 A 1.5 1.5 0 0 0 -3 0 Z" fill="#CD2E3A"/>
        <path d="M -3 0 A 3 3 0 0 0 3 0 A 1.5 1.5 0 0 0 0 0 A 1.5 1.5 0 0 1 -3 0 Z" fill="#0047A0"/>
      </g>
      {/* Trigrams as small marks */}
      <g fill="#000" opacity=".8">
        <rect x="2"  y="2.4" width="2"  height=".5"/><rect x="2"  y="3.4" width="2"  height=".5"/><rect x="2"  y="4.4" width="2"  height=".5"/>
        <rect x="16" y="9.4" width="2"  height=".5"/><rect x="16" y="10.4" width="2" height=".5"/>
        <rect x="2.3" y="9.4" width=".7" height=".5"/><rect x="3.3" y="9.4" width=".7" height=".5"/>
        <rect x="2"  y="10.4" width="2"  height=".5"/>
        <rect x="16" y="2.4" width="2"  height=".5"/>
        <rect x="16.3" y="3.4" width=".7" height=".5"/><rect x="17.3" y="3.4" width=".7" height=".5"/>
        <rect x="16" y="4.4" width="2"  height=".5"/>
      </g>
    </svg>
  );
}
function FlagMS() {
  return (
    <svg viewBox="0 0 20 14" width="20" height="14" aria-hidden="true">
      <rect width="20" height="14" rx="2" fill="#fff"/>
      {/* 7 red stripes (14 stripes total alternating) */}
      <g fill="#CC0001">
        <rect y="0"  width="20" height="1"/>
        <rect y="2"  width="20" height="1"/>
        <rect y="4"  width="20" height="1"/>
        <rect y="6"  width="20" height="1"/>
        <rect y="8"  width="20" height="1"/>
        <rect y="10" width="20" height="1"/>
        <rect y="12" width="20" height="1"/>
      </g>
      <rect width="9" height="7" fill="#010066"/>
      <path d="M 4.2 3.5 A 2.2 2.2 0 1 0 4.2 6.5 A 1.7 1.7 0 1 1 4.2 3.5" fill="#FFCC00"/>
      <polygon points="6.5,5 7.1,4.3 6.8,5.2 7.6,5.5 6.8,5.5 7.1,6.4 6.5,5.7 5.9,6.4 6.2,5.5 5.4,5.5 6.2,5.2 5.9,4.3" fill="#FFCC00"/>
    </svg>
  );
}

function WordReveal({ text, delay = 0 }) {
  const words = String(text).split(" ");
  return (
    <span className="word-reveal">
      {words.map((w, i) => (
        <span key={i} className="word" style={{ animationDelay: `${delay + i * 60}ms` }}>
          {w}
        </span>
      ))}
    </span>
  );
}

function Hero() {
  const nodes = [
    { cls: "n1", ic: "cam"    },
    { cls: "n2", ic: "shield" },
    { cls: "n3", ic: "user"   },
    { cls: "n4", ic: "truck"  },
    { cls: "n5", ic: "code"   },
    { cls: "n6", ic: "ai"     },
  ];
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <h1 className="h-display">
              <WordReveal text="Mitra Anda untuk" delay={150} />
              <br />
              <span className="accent">
                <WordReveal text="keputusan yang lebih cerdas." delay={400} />
              </span>
            </h1>

            <p className="lede" style={{ opacity: 0, animation: "wordIn .7s .9s forwards" }}>
              Memberdayakan transformasi digital melalui solusi AI, computer vision,
              dan analitik data — dari pengawasan cerdas hingga sistem enterprise —
              dirancang untuk membantu organisasi Anda mengambil keputusan yang
              lebih cepat, presisi, dan berdampak.
            </p>
            <div className="hero-ctas" style={{ opacity: 0, animation: "wordIn .7s 1.1s forwards" }}>
              <a href="#contact" className="btn btn-primary">
                Mulai konsultasi
                <Icon.arrow />
              </a>
            </div>
          </div>

          <div className="hv">
            <span className="hv-label tl">SENTRA · CORE</span>
            <span className="hv-label br">NODE · 06 ACTIVE</span>
            <div className="hv-ring r1" />
            <div className="hv-ring r2" />
            <div className="hv-ring r3" />
            <div className="hv-pulse" />
            <div className="hv-pulse delay" />
            <div className="hv-disc">
              <img src="assets/sentra-mark.png" alt="Sentra mark"/>
            </div>
            {nodes.map(n => {
              const Ic = Icon[n.ic];
              return (
                <div key={n.cls} className={`hv-node ${n.cls}`}>
                  <Ic />
                </div>
              );
            })}
          </div>
        </div>

        <Credentials/>
      </div>
    </section>
  );
}

function Credentials() {
  const items = [
    { value: 50,   suffix: "+ proyek",        label: "Pengalaman",     desc: "Lintas pemerintahan, industri, dan korporasi.", ic: "cert" },
    { value: 13,   suffix: " ahli",           label: "Tim in-house",   desc: "Engineer, PM, dan spesialis lapangan.",          ic: "user" },
    { value: 11,   suffix: " produk",         label: "Lini terintegrasi", desc: "CCTV AI, IoT, software, dan integrasi.",      ic: "cog" },
    { value: 2019, suffix: "",                label: "Berdiri sejak",  desc: "Berbasis di Samarinda, Kalimantan Timur.",       ic: "history" },
  ];
  const ref = React.useRef(null);
  const [start, setStart] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(es => {
      es.forEach(e => { if (e.isIntersecting) { setStart(true); obs.disconnect(); } });
    }, { threshold: 0.3 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div className="credentials reveal" ref={ref}>
      {items.map((it, i) => {
        const Ic = Icon[it.ic];
        return (
          <div className="cred" key={i} style={{ animationDelay: `${i * 120}ms` }}>
            <div className="ic"><Ic/></div>
            <div className="label">{it.label}</div>
            <div className="value">
              <CredCount end={it.value} start={start} duration={1400 + i * 120} suffix={it.suffix}/>
            </div>
            <p className="desc">{it.desc}</p>
            <span className="cred-line"/>
          </div>
        );
      })}
    </div>
  );
}

function CredCount({ end, start, duration = 1400, suffix = "" }) {
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
  return <>{val}<span className="unit">{suffix}</span></>;
}

Object.assign(window, { Nav, Hero, WordReveal, LangSelector, ThemeToggle });
