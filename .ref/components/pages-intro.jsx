// Pages 1-4: Cover, About, CEO Statement, Services Overview
// Each <Page> is wrapped externally with PageWrap (has data-screen-label, etc.)

/* PAGE 1 — COVER */
function PageCover() {
  return (
    <>
      <div className="circuit"><CircuitOrnament position="tr" opacity={0.6}/></div>
      <div className="circuit"><CircuitOrnament position="bl" opacity={0.35}/></div>

      {/* Top: logo lockup */}
      <div style={{ position:"absolute", top:56, left:56, right:56, display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
        <SentraLogo size={42}/>
        <div style={{ textAlign:"right" }}>
          <div className="kicker" style={{ color:"var(--primary)" }}>Company Profile</div>
          <div className="kicker" style={{ marginTop:4 }}>2026 Edition · v1</div>
        </div>
      </div>

      {/* Hero block — split layout */}
      <div style={{
        position:"absolute", left:56, right:56, top:230,
        display:"grid", gridTemplateColumns:"1fr", gap:0
      }}>
        <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:18 }}>
          <span style={{ width:40, height:1, background:"var(--primary)" }}/>
          <span className="h-eyebrow">PT. SENTRA VISI TEKNOLOGI · SAMARINDA</span>
        </div>
        <h1 className="h-display" style={{ fontSize:78, margin:0 }}>
          Take control<br/>
          of <span style={{ fontStyle:"italic", color:"var(--primary)" }}>your</span><br/>
          operations.
        </h1>
        <p className="body" style={{ marginTop:22, maxWidth:380, fontSize:14 }}>
          AI-driven monitoring, IoT, dan platform digital terintegrasi — dirancang untuk industri,
          institusi, dan enterprise yang ingin mengubah data menjadi keputusan.
        </p>

        {/* Pillars */}
        <div style={{ display:"flex", gap:8, marginTop:26 }}>
          {["AI / Computer Vision","IoT & Smartlock","Software & ERP","Fleet Intelligence"].map(t=>(
            <span key={t} className="pill" style={{ fontSize:9.5 }}><span className="dot"/>{t}</span>
          ))}
        </div>
      </div>

      {/* Bottom band: contact strip */}
      <div style={{ position:"absolute", left:0, right:0, bottom:80, padding:"0 56px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:14, padding:"22px 22px",
          background:"var(--navy)", borderRadius:12, color:"#E6EDF8" }}>
          {[
            ["CALL", "+62 822 5544 3380"],
            ["MAIL", "info@sentratechnology.com"],
            ["WEB",  "sentratechnology.com"],
            ["HQ",   "Graha Indah Blok A-13, Samarinda"],
          ].map(([k,v])=>(
            <div key={k}>
              <div className="kicker" style={{ color:"#7FA3E0" }}>{k}</div>
              <div style={{ fontFamily:"Space Grotesk", fontWeight:600, fontSize:12, marginTop:4 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="dots-corner" style={{ right:32, bottom:32 }}/>
      <PageFoot pageNo={1} total={17} label="COMPANY PROFILE · COVER"/>
    </>
  );
}

/* PAGE 2 — ABOUT */
function PageAbout() {
  return (
    <>
      <PageHeader pageNo={2} title="01 · TENTANG KAMI"/>
      <div className="circuit"><CircuitOrnament position="tr" opacity={0.4}/></div>

      <div style={{ position:"absolute", left:56, right:56, top:120 }}>
        <SectionChip>About</SectionChip>
        <h2 className="h-display" style={{ fontSize:46, margin:"22px 0 0" }}>
          PT. Sentra Visi<br/>Teknologi.
        </h2>
        <p className="body" style={{ fontStyle:"italic", color:"var(--ink-2)", fontSize:15, marginTop:14, maxWidth:520, lineHeight:1.55 }}>
          “Transformasi digital adalah sebuah perjalanan, bukan tujuan. Setiap langkah
          yang kita ambil membawa kita lebih dekat pada potensi penuh dari bisnis kita.”
        </p>

        {/* Quote rule */}
        <div style={{ display:"flex", gap:18, marginTop:34 }}>
          <div style={{ width:3, background:"var(--primary)", borderRadius:2 }}/>
          <p className="body" style={{ margin:0, fontSize:13 }}>
            Sentra Technology adalah pemimpin dalam bidang Kecerdasan Buatan (AI),
            Internet of Things (IoT), dan pengembangan perangkat lunak. Kami menghadirkan
            solusi mutakhir yang mendorong transformasi digital — memberdayakan bisnis dan
            individu untuk bekerja lebih cerdas, beradaptasi lebih cepat, dan berkembang pesat
            di dunia yang terus berubah. Di Sentra, kami berkomitmen untuk membantu Anda
            tetap unggul dengan teknologi yang kuat dan mudah diakses.
          </p>
        </div>

        {/* Stat strip */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:0, marginTop:42,
          border:"1px solid var(--line)", borderRadius:14, overflow:"hidden", background:"#fff" }}>
          {[
            ["50+","Klien & mitra","aktif"],
            ["12","Produk & solusi","tersedia"],
            ["5","Sektor industri","dilayani"],
            ["24/7","Dukungan","operasional"],
          ].map(([n,a,b],i)=>(
            <div key={i} style={{ padding:"22px 18px", borderRight:i<3?"1px solid var(--line)":0 }}>
              <div className="h-display" style={{ fontSize:34, color:"var(--primary)" }}>{n}</div>
              <div style={{ fontFamily:"Space Grotesk", fontWeight:600, fontSize:12, color:"var(--navy)", marginTop:4 }}>{a}</div>
              <div className="kicker" style={{ marginTop:2 }}>{b}</div>
            </div>
          ))}
        </div>

        {/* Mission/Vision */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginTop:22 }}>
          <div className="card" style={{ padding:"18px" }}>
            <div className="kicker" style={{ color:"var(--primary)" }}>Visi</div>
            <h4 style={{ margin:"6px 0 6px", fontFamily:"Space Grotesk", fontSize:15, color:"var(--navy)" }}>Menjadi mitra transformasi digital terpercaya.</h4>
            <p className="body" style={{ margin:0, fontSize:12 }}>Mendorong adopsi teknologi yang inklusif, aman, dan terukur di Indonesia.</p>
          </div>
          <div className="card-dark" style={{ padding:"18px" }}>
            <div className="kicker" style={{ color:"#7FA3E0" }}>Misi</div>
            <h4 style={{ margin:"6px 0 6px", fontFamily:"Space Grotesk", fontSize:15, color:"#fff" }}>Membangun teknologi yang nyata dampaknya.</h4>
            <p className="body" style={{ margin:0, fontSize:12, color:"#B8C7E5" }}>AI, IoT, dan platform digital yang dirancang untuk operasi sehari-hari, bukan demo.</p>
          </div>
        </div>
      </div>

      <PageFoot pageNo={2} total={17}/>
    </>
  );
}

/* PAGE 3 — CEO STATEMENT */
function PageCEO() {
  return (
    <>
      <PageHeader pageNo={3} title="02 · CEO STATEMENT"/>
      <div className="circuit"><CircuitOrnament position="br" opacity={0.4}/></div>

      <div style={{ position:"absolute", left:56, right:56, top:120 }}>
        <SectionChip>Leadership</SectionChip>
        <div style={{ display:"grid", gridTemplateColumns:"1.1fr 1fr", gap:36, marginTop:30, alignItems:"start" }}>
          {/* Quote column */}
          <div>
            <div style={{ fontFamily:"Space Grotesk", fontSize:120, lineHeight:.8, color:"var(--primary)", opacity:.18 }}>“</div>
            <h3 className="h-display" style={{ fontSize:30, marginTop:-20, marginBottom:18, lineHeight:1.15 }}>
              Kami memaksimalkan potensi data dan AI untuk mendorong inovasi Anda.
            </h3>
            <p className="body" style={{ fontSize:13.5, marginTop:0 }}>
              Dengan analitik mendalam dan solusi perangkat lunak &amp; perangkat keras
              terdepan, kami siap membantu bisnis Anda meraih kesuksesan di era digital.
              Setiap proyek kami mulai dengan satu pertanyaan sederhana: bagaimana
              teknologi ini benar-benar menghasilkan nilai untuk Anda hari ini?
            </p>

            <div style={{ marginTop:30, paddingTop:22, borderTop:"1px solid var(--line)" }}>
              <div className="h-display" style={{ fontSize:20 }}>M. Nabil Akbar Pratama</div>
              <div className="kicker" style={{ marginTop:4, color:"var(--primary)" }}>Direktur · PT. Sentra Visi Teknologi</div>

              <div style={{ display:"flex", gap:18, marginTop:14, fontSize:11, color:"var(--muted)" }}>
                <span>Samarinda, Kalimantan Timur</span><span>·</span><span>Est. 2023</span>
              </div>
            </div>
          </div>

          {/* Portrait column */}
          <div>
            <div style={{ position:"relative", borderRadius:14, overflow:"hidden", aspectRatio:"3/4",
              background:"linear-gradient(180deg, #E8EFFC 0%, #C9D8F1 100%)", border:"1px solid var(--line)" }}>
              {/* Stylized silhouette placeholder */}
              <svg viewBox="0 0 300 400" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="suit" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="#1E3A6E"/><stop offset="1" stopColor="#0A1B3D"/>
                  </linearGradient>
                </defs>
                {/* head */}
                <ellipse cx="150" cy="130" rx="56" ry="68" fill="#D6BFA9"/>
                {/* hair */}
                <path d="M94 110 Q150 50 206 110 Q200 80 150 70 Q100 80 94 110Z" fill="#1A1A1A"/>
                {/* neck */}
                <rect x="130" y="180" width="40" height="30" fill="#C5A98D"/>
                {/* suit */}
                <path d="M40 400 Q40 240 130 220 L150 260 L170 220 Q260 240 260 400Z" fill="url(#suit)"/>
                {/* shirt */}
                <path d="M130 220 L150 260 L170 220 L160 400 L140 400Z" fill="#fff"/>
                {/* tie */}
                <path d="M148 234 L152 234 L156 400 L144 400Z" fill="#1F3A78"/>
                {/* placeholder caption */}
              </svg>
              <div style={{ position:"absolute", bottom:10, left:10, right:10, padding:"6px 10px",
                background:"rgba(10,27,61,.85)", color:"#E6EDF8", borderRadius:8, fontSize:10,
                fontFamily:"JetBrains Mono", letterSpacing:".1em" }}>
                CEO PORTRAIT · DROP REPLACEMENT HERE
              </div>
            </div>

            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginTop:14 }}>
              <div className="card-soft" style={{ padding:14 }}>
                <div className="kicker">Background</div>
                <div style={{ fontFamily:"Space Grotesk", fontWeight:600, fontSize:13, marginTop:4 }}>AI &amp; Software Engineering</div>
              </div>
              <div className="card-soft" style={{ padding:14 }}>
                <div className="kicker">Focus</div>
                <div style={{ fontFamily:"Space Grotesk", fontWeight:600, fontSize:13, marginTop:4 }}>Industrial digital transformation</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PageFoot pageNo={3} total={17}/>
    </>
  );
}

/* PAGE 4 — SERVICES OVERVIEW */
function PageServices() {
  const items = [
    { ic:"ai",     t:"AI Development",   d:"Solusi cerdas berbasis Computer Vision, NLP, dan agen AI untuk otomasi proses dan pengambilan keputusan." },
    { ic:"iot",    t:"Internet of Things", d:"Menghubungkan perangkat fisik untuk pemantauan jarak jauh, kontrol, dan analitik real-time." },
    { ic:"code",   t:"Software Development", d:"Platform Web, Desktop, dan Mobile yang disesuaikan dengan kebutuhan operasional Anda." },
    { ic:"shield", t:"IT Consultation",  d:"Audit infrastruktur, rekomendasi perbaikan, dan migrasi ke solusi cloud (AWS, GCP)." },
    { ic:"cog",    t:"Pengadaan",        d:"Hardware, instalasi, hingga maintenance — satu pintu untuk seluruh kebutuhan IT." },
    { ic:"cam",    t:"Jaringan & CCTV",  d:"Merancang dan memelihara jaringan + sistem CCTV untuk keamanan kantor dan fasilitas." },
    { ic:"data",   t:"Data Extraction",  d:"Mengumpulkan dan mempersiapkan data dari berbagai sumber agar siap digunakan kembali." },
    { ic:"zap",    t:"Custom Integration", d:"Menjembatani sistem legacy dengan platform baru — API, ETL, dan automation flow." },
  ];
  return (
    <>
      <PageHeader pageNo={4} title="03 · LAYANAN KAMI"/>
      <div className="circuit"><CircuitOrnament position="tr" opacity={0.35}/></div>

      <div style={{ position:"absolute", left:56, right:56, top:120 }}>
        <SectionChip>Our Services</SectionChip>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"end", marginTop:22 }}>
          <h2 className="h-display" style={{ fontSize:42, margin:0, maxWidth:400 }}>
            Delapan layanan,<br/>satu ekosistem.
          </h2>
          <p className="body" style={{ maxWidth:260, margin:0, fontSize:12 }}>
            Kami menawarkan layanan untuk membantu bisnis Anda — terutama
            dalam pemanfaatan Teknologi Informasi.
          </p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:10, marginTop:28 }}>
          {items.map((it,i)=>{
            const Ic = Icon[it.ic];
            return (
              <div key={i} className="svc-tile">
                <div className="ic"><Ic/></div>
                <h4>{it.t}</h4>
                <p>{it.d}</p>
                <div style={{ marginTop:"auto", display:"flex", justifyContent:"space-between", alignItems:"center", paddingTop:10, borderTop:"1px solid var(--line-2)" }}>
                  <span className="kicker">0{i+1}</span>
                  <Icon.ne style={{ color:"var(--primary)" }}/>
                </div>
              </div>
            );
          })}
        </div>

        {/* Industries band */}
        <div style={{ marginTop:24, padding:"18px 22px", background:"var(--navy)", borderRadius:14, color:"#E6EDF8" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:14 }}>
            <div>
              <div className="kicker" style={{ color:"#7FA3E0" }}>Sektor yang kami layani</div>
              <div style={{ fontFamily:"Space Grotesk", fontWeight:600, fontSize:14, marginTop:4 }}>Industries served</div>
            </div>
            {["Mining & Fleet","Government","Education","Healthcare","Enterprise"].map(s=>(
              <span key={s} style={{ padding:"6px 12px", border:"1px solid rgba(255,255,255,.18)", borderRadius:999, fontSize:11, fontFamily:"Space Grotesk" }}>{s}</span>
            ))}
          </div>
        </div>
      </div>

      <PageFoot pageNo={4} total={17}/>
    </>
  );
}

Object.assign(window, { PageCover, PageAbout, PageCEO, PageServices });
