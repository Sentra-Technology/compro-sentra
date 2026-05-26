// Pages 9-13: FMS, SentrAI, Custom Web, Integration Ecosystem, Why Sentra

/* PAGE 9 — FLEET MANAGEMENT SYSTEM */
function PageFMS() {
  return (
    <>
      <PageHeader pageNo={9} title="08 · PRODUCT — FMS"/>
      <div className="circuit"><CircuitOrnament position="tr" opacity={0.3}/></div>

      <div style={{ position:"absolute", left:56, right:56, top:120 }}>
        <SectionChip>Fleet Management System</SectionChip>
        <h2 className="h-display" style={{ fontSize:30, margin:"22px 0 10px", maxWidth:540 }}>
          Take control of your pit.<br/><span style={{ color:"var(--primary)", fontStyle:"italic" }}>Real-time</span> fleet intelligence.
        </h2>
        <p className="body" style={{ maxWidth:580, fontSize:12.5 }}>
          FMS Sentra menyajikan arsitektur data lintas perangkat yang seamless. Pelacakan
          ritase real-time, pengawasan visual kabin anti-manipulasi, hingga analitik konsumsi BBM
          dan Cost-per-Ton — intelijen bisnis untuk keputusan taktis instan.
        </p>

        {/* Dashboard mockup composite */}
        <div style={{ marginTop:24, position:"relative", height:380 }}>
          {/* main map dashboard */}
          <div style={{ position:"absolute", top:0, left:0, width:520, height:300, background:"#fff", borderRadius:10, border:"1px solid var(--line)", overflow:"hidden", boxShadow:"0 12px 32px -8px rgba(15,23,42,.18)" }}>
            <div style={{ padding:"6px 12px", background:"#0F172A", color:"#fff", fontSize:9.5, display:"flex", justifyContent:"space-between", alignItems:"center", fontFamily:"JetBrains Mono" }}>
              <span>⊙ FMS · Maps</span>
              <span>15:12:50 WITA · Rabu, 1 April 2026</span>
              <span style={{ background:"#10B981", padding:"1px 6px", borderRadius:3 }}>● LIVE</span>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"110px 1fr", height:"calc(100% - 22px)" }}>
              <div style={{ background:"#F7F9FC", padding:8, borderRight:"1px solid var(--line)", fontSize:9, color:"var(--ink-2)" }}>
                {["Monitoring","· Maps","· Heatmap","· Live Stream","· Intervention","· Pavement","Dashboard","Configure","Report","Face Recog","Fence","Geofence","User"].map((m,i)=>(
                  <div key={i} style={{ padding:"3px 4px", color:m==="· Maps"?"var(--primary)":"var(--ink-2)", fontWeight:m==="· Maps"?700:400, fontFamily:m.startsWith("·")?"Inter":"Space Grotesk" }}>{m}</div>
                ))}
              </div>
              <div style={{ position:"relative", background:"linear-gradient(135deg,#E8F0E0,#DCEAD3)" }}>
                {/* fake topo */}
                <svg viewBox="0 0 400 280" style={{ width:"100%", height:"100%" }}>
                  <path d="M0 120 Q80 100 140 120 T280 120 T400 130" fill="none" stroke="#A7B5B5" strokeWidth="0.6"/>
                  <path d="M0 160 Q80 145 160 165 T320 160 T400 170" fill="none" stroke="#A7B5B5" strokeWidth="0.6"/>
                  <path d="M0 200 Q120 180 220 195 T400 200" fill="none" stroke="#A7B5B5" strokeWidth="0.6"/>
                  {/* roads */}
                  <path d="M40 240 Q120 200 200 180 T360 80" fill="none" stroke="#fff" strokeWidth="3"/>
                  <path d="M80 60 Q150 100 220 140 T380 240" fill="none" stroke="#fff" strokeWidth="3"/>
                </svg>
                {/* truck pins */}
                {[
                  [100,90,"#10B981"],[170,140,"#F59E0B"],[230,180,"#EF4444"],[290,90,"#10B981"],[140,200,"#10B981"],
                  [340,150,"#10B981"],[80,180,"#F59E0B"],[260,60,"#10B981"]
                ].map(([x,y,c],i)=>(
                  <div key={i} style={{ position:"absolute", left:`${x*100/400}%`, top:`${y*100/280}%`, width:14, height:14, borderRadius:"50%", background:c, border:"2px solid #fff", boxShadow:"0 0 0 3px rgba(16,185,129,.2)" }}/>
                ))}
                {/* counters */}
                <div style={{ position:"absolute", top:6, left:6, right:6, display:"grid", gridTemplateColumns:"repeat(6,1fr)", gap:4 }}>
                  {[["Engine ON","18","#10B981"],["Idle/Engine ON","23","#F59E0B"],["Mvc Color Mst","18","#2C5BB8"],["Mvc Color Kw","23","#94A3B8"],["DTS Off","2","#EF4444"],["Total","50","#0F172A"]].map(([k,v,c],i)=>(
                    <div key={i} style={{ padding:"4px 6px", background:"rgba(255,255,255,.92)", borderRadius:5, fontSize:8 }}>
                      <div style={{ color:"#64748B", fontSize:7.5 }}>{k}</div>
                      <div style={{ fontFamily:"Space Grotesk", fontWeight:700, color:c }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* alerts panel */}
          <div style={{ position:"absolute", right:0, top:50, width:260, background:"#fff", borderRadius:10, border:"1px solid var(--line)", overflow:"hidden", boxShadow:"0 12px 32px -8px rgba(15,23,42,.18)" }}>
            <div style={{ padding:"6px 10px", background:"#0F172A", color:"#fff", fontSize:9.5, fontFamily:"JetBrains Mono", display:"flex", justifyContent:"space-between" }}>
              <span>Live Fleet Alerts</span>
              <span style={{ color:"#F87171" }}>3 ACTIVE</span>
            </div>
            <div style={{ padding:8 }}>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:6, marginBottom:8 }}>
                {[["3","#EF4444"],["5","#F59E0B"],["42","#10B981"],["2.3hrs","#0F172A"]].map(([v,c],i)=>(
                  <div key={i} style={{ padding:6, border:"1px solid var(--line-2)", borderRadius:5, textAlign:"center" }}>
                    <div style={{ fontFamily:"Space Grotesk", fontWeight:700, fontSize:13, color:c }}>{v}</div>
                  </div>
                ))}
              </div>
              {[
                ["KT-441 · HMC ACTIVE","Speed limit exceeded","#EF4444"],
                ["KT-512 · Idling Detected","30+ min idle","#F59E0B"],
                ["KT-220 · Fuel anomaly","-12L /h","#F59E0B"],
              ].map(([t,d,c],i)=>(
                <div key={i} style={{ marginTop:6, padding:8, borderLeft:`3px solid ${c}`, background:"#FAFAFA", fontSize:9 }}>
                  <div style={{ fontWeight:700, color:"var(--navy)" }}>{t}</div>
                  <div style={{ color:"#64748B", marginTop:1 }}>{d}</div>
                </div>
              ))}
            </div>
          </div>

          {/* phone mini */}
          <div style={{ position:"absolute", right:30, bottom:0, width:120, height:240, background:"#0F172A", borderRadius:18, padding:5, transform:"rotate(4deg)", boxShadow:"0 18px 32px -8px rgba(15,23,42,.35)" }}>
            <div style={{ width:"100%", height:"100%", background:"linear-gradient(180deg,#FCE7F3,#FFF)", borderRadius:14, padding:8, fontSize:9 }}>
              <div style={{ fontFamily:"Space Grotesk", fontWeight:700, color:"#9333EA" }}>Rp 150,2 M</div>
              <div style={{ fontSize:7, color:"#64748B" }}>Konsumsi BBM</div>
              <div style={{ marginTop:8, fontSize:8, fontWeight:600 }}>Fuel Consumption by Vehicle</div>
              {[1,2,3,4,5].map(i=>(
                <div key={i} style={{ marginTop:5, height:5, background:"linear-gradient(90deg,#A78BFA,#EC4899)", borderRadius:3, width:`${100-i*12}%` }}/>
              ))}
            </div>
          </div>
        </div>

        {/* Capability tags */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:8, marginTop:16 }}>
          {["Real-time Telemetry","Engine Diagnostics","Fuel Integrity","Tire Management"].map(t=>(
            <div key={t} className="card-soft" style={{ padding:10, fontSize:10.5, fontFamily:"Space Grotesk", fontWeight:600, color:"var(--navy)" }}>{t}</div>
          ))}
        </div>
      </div>
      <PageFoot pageNo={9} total={17}/>
    </>
  );
}

/* PAGE 10 — SENTRAI */
function PageSentrAI() {
  return (
    <>
      <PageHeader pageNo={10} title="09 · PRODUCT — SENTRAI"/>
      <div className="circuit"><CircuitOrnament position="bl" opacity={0.3}/></div>

      <div style={{ position:"absolute", left:56, right:56, top:120 }}>
        <SectionChip>Enterprise Private AI · sentrAI</SectionChip>
        <h2 className="h-display" style={{ fontSize:30, margin:"22px 0 10px", maxWidth:540 }}>
          Infrastruktur AI lokal terisolasi untuk ekosistem internal Anda.
        </h2>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:24, marginTop:24, alignItems:"start" }}>
          {/* Left: agent diagram */}
          <div style={{ position:"relative", aspectRatio:"1/1", background:"linear-gradient(180deg,#F7F9FC,#EDF2FA)", borderRadius:14, border:"1px solid var(--line)", padding:18 }}>
            <svg viewBox="0 0 360 360" width="100%" height="100%">
              {/* hex outer */}
              <polygon points="180,40 300,110 300,250 180,320 60,250 60,110" fill="none" stroke="#2C5BB8" strokeWidth="1.4"/>
              {/* inner connections */}
              <line x1="180" y1="40" x2="180" y2="180" stroke="#94A3B8" strokeWidth="0.8"/>
              <line x1="300" y1="110" x2="180" y2="180" stroke="#94A3B8" strokeWidth="0.8"/>
              <line x1="300" y1="250" x2="180" y2="180" stroke="#94A3B8" strokeWidth="0.8"/>
              <line x1="180" y1="320" x2="180" y2="180" stroke="#94A3B8" strokeWidth="0.8"/>
              <line x1="60" y1="250" x2="180" y2="180" stroke="#94A3B8" strokeWidth="0.8"/>
              <line x1="60" y1="110" x2="180" y2="180" stroke="#94A3B8" strokeWidth="0.8"/>
              {/* agent nodes */}
              {[[180,40],[300,110],[300,250],[180,320],[60,250],[60,110]].map(([x,y],i)=>(
                <g key={i}>
                  <circle cx={x} cy={y} r="22" fill="#fff" stroke="#2C5BB8" strokeWidth="1.4"/>
                  <text x={x} y={y+4} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#0F172A">A{i+1}</text>
                </g>
              ))}
              {/* center brain */}
              <circle cx="180" cy="180" r="44" fill="#0A1B3D"/>
              <g transform="translate(180,180)">
                <path d="M-14 -10 Q-14 -18 -7 -18 Q0 -22 7 -18 Q14 -18 14 -10 Q20 -4 14 4 Q14 14 4 14 Q0 20 -4 14 Q-14 14 -14 4 Q-20 -4 -14 -10Z" fill="none" stroke="#3B82F6" strokeWidth="1.4"/>
                <circle cx="0" cy="-2" r="2" fill="#3B82F6"/>
              </g>
            </svg>
            <div style={{ position:"absolute", bottom:14, left:14, right:14, padding:"10px 12px", background:"#fff", borderRadius:8, fontSize:9, fontFamily:"JetBrains Mono", color:"#64748B", letterSpacing:".08em", border:"1px solid var(--line-2)" }}>
              MULTI-AGENT · ON-PREMISE · AIR-GAPPED
            </div>
            <div style={{ position:"absolute", top:14, right:14 }}>
              <div className="h-display" style={{ fontSize:24, color:"var(--ink)", letterSpacing:"-.02em" }}>sentr<span style={{ color:"var(--primary)" }}>AI</span></div>
            </div>
          </div>

          {/* Right: copy */}
          <div>
            <p className="body" style={{ fontSize:13, lineHeight:1.65 }}>
              <strong style={{ color:"var(--navy)" }}>SentrAI</strong> adalah sistem AI multi-agen yang
              di-deploy secara offline untuk memproses data internal perusahaan Anda secara aman dan terisolasi.
              Dengan kapabilitas Large Language Model (LLM) tingkat global yang berjalan di infrastruktur
              On-Premise, sentrAI mengeksekusi instruksi analitik kompleks tanpa risiko kebocoran data ke cloud publik.
            </p>

            <div style={{ marginTop:18, display:"grid", gap:10 }}>
              {[
                ["Arsitektur Multi-Agen","Beberapa agen AI khusus saling berkoordinasi untuk menyelesaikan instruksi pekerjaan kompleks."],
                ["Integrasi Data Lokal","Membaca dan memproses struktur data yang sudah ada di komputer/server klien secara langsung."],
                ["Keamanan Air-Gapped","Tidak membutuhkan koneksi internet publik untuk inferencing — eliminasi total risiko kebocoran data."],
              ].map(([t,d],i)=>(
                <div key={i} style={{ display:"flex", gap:12, alignItems:"flex-start" }}>
                  <div style={{ width:24, height:24, borderRadius:"50%", background:"var(--primary)", color:"#fff", display:"grid", placeItems:"center", flexShrink:0, fontFamily:"JetBrains Mono", fontSize:10, fontWeight:700 }}>{i+1}</div>
                  <div>
                    <div style={{ fontFamily:"Space Grotesk", fontWeight:700, fontSize:13, color:"var(--navy)" }}>{t}</div>
                    <div className="body" style={{ fontSize:11.5, marginTop:2 }}>{d}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop:16, display:"flex", gap:6, flexWrap:"wrap" }}>
              {["GGUF","Llama-3","Mistral","Qwen","On-Premise","RAG","Tool-use"].map(t=>(
                <span key={t} style={{ padding:"4px 9px", border:"1px solid var(--line)", borderRadius:5, fontFamily:"JetBrains Mono", fontSize:9.5, color:"var(--ink-2)" }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <PageFoot pageNo={10} total={17}/>
    </>
  );
}

/* PAGE 11 — CUSTOM WEBSITE */
function PageWebsite() {
  const types = [
    "Company Profile / Landing Page","Dashboard & Sistem Analitik","E-Commerce / Online Store",
    "Portal Instansi / Pemerintahan","Website Media / Portal Berita","Website Sekolah & Kampus",
    "ERP (Enterprise Resource Planning)","Custom request lainnya."
  ];
  // 8 thumbnail panels — schematic mock of varied site types
  const thumbs = [
    { c:"#5BA84A", k:"PORTAL", t:"Portal One Map" },
    { c:"#2C5BB8", k:"DASHBOARD", t:"Analytics Console" },
    { c:"#EF4444", k:"NEWS", t:"Media Portal" },
    { c:"#0A1B3D", k:"DASHBOARD", t:"Operational Insight" },
    { c:"#10B981", k:"CAMPUS", t:"University Site" },
    { c:"#F59E0B", k:"ECOMMERCE", t:"Online Store" },
    { c:"#8B5CF6", k:"LANDING", t:"Product Launch" },
    { c:"#0EA5E9", k:"ERP", t:"Resource Planning" },
  ];
  return (
    <>
      <PageHeader pageNo={11} title="10 · SERVICE — CUSTOM WEBSITE"/>
      <div className="circuit"><CircuitOrnament position="tr" opacity={0.3}/></div>

      <div style={{ position:"absolute", left:56, right:56, top:120 }}>
        <SectionChip>Custom Website</SectionChip>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 0.9fr", gap:24, marginTop:22 }}>
          <div>
            <h2 className="h-display" style={{ fontSize:28, margin:"0 0 10px", maxWidth:340 }}>
              Website yang dibangun di sekitar bisnis Anda.
            </h2>
            <p className="body" style={{ fontSize:12.5, maxWidth:340 }}>
              Sentra Technology menawarkan layanan pembuatan website custom yang sesuai
              dengan kebutuhan dan karakteristik bisnis atau institusi Anda. Jenis website
              yang dapat kami kembangkan meliputi:
            </p>
          </div>
          <div style={{ paddingLeft:18, borderLeft:"3px solid var(--primary)" }}>
            {types.map((t,i)=>(
              <div key={i} style={{ display:"flex", gap:8, alignItems:"flex-start", marginBottom:7, fontSize:12 }}>
                <span style={{ fontFamily:"JetBrains Mono", fontSize:9.5, color:"var(--primary)", width:18, marginTop:2 }}>{String(i+1).padStart(2,"0")}</span>
                <span style={{ color:"var(--navy)", fontFamily:"Space Grotesk", fontWeight:500 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Thumbnail grid */}
        <div style={{ marginTop:22 }}>
          <div className="kicker" style={{ color:"var(--primary)", marginBottom:10 }}>Recent web work · selected</div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:10 }}>
            {thumbs.map((t,i)=>(
              <div key={i} style={{ borderRadius:10, overflow:"hidden", border:"1px solid var(--line)", aspectRatio:"4/3", background:"#fff", display:"flex", flexDirection:"column" }}>
                <div style={{ padding:"4px 8px", background:"#F7F9FC", borderBottom:"1px solid var(--line-2)", display:"flex", alignItems:"center", gap:4, fontSize:8, color:"#94A3B8" }}>
                  <span style={{ width:6, height:6, borderRadius:"50%", background:"#EF4444" }}/>
                  <span style={{ width:6, height:6, borderRadius:"50%", background:"#F59E0B" }}/>
                  <span style={{ width:6, height:6, borderRadius:"50%", background:"#10B981" }}/>
                  <span style={{ marginLeft:6 }}>{t.t.toLowerCase().replace(/\s+/g,"")}.id</span>
                </div>
                <div style={{ flex:1, position:"relative", background:`linear-gradient(135deg, ${t.c}26, ${t.c}06)` }}>
                  {/* mini layout */}
                  <div style={{ position:"absolute", top:8, left:8, right:8, height:6, background:t.c, borderRadius:2 }}/>
                  <div style={{ position:"absolute", top:20, left:8, width:"60%", height:4, background:"#94A3B8", borderRadius:2 }}/>
                  <div style={{ position:"absolute", top:30, left:8, width:"40%", height:3, background:"#CBD5E1", borderRadius:2 }}/>
                  <div style={{ position:"absolute", top:42, left:8, right:8, bottom:8, background:"rgba(255,255,255,.7)", borderRadius:4, display:"grid", gridTemplateColumns:"1fr 1fr", gap:3, padding:4 }}>
                    <div style={{ background:t.c, opacity:.4, borderRadius:2 }}/>
                    <div style={{ background:t.c, opacity:.25, borderRadius:2 }}/>
                    <div style={{ background:t.c, opacity:.55, borderRadius:2 }}/>
                    <div style={{ background:t.c, opacity:.3, borderRadius:2 }}/>
                  </div>
                </div>
                <div style={{ padding:"6px 8px", borderTop:"1px solid var(--line-2)", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <span style={{ fontFamily:"Space Grotesk", fontWeight:600, fontSize:10, color:"var(--navy)" }}>{t.t}</span>
                  <span style={{ fontFamily:"JetBrains Mono", fontSize:8, color:t.c }}>{t.k}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PageFoot pageNo={11} total={17}/>
    </>
  );
}

/* PAGE 12 — INTEGRATION ECOSYSTEM */
function PageIntegration() {
  return (
    <>
      <PageHeader pageNo={12} title="11 · INTEGRATION ECOSYSTEM"/>
      <div className="circuit"><CircuitOrnament position="bl" opacity={0.3}/></div>

      <div style={{ position:"absolute", left:56, right:56, top:120 }}>
        <SectionChip>Ekosistem Sentra</SectionChip>
        <h2 className="h-display" style={{ fontSize:34, margin:"22px 0 10px", maxWidth:540 }}>
          Integration Ecosystem.
        </h2>
        <p className="body" style={{ maxWidth:580, fontSize:12.5 }}>
          Kami mendefinisikan ulang cara Anda mengelola armada melalui satu ekosistem terpusat.
          Menjembatani data operasional mentah di lapangan (FMS) dengan sistem manajemen back-office (ERP).
          Sinergi cerdas yang mentransformasi pergerakan aset menjadi wawasan strategis untuk Business Goals.
        </p>

        {/* Triangle architecture */}
        <div style={{ marginTop:22, position:"relative", height:430 }}>
          <svg viewBox="0 0 600 430" width="100%" height="100%">
            <defs>
              <linearGradient id="tri" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#2C5BB8"/><stop offset="1" stopColor="#0A1B3D"/>
              </linearGradient>
            </defs>
            {/* triangle */}
            <polygon points="300,70 510,360 90,360" fill="url(#tri)" opacity=".95"/>
            <polygon points="300,70 510,360 90,360" fill="none" stroke="#3B82F6" strokeWidth="1"/>
            {/* inner labels */}
            <text x="300" y="170" textAnchor="middle" fontFamily="Space Grotesk" fontSize="22" fontWeight="700" fill="#fff">BG</text>
            <text x="300" y="195" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#7FA3E0" letterSpacing="2">BUSINESS GOALS</text>
            <text x="160" y="335" textAnchor="middle" fontFamily="Space Grotesk" fontSize="22" fontWeight="700" fill="#fff">FMS</text>
            <text x="160" y="354" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="#7FA3E0" letterSpacing="2">FLEET MGMT</text>
            <text x="440" y="335" textAnchor="middle" fontFamily="Space Grotesk" fontSize="22" fontWeight="700" fill="#fff">ERP</text>
            <text x="440" y="354" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="#7FA3E0" letterSpacing="2">RESOURCE PLN</text>
            {/* center hex with logo */}
            <circle cx="300" cy="270" r="44" fill="#fff" stroke="#3B82F6" strokeWidth="1.4"/>
            <g transform="translate(300,270)">
              {[[-12,-8],[0,-12],[12,-8],[-15,4],[0,0],[15,4],[-8,12],[8,12]].map(([x,y],i)=>(
                <circle key={i} cx={x} cy={y} r="2.2" fill={i===4||i===7?"#0F172A":"#2C5BB8"}/>
              ))}
            </g>
          </svg>

          {/* Left labels */}
          <div style={{ position:"absolute", top:30, left:0, width:160, display:"grid", gap:6 }}>
            {[
              ["Cost Efficiency","Menekan cost BBM & Maintenance"],
              ["Revenue Maximization","Memaksimalkan pendapatan per ritase"],
              ["Net Profit Growth","Pertumbuhan laba bersih"],
              ["Real-time Telemetry","Tracking, kecepatan, geofencing presisi"],
              ["Engine Diagnostics","CAN-Bus, RPM, oil & engine load"],
              ["Fuel Integrity","Konsumsi vs jarak, alert pencurian"],
            ].map(([t,d],i)=>(
              <div key={i} style={{ background:"#fff", border:"1px solid var(--line-2)", borderRadius:8, padding:"6px 8px", fontSize:9 }}>
                <div style={{ fontFamily:"Space Grotesk", fontWeight:700, fontSize:10, color:"var(--navy)" }}>{t}</div>
                <div style={{ color:"var(--muted)", fontSize:9 }}>{d}</div>
              </div>
            ))}
          </div>

          {/* Right labels */}
          <div style={{ position:"absolute", top:30, right:0, width:160, display:"grid", gap:6 }}>
            {[
              ["Asset Lifecycle Ext.","Memperpanjang umur mesin & ban"],
              ["Zero Unplanned Downtime","Hilangkan kerugian kerusakan dadakan"],
              ["Predictive Maintenance","Order spare part otomatis"],
              ["Asset Lifecycle","Depresiasi & nilai jual presisi"],
              ["Automated Payroll","Perhitungan gaji karyawan otomatis"],
              ["Supply Chain","Sinkron stok gudang & servis lapangan"],
            ].map(([t,d],i)=>(
              <div key={i} style={{ background:"#fff", border:"1px solid var(--line-2)", borderRadius:8, padding:"6px 8px", fontSize:9 }}>
                <div style={{ fontFamily:"Space Grotesk", fontWeight:700, fontSize:10, color:"var(--navy)" }}>{t}</div>
                <div style={{ color:"var(--muted)", fontSize:9 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PageFoot pageNo={12} total={17}/>
    </>
  );
}

/* PAGE 13 — WHY SENTRA / PARTNERSHIPS */
function PageWhy() {
  return (
    <>
      <PageHeader pageNo={13} title="12 · WHY SENTRA"/>
      <div className="circuit"><CircuitOrnament position="tr" opacity={0.3}/></div>

      <div style={{ position:"absolute", left:56, right:56, top:120 }}>
        <SectionChip>Strategic Partnership</SectionChip>
        <h2 className="h-display" style={{ fontSize:42, margin:"22px 0 14px", maxWidth:560 }}>
          Kenapa memilih<br/>Sentra?
        </h2>
        <p className="body" style={{ maxWidth:580, fontSize:12.5 }}>
          PT. Sentra Visi Teknologi menghadirkan perpaduan sempurna antara perangkat keras
          berkualitas premium dan efisiensi investasi. Melalui kemitraan strategis resmi,
          kami menggunakan infrastruktur telematika berstandar Eropa dari <b>Teltonika</b> dan
          sistem AI Surveillance dari <b>TP-Link VIGI</b> — menetapkan benchmark baru klasifikasi
          heavy-duty yang tidak bisa disamai sistem FMS standar. Status partner resmi memungkinkan
          kami memotong rantai distribusi → hardware kelas dunia dengan harga jauh lebih kompetitif.
        </p>

        {/* Three reason cards */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10, marginTop:22 }}>
          {[
            ["Premium Hardware","Standar Eropa & AI surveillance enterprise. Klasifikasi heavy-duty."],
            ["Cost Efficient","Partner resmi → tanpa rantai distribusi panjang. Harga lebih kompetitif."],
            ["Local Support","Tim engineering di Samarinda. Respons cepat, integrasi langsung di lapangan."],
          ].map(([t,d],i)=>(
            <div key={i} className="card" style={{ padding:14 }}>
              <div className="kicker" style={{ color:"var(--primary)" }}>{String(i+1).padStart(2,"0")}</div>
              <div style={{ fontFamily:"Space Grotesk", fontWeight:700, fontSize:14, color:"var(--navy)", marginTop:6 }}>{t}</div>
              <div className="body" style={{ fontSize:11.5, marginTop:4 }}>{d}</div>
            </div>
          ))}
        </div>

        {/* Partner logos */}
        <div style={{ marginTop:22, padding:"22px 22px", background:"linear-gradient(180deg,#F7F9FC,#EDF2FA)", border:"1px solid var(--line-2)", borderRadius:14 }}>
          <div className="kicker" style={{ color:"var(--primary)", textAlign:"center" }}>Official Hardware Partners</div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:24, marginTop:14, alignItems:"center" }}>
            {/* Teltonika styled wordmark */}
            <div style={{ textAlign:"center" }}>
              <div style={{ display:"inline-flex", alignItems:"center", gap:8 }}>
                <svg width="34" height="34" viewBox="0 0 40 40">
                  <path d="M4 28 L14 12 L24 28 L34 12" stroke="#0A1B3D" strokeWidth="3" fill="none"/>
                </svg>
                <div style={{ fontFamily:"Space Grotesk", fontWeight:800, fontSize:24, color:"var(--navy)", letterSpacing:".02em" }}>TELTONIKA</div>
              </div>
              <div className="kicker" style={{ marginTop:6 }}>Telematics · Lithuania</div>
            </div>
            <div style={{ textAlign:"center" }}>
              <div style={{ display:"inline-flex", alignItems:"baseline", gap:8 }}>
                <span style={{ width:30, height:30, borderRadius:"50%", border:"3px solid #10B981", display:"inline-block", position:"relative", verticalAlign:"middle" }}>
                  <span style={{ position:"absolute", inset:6, borderRadius:"50%", background:"#10B981" }}/>
                </span>
                <div style={{ fontFamily:"Space Grotesk", fontWeight:800, fontSize:24, color:"var(--navy)" }}>tp-link</div>
                <div style={{ width:1, height:22, background:"var(--ink-2)" }}/>
                <div style={{ fontFamily:"Space Grotesk", fontWeight:800, fontSize:22, color:"var(--ink)" }}>VIGI</div>
              </div>
              <div className="kicker" style={{ marginTop:6 }}>AI Surveillance · Global</div>
            </div>
          </div>
        </div>
      </div>
      <PageFoot pageNo={13} total={17}/>
    </>
  );
}

Object.assign(window, { PageFMS, PageSentrAI, PageWebsite, PageIntegration, PageWhy });
