// Pages 14-16: NEW Projects portfolio, Browse catalog, Clients & Contact

/* PAGE 14 — OUR PROJECTS (NEW) */
function PageProjects() {
  const projects = [
    {
      year:"2025", client:"PT. Tunas Inti Abadi",
      title:"Fleet Telematics Rollout — 120 Heavy Trucks",
      tags:["FMS","Telematics","CAN-Bus"], color:"#F59E0B",
      kpi:[["BBM hemat","-18%"],["Idle time","-32%"]],
    },
    {
      year:"2024", client:"Universitas Mulawarman",
      title:"Smart Attendance + HRIS Faculty Pilot",
      tags:["Face Reco","HRIS","Mobile"], color:"#2C5BB8",
      kpi:[["Mahasiswa","12,4K"],["Akurasi","98.6%"]],
    },
    {
      year:"2025", client:"Pemprov Kalimantan Timur",
      title:"Portal SIMPy BATARA — One Map Geospatial",
      tags:["Web","GIS","Public"], color:"#10B981",
      kpi:[["Layer peta","43"],["Instansi","12"]],
    },
    {
      year:"2024", client:"RSUD A.W. Sjahranie",
      title:"Sentra Smartlock — 80 Door Access System",
      tags:["IoT","Access","Audit"], color:"#0EA5E9",
      kpi:[["Pintu","80"],["User aktif","430"]],
    },
    {
      year:"2025", client:"PT. Multi Harapan Utama",
      title:"AI Safety Detection — Mining Site Plant-3",
      tags:["AI","Computer Vision"], color:"#EF4444",
      kpi:[["Compliance","94%"],["CCTV","36"]],
    },
    {
      year:"2024", client:"SMK Negeri Samarinda",
      title:"School Management System & E-Learning Portal",
      tags:["Web","SaaS","ERP"], color:"#8B5CF6",
      kpi:[["Siswa","2,8K"],["Modul","9"]],
    },
  ];
  return (
    <>
      <PageHeader pageNo={15} title="14 · OUR PROJECTS"/>
      <div className="circuit"><CircuitOrnament position="bl" opacity={0.3}/></div>
      <div style={{ position:"absolute", left:56, right:56, top:120 }}>
        <SectionChip>Selected Projects · Portfolio</SectionChip>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"end", marginTop:22 }}>
          <h2 className="h-display" style={{ fontSize:38, margin:0, maxWidth:380 }}>
            Solusi yang sudah berjalan di lapangan.
          </h2>
          <div style={{ fontFamily:"JetBrains Mono", fontSize:10, color:"var(--muted)", letterSpacing:".1em", textTransform:"uppercase" }}>
            6 of 50+ projects · 2024-2025
          </div>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:10, marginTop:20 }}>
          {projects.map((p,i)=>(
            <div key={i} style={{ border:"1px solid var(--line-2)", borderRadius:12, overflow:"hidden", background:"#fff", display:"flex", flexDirection:"column" }}>
              {/* image strip */}
              <div style={{ position:"relative", height:96, background:`linear-gradient(135deg, ${p.color}26, ${p.color}66)`, overflow:"hidden" }}>
                <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(circle, rgba(255,255,255,.5) 1px, transparent 1px)", backgroundSize:"12px 12px", opacity:.4 }}/>
                <div style={{ position:"absolute", left:14, top:14, fontFamily:"JetBrains Mono", fontSize:9, color:"#fff", background:"rgba(15,23,42,.6)", padding:"3px 7px", borderRadius:3, letterSpacing:".1em" }}>
                  PROJECT · {String(i+1).padStart(2,"0")}
                </div>
                <div style={{ position:"absolute", right:14, top:14, padding:"3px 8px", background:"#fff", color:p.color, fontFamily:"Space Grotesk", fontWeight:700, fontSize:10, borderRadius:3 }}>{p.year}</div>
                {/* faux schematic */}
                <svg style={{ position:"absolute", right:0, bottom:-10, opacity:.4 }} width="200" height="100" viewBox="0 0 200 100">
                  <path d="M0 80 L40 80 L60 40 L100 40 L120 80 L200 80" stroke="#fff" strokeWidth="2" fill="none"/>
                  <circle cx="60" cy="40" r="3" fill="#fff"/><circle cx="100" cy="40" r="3" fill="#fff"/>
                </svg>
              </div>
              <div style={{ padding:14, flex:1, display:"flex", flexDirection:"column", gap:8 }}>
                <div className="kicker" style={{ color:p.color }}>{p.client}</div>
                <div style={{ fontFamily:"Space Grotesk", fontWeight:700, fontSize:13, color:"var(--navy)", lineHeight:1.25 }}>{p.title}</div>
                <div style={{ display:"flex", gap:5, flexWrap:"wrap", marginTop:2 }}>
                  {p.tags.map(t=>(
                    <span key={t} style={{ fontFamily:"JetBrains Mono", fontSize:9, color:"var(--ink-2)", border:"1px solid var(--line)", padding:"2px 6px", borderRadius:3 }}>{t}</span>
                  ))}
                </div>
                <div style={{ display:"flex", gap:14, marginTop:"auto", paddingTop:8, borderTop:"1px dashed var(--line)" }}>
                  {p.kpi.map(([k,v],j)=>(
                    <div key={j}>
                      <div style={{ fontFamily:"Space Grotesk", fontWeight:800, fontSize:16, color:"var(--navy)" }}>{v}</div>
                      <div className="kicker" style={{ fontSize:8 }}>{k}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PageFoot pageNo={15} total={17}/>
    </>
  );
}

/* PAGE 15 — BROWSE CATALOG (NEW) */
function PageBrowse() {
  const cat = [
    { code:"SL-01", name:"Sentra Smartlock", cat:"IoT · Access", t:"Hardware + App", price:"Mulai · Rp 3,5jt /pintu", c:"#0EA5E9" },
    { code:"AI-02", name:"Safety AI Detection", cat:"AI · Vision", t:"Software + GPU", price:"Custom Quotation", c:"#EF4444" },
    { code:"AT-03", name:"Smart Attendance", cat:"AI · Face Reco", t:"Cloud + Mobile", price:"Mulai · Rp 250k /user/yr", c:"#10B981" },
    { code:"HR-04", name:"HRIS Sentra", cat:"Software · SaaS", t:"Web + Mobile", price:"Mulai · Rp 35k /user/mo", c:"#2C5BB8" },
    { code:"WB-05", name:"Custom Website", cat:"Service · Web", t:"Project Based", price:"Mulai · Rp 12jt /site", c:"#8B5CF6" },
    { code:"AI-06", name:"sentrAI · Private LLM", cat:"AI · On-Prem", t:"Server + License", price:"Custom Quotation", c:"#0A1B3D" },
    { code:"FM-07", name:"Fleet Mgmt System", cat:"IoT · Telematics", t:"Hardware + SaaS", price:"Mulai · Rp 480k /unit/mo", c:"#F59E0B" },
    { code:"NW-08", name:"Network & CCTV", cat:"Service · Infra", t:"Project Based", price:"Custom Quotation", c:"#475569" },
    { code:"DT-09", name:"Data Extraction", cat:"Service · Data", t:"Project Based", price:"Custom Quotation", c:"#06B6D4" },
  ];
  return (
    <>
      <PageHeader pageNo={16} title="15 · BROWSE — PRODUCT CATALOG"/>
      <div className="circuit"><CircuitOrnament position="tr" opacity={0.3}/></div>

      <div style={{ position:"absolute", left:56, right:56, top:120 }}>
        <SectionChip>Browse · Product &amp; Service Index</SectionChip>
        <h2 className="h-display" style={{ fontSize:34, margin:"22px 0 6px" }}>
          The Sentra catalog.
        </h2>
        <p className="body" style={{ fontSize:12.5, maxWidth:540 }}>
          Daftar produk dan layanan yang dapat Anda kombinasikan menjadi satu solusi terintegrasi.
          Hubungi tim kami untuk demo, kebutuhan custom, atau quotation lengkap.
        </p>

        {/* Filter bar */}
        <div style={{ marginTop:18, display:"flex", gap:6, alignItems:"center", padding:"8px 10px", border:"1px solid var(--line)", borderRadius:10, background:"#fff" }}>
          <span className="kicker" style={{ color:"var(--primary)" }}>FILTER</span>
          {["All","Hardware","Software","AI","IoT","Service"].map((f,i)=>(
            <span key={f} style={{ padding:"4px 10px", borderRadius:999, fontSize:10, fontFamily:"Space Grotesk", fontWeight:600, background:i===0?"var(--navy)":"transparent", color:i===0?"#fff":"var(--ink-2)", border:i===0?"none":"1px solid var(--line)" }}>{f}</span>
          ))}
          <div style={{ flex:1 }}/>
          <span className="kicker">{cat.length} ITEMS</span>
        </div>

        {/* Catalog grid */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8, marginTop:10 }}>
          {cat.map((p,i)=>(
            <div key={i} style={{ border:"1px solid var(--line-2)", borderRadius:10, padding:12, background:"#fff", display:"flex", flexDirection:"column", gap:6, position:"relative", minHeight:142 }}>
              <div style={{ position:"absolute", top:0, left:0, width:4, height:"100%", background:p.c, borderRadius:"10px 0 0 10px" }}/>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                <span style={{ fontFamily:"JetBrains Mono", fontSize:9, color:p.c, fontWeight:700, letterSpacing:".05em" }}>{p.code}</span>
                <span style={{ fontFamily:"JetBrains Mono", fontSize:8, color:"var(--muted)" }}>{p.cat}</span>
              </div>
              <div style={{ fontFamily:"Space Grotesk", fontWeight:700, fontSize:13, color:"var(--navy)", lineHeight:1.2 }}>{p.name}</div>
              <div style={{ fontSize:10, color:"var(--ink-2)" }}>{p.t}</div>
              <div style={{ marginTop:"auto", paddingTop:6, borderTop:"1px dashed var(--line)", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <span style={{ fontFamily:"Space Grotesk", fontWeight:600, fontSize:9.5, color:"var(--ink-2)" }}>{p.price}</span>
                <Icon.ne style={{ color:p.c }}/>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div style={{ marginTop:14, padding:"14px 18px", background:"var(--navy)", color:"#fff", borderRadius:12, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <div>
            <div className="kicker" style={{ color:"#7FA3E0" }}>Need a bundle?</div>
            <div style={{ fontFamily:"Space Grotesk", fontWeight:700, fontSize:14, marginTop:2 }}>Tim kami merancang paket sesuai kebutuhan operasional Anda.</div>
          </div>
          <span style={{ padding:"8px 14px", border:"1px solid #3B82F6", borderRadius:999, fontFamily:"Space Grotesk", fontWeight:600, fontSize:11 }}>
            Request Quotation →
          </span>
        </div>
      </div>
      <PageFoot pageNo={16} total={17}/>
    </>
  );
}

/* PAGE 16 — CLIENTS + CONTACT (combined) */
function PageContact() {
  const clients = [
    "Pemkot Samarinda","Pemprov Kaltim","Universitas Mulawarman","RSUD A.W. Sjahranie",
    "Tunas Inti Abadi","Multi Harapan Utama","Bukit Baiduri Energi","Kideco Jaya Agung",
    "BPD Kaltimtara","Telkom Witel","BUMN Energi","SMKN Samarinda",
  ];
  return (
    <>
      <PageHeader pageNo={17} title="16 · CONTACT"/>
      <div className="circuit"><CircuitOrnament position="bl" opacity={0.4}/></div>
      <div className="circuit"><CircuitOrnament position="tr" opacity={0.4}/></div>

      <div style={{ position:"absolute", left:56, right:56, top:120 }}>
        <SectionChip>Clients &amp; Get in Touch</SectionChip>

        <div className="kicker" style={{ marginTop:22, color:"var(--primary)" }}>Trusted by</div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:0, marginTop:8, border:"1px solid var(--line-2)", borderRadius:12, overflow:"hidden", background:"#fff" }}>
          {clients.map((c,i)=>(
            <div key={i} style={{
              padding:"16px 12px", textAlign:"center",
              borderRight:(i+1)%4!==0?"1px solid var(--line-2)":0,
              borderBottom:i<8?"1px solid var(--line-2)":0,
              fontFamily:"Space Grotesk", fontWeight:600, fontSize:11.5, color:"var(--navy)"
            }}>{c}</div>
          ))}
        </div>

        {/* Big closing block */}
        <div style={{ marginTop:30, position:"relative", padding:"30px 30px", background:"linear-gradient(135deg,#0A1B3D 0%,#13284F 100%)", borderRadius:14, color:"#fff", overflow:"hidden" }}>
          <HexPattern opacity={0.08} color="#3B82F6"/>
          <div style={{ position:"relative", zIndex:1 }}>
            <div className="kicker" style={{ color:"#7FA3E0" }}>Mari berkolaborasi</div>
            <h2 className="h-display" style={{ fontSize:42, margin:"6px 0 4px", color:"#fff", lineHeight:1.05 }}>
              Thank you.
            </h2>
            <div style={{ fontFamily:"Space Grotesk", fontStyle:"italic", fontSize:14, color:"#B8C7E5" }}>
              Tertarik dengan solusi kami? Hubungi kami sekarang!
            </div>

            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginTop:22 }}>
              {[
                ["phone","CALL","+62 822 5544 3380"],
                ["mail","EMAIL","info@sentratechnology.com"],
                ["globe","WEB","sentratechnology.com"],
                ["pin","HQ","Jl. Padaelo, Komplek Graha Indah Blok A-13,\nSamarinda Utara, Kalimantan Timur"],
              ].map(([ic,k,v],i)=>{
                const Ic = Icon[ic];
                return (
                  <div key={i} style={{ display:"flex", gap:12, alignItems:"flex-start", padding:14, background:"rgba(255,255,255,.05)", border:"1px solid rgba(255,255,255,.1)", borderRadius:10 }}>
                    <div style={{ width:34, height:34, borderRadius:8, background:"#3B82F6", color:"#fff", display:"grid", placeItems:"center", flexShrink:0 }}><Ic/></div>
                    <div>
                      <div className="kicker" style={{ color:"#7FA3E0" }}>{k}</div>
                      <div style={{ fontFamily:"Space Grotesk", fontWeight:600, fontSize:13, marginTop:2, whiteSpace:"pre-line" }}>{v}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* signature */}
        <div style={{ marginTop:18, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <SentraLogo size={32}/>
          <div className="kicker">© 2026 PT. Sentra Visi Teknologi · All Rights Reserved</div>
        </div>
      </div>
      <PageFoot pageNo={17} total={17} label="THANK YOU"/>
    </>
  );
}

Object.assign(window, { PageProjects, PageBrowse, PageContact });
