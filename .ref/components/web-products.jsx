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

/* PORTFOLIO with category filter */
function Portfolio() {
  const projects = [
    { year:"2025", cat:"IoT",      client:"PT. Tunas Inti Abadi",     title:"Fleet Telematics — 120 Heavy Trucks",    tags:["FMS","Telematics"], color:"#F59E0B" },
    { year:"2024", cat:"Software", client:"Universitas Mulawarman",   title:"Smart Attendance + HRIS Pilot",          tags:["Face Reco","HRIS"], color:"#2C5BB8" },
    { year:"2025", cat:"Software", client:"Pemkab Barito Utara",     title:"Portal POMPy BATARA — One Map Geospatial", tags:["Web","GIS"],        color:"#10B981" },
    { year:"2024", cat:"IoT",      client:"RSUD A.W. Sjahranie",      title:"Smartlock — 80 Door Access System",      tags:["IoT","Access"],     color:"#0EA5E9" },
    { year:"2025", cat:"AI",       client:"PT. Multi Harapan Utama",  title:"AI Safety Detection — Plant-3",          tags:["AI","Vision"],      color:"#EF4444" },
    { year:"2024", cat:"Software", client:"SMK Negeri Samarinda",     title:"School Management & E-Learning",         tags:["Web","SaaS"],       color:"#8B5CF6" },
    { year:"2025", cat:"AI",       client:"Bukit Baiduri Energi",     title:"sentrAI Internal Knowledge Base",        tags:["LLM","On-Prem"],    color:"#7C3AED" },
    { year:"2024", cat:"IoT",      client:"Kideco Jaya Agung",        title:"CCTV + Network Infrastructure Rollout",  tags:["Network","CCTV"],   color:"#06B6D4" },
    { year:"2025", cat:"Software", client:"BPD Kaltimtara",           title:"Internal Banking Portal Modernization",  tags:["Web","Banking"],    color:"#475569" },
    { year:"2025", cat:"IoT",      client:"Pemkot Samarinda",         title:"Custom KIOSK — Self-Service Public Services", tags:["KIOSK","Touchscreen","e-KTP"], color:"#EC4899" },
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
          lede="Sembilan dari 50+ proyek lintas industri sepanjang 2024–2025."
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
              <div className="proj-img" style={{
                background: `linear-gradient(135deg, ${p.color}33 0%, ${p.color}99 100%)`,
              }}>
                <span className="idx">{p.cat.toUpperCase()} · {String(i+1).padStart(2,"0")}</span>
                <span className="yr" style={{ color: p.color }}>{p.year}</span>
                <svg style={{ position:"absolute", right:0, bottom:-12, opacity:.5, zIndex:1 }}
                     width="220" height="120" viewBox="0 0 220 120">
                  <path d="M0 90 L50 90 L70 40 L120 40 L140 90 L220 90"
                        stroke="#fff" strokeWidth="2" fill="none"/>
                  <circle cx="70" cy="40" r="4" fill="#fff"/>
                  <circle cx="120" cy="40" r="4" fill="#fff"/>
                </svg>
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

Object.assign(window, { ProductShowcase, Portfolio });
