// Pages 5-8: Product detail pages — Smartlock, Safety Detection, Attendance, HRIS

/* Reusable: phone frame mock */
function PhoneFrame({ children, label, w = 220 }) {
  const h = w * 2.05;
  return (
    <div style={{
      width: w, height: h, background: "#0F172A", borderRadius: 32, padding: 8,
      boxShadow: "0 30px 60px -20px rgba(15,23,42,.4), 0 0 0 1px rgba(15,23,42,.2)",
      position: "relative", flexShrink: 0
    }}>
      <div style={{ position: "absolute", top: 14, left: "50%", transform: "translateX(-50%)",
        width: 90, height: 22, background: "#0F172A", borderRadius: 12, zIndex: 2 }}/>
      <div style={{ width: "100%", height: "100%", background: "#fff", borderRadius: 26, overflow: "hidden",
        position: "relative" }}>
        {children}
      </div>
      {label && <div style={{ position:"absolute", bottom:-18, left:"50%", transform:"translateX(-50%)",
        fontSize:9, fontFamily:"JetBrains Mono", letterSpacing:".1em", color:"var(--muted)" }}>{label}</div>}
    </div>
  );
}

/* PAGE 5 — SMARTLOCK */
function PageSmartlock() {
  const features = [
    { ic:"zap",     t:"Realtime Control",   d:"Buka, kunci, dan pantau pintu dari aplikasi." },
    { ic:"user",    t:"Guest Access",       d:"Akses sementara untuk tamu via PIN atau link." },
    { ic:"bell",    t:"Notifikasi Instan",  d:"Setiap aktivitas pintu langsung terlapor." },
    { ic:"shield",  t:"Manajemen User",     d:"Atur peran, jadwal akses, dan area." },
    { ic:"history", t:"Riwayat Aktivitas",  d:"Audit log lengkap untuk setiap pintu." },
    { ic:"cloud",   t:"Integrasi Cloud",    d:"Sinkron lintas lokasi & perangkat." },
  ];
  return (
    <>
      <PageHeader pageNo={5} title="04 · PRODUCT — SMARTLOCK"/>
      <div className="circuit"><CircuitOrnament position="tr" opacity={0.35}/></div>

      <div style={{ position:"absolute", left:56, right:56, top:120 }}>
        <SectionChip>Ekosistem Sentra Smartlock</SectionChip>
        <div style={{ marginTop:22 }}>
          <h2 className="h-display" style={{ fontSize:30, margin:0, maxWidth:540 }}>
            Solusi akses digital yang aman, fleksibel, dan terintegrasi.
          </h2>
          <p className="body" style={{ marginTop:10, fontSize:12.5, maxWidth:540 }}>
            Platform kontrol akses berbasis aplikasi untuk rumah, kantor, dan bisnis.
            Sentra Smartlock meningkatkan keamanan dan efisiensi akses ke ruangan
            melalui aplikasi atau kartu — kompatibel dengan berbagai jenis pintu.
          </p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:24, marginTop:30, alignItems:"start" }}>
          {/* Features */}
          <div>
            <div className="kicker" style={{ color:"var(--primary)" }}>Fitur Utama</div>
            <div style={{ display:"grid", gap:10, marginTop:12 }}>
              {features.map((f,i)=>{
                const Ic = Icon[f.ic];
                return (
                  <div key={i} style={{ display:"flex", gap:12, alignItems:"flex-start", padding:12, borderRadius:10, border:"1px solid var(--line-2)", background:"#fff" }}>
                    <div style={{ width:34, height:34, borderRadius:8, background:"linear-gradient(135deg,#E8EFFC,#D6E2F8)", color:"var(--primary)", display:"grid", placeItems:"center", flexShrink:0 }}><Ic/></div>
                    <div>
                      <div style={{ fontFamily:"Space Grotesk", fontWeight:700, fontSize:13, color:"var(--navy)" }}>{f.t}</div>
                      <div className="body" style={{ fontSize:11.5, marginTop:2 }}>{f.d}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Phone mockups */}
          <div style={{ position:"relative", height:480, display:"flex", justifyContent:"center", alignItems:"center" }}>
            <div style={{ position:"absolute", inset:0, background:"radial-gradient(circle at 50% 60%, rgba(59,130,246,.18), transparent 60%)" }}/>
            <PhoneFrame w={155}>
              <SmartlockListUI/>
            </PhoneFrame>
            <div style={{ position:"absolute", right:6, top:30 }}>
              <PhoneFrame w={195}>
                <SmartlockDetailUI/>
              </PhoneFrame>
            </div>
          </div>
        </div>
      </div>
      <PageFoot pageNo={5} total={17}/>
    </>
  );
}

function SmartlockListUI() {
  const rooms = [
    { n:"R.Birokrasi", s:"Terbuka", c:"#10B981" },
    { n:"F-302",       s:"Terkunci", c:"#64748B" },
    { n:"F-301",       s:"Terbuka", c:"#10B981" },
    { n:"F-301",       s:"Terbuka", c:"#10B981" },
    { n:"F-302",       s:"Tutup",   c:"#F59E0B" },
  ];
  return (
    <div style={{ padding:"34px 14px 14px", fontSize:11, color:"#0F172A", background:"linear-gradient(180deg,#F0F4FB,#fff)", height:"100%" }}>
      <div style={{ fontSize:9.5, color:"#64748B", fontFamily:"JetBrains Mono", letterSpacing:".1em" }}>9:41</div>
      <div style={{ fontWeight:600, fontSize:11, marginTop:12 }}>Akses Pintu</div>
      <div style={{ marginTop:6, padding:"8px 10px", border:"1px solid #E5EBF4", borderRadius:8, fontSize:10, display:"flex", justifyContent:"space-between" }}>
        <span style={{ fontWeight:600 }}>Gedung Farmasi</span><span>▾</span>
      </div>
      <div style={{ display:"flex", gap:8, marginTop:8, fontSize:9, color:"#64748B" }}>
        <span>Basement</span><span style={{ color:"#2C5BB8", fontWeight:600 }}>Lantai 1</span>
      </div>
      <div style={{ marginTop:8, display:"flex", flexDirection:"column", gap:6 }}>
        {rooms.map((r,i)=>(
          <div key={i} style={{ display:"flex", alignItems:"center", gap:8, padding:"6px 8px", border:"1px solid #EFF3FA", borderRadius:8, background:"#fff" }}>
            <div style={{ width:22, height:22, borderRadius:5, background:"#0F172A" }}/>
            <div style={{ flex:1 }}>
              <div style={{ fontWeight:600, fontSize:10 }}>{r.n}</div>
              <div style={{ fontSize:8.5, color:r.c }}>● {r.s}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SmartlockDetailUI() {
  return (
    <div style={{ padding:"34px 12px 12px", fontSize:11, color:"#0F172A", background:"linear-gradient(180deg,#EAF1FB,#fff)", height:"100%" }}>
      <div style={{ display:"flex", justifyContent:"space-between", fontSize:9, color:"#64748B" }}>
        <span>9:41</span><span>Detail Pintu</span><span>⋮</span>
      </div>
      {/* Lock card */}
      <div style={{ marginTop:14, padding:14, background:"#fff", borderRadius:12, border:"1px solid #E5EBF4", textAlign:"center" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", fontSize:9 }}>
          <span style={{ background:"#10B981", color:"#fff", padding:"2px 8px", borderRadius:999 }}>● 95%</span>
          <span style={{ color:"#64748B" }}>≡</span>
        </div>
        <div style={{ width:64, height:64, borderRadius:"50%", background:"linear-gradient(135deg,#E8EFFC,#C9D8F1)", margin:"14px auto", display:"grid", placeItems:"center", color:"#2C5BB8", fontSize:22 }}>🔒</div>
        <div style={{ fontSize:9, color:"#2C5BB8", fontWeight:600 }}>Press to unlock</div>
        <div style={{ fontWeight:700, fontSize:13, marginTop:10 }}>Ruang F-302</div>
        <div style={{ fontSize:9, color:"#64748B" }}>Gedung Rektorat, Lantai 2</div>
      </div>
      <div style={{ marginTop:10, padding:"8px 10px", border:"1px solid #E5EBF4", borderRadius:10, background:"#fff", fontSize:9, display:"flex", justifyContent:"space-between" }}>
        <span>📅 Jadwal Setiap Hari</span><span style={{ color:"#2C5BB8" }}>09.00 — 12.00am</span>
      </div>
      <div style={{ marginTop:10, fontSize:10, fontWeight:600 }}>Riwayat Akses anda</div>
      {[
        ["Selasa, 17 Maret 2025","Unlock with passcode","09.34"],
        ["Senin, 16 Maret 2025","Unlock with app","09.34"],
        ["Jumat, 14 Maret 2025","Unlock with app","09.34"],
      ].map((row,i)=>(
        <div key={i} style={{ marginTop:6, padding:"6px 8px", background:"#F0F4FB", borderRadius:8, fontSize:8.5 }}>
          <div style={{ color:"#64748B" }}>{row[0]}</div>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:2 }}>
            <span style={{ color:"#10B981" }}>● {row[1]}</span><span>{row[2]}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* PAGE 6 — SAFETY DETECTION */
function PageSafety() {
  return (
    <>
      <PageHeader pageNo={6} title="05 · PRODUCT — SAFETY AI"/>
      <div className="circuit"><CircuitOrnament position="bl" opacity={0.3}/></div>

      <div style={{ position:"absolute", left:56, right:56, top:120 }}>
        <SectionChip>Deteksi Atribut Keselamatan</SectionChip>
        <h2 className="h-display" style={{ fontSize:32, margin:"22px 0 10px", maxWidth:560 }}>
          Pengawasan kepatuhan APD,<br/>otomatis dan real-time.
        </h2>
        <p className="body" style={{ maxWidth:560, fontSize:12.5 }}>
          Solusi modern berbasis Kecerdasan Buatan (AI) yang terintegrasi dengan CCTV
          dan dashboard web. Memanfaatkan Pengenalan Wajah dan deteksi atribut,
          pemantauan berjalan otomatis tanpa input manual — lengkap dengan analisis
          keselamatan langsung ke aplikasi.
        </p>

        {/* Detection mockup */}
        <div style={{ marginTop:26, position:"relative", borderRadius:14, overflow:"hidden", border:"1px solid var(--line)", background:"#fff", padding:18 }}>
          <div style={{ display:"grid", gridTemplateColumns:"1.4fr 1fr", gap:18, alignItems:"center" }}>
            <div style={{ position:"relative", aspectRatio:"4/5", borderRadius:10, overflow:"hidden",
              background:"linear-gradient(180deg,#3a4a5e 0%, #5b6b80 60%, #6f7d92 100%)" }}>
              {/* worker silhouette */}
              <svg viewBox="0 0 200 250" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={{ position:"absolute", inset:0 }}>
                {/* hard hat */}
                <ellipse cx="100" cy="42" rx="34" ry="22" fill="#fff"/>
                <rect x="64" y="42" width="72" height="6" fill="#fff"/>
                {/* head */}
                <ellipse cx="100" cy="62" rx="20" ry="22" fill="#C5A98D"/>
                {/* mask */}
                <rect x="82" y="62" width="36" height="14" rx="6" fill="#E5EBF4"/>
                {/* body / vest */}
                <path d="M55 250 Q55 130 100 110 Q145 130 145 250Z" fill="#5BA84A"/>
                {/* harness */}
                <path d="M85 110 L85 250 M115 110 L115 250" stroke="#1F2937" strokeWidth="6"/>
                <path d="M85 130 L115 130 M85 160 L115 160" stroke="#1F2937" strokeWidth="6"/>
                {/* pants */}
                <rect x="78" y="180" width="44" height="70" fill="#1F2937"/>
                {/* shoes */}
                <ellipse cx="88" cy="248" rx="12" ry="6" fill="#3B3B3B"/>
                <ellipse cx="112" cy="248" rx="12" ry="6" fill="#3B3B3B"/>
              </svg>

              {/* Detection boxes */}
              <div style={{ position:"absolute", top:24, left:50, width:100, height:50, border:"2px solid #EF4444", borderRadius:2 }}/>
              <div style={{ position:"absolute", top:90, left:60, width:80, height:60, border:"2px solid #EAB308", borderRadius:2 }}/>
              <div style={{ position:"absolute", bottom:14, left:65, width:70, height:18, border:"2px solid #EF4444", borderRadius:2 }}/>
              <div style={{ position:"absolute", inset:0, border:"2px dashed rgba(255,255,255,.4)" }}/>

              {/* HUD */}
              <div style={{ position:"absolute", top:8, left:8, fontFamily:"JetBrains Mono", fontSize:9, color:"#fff", background:"rgba(0,0,0,.6)", padding:"3px 7px", borderRadius:4 }}>
                ● LIVE · CAM-04
              </div>
              <div style={{ position:"absolute", bottom:8, right:8, fontFamily:"JetBrains Mono", fontSize:9, color:"#fff", background:"rgba(0,0,0,.6)", padding:"3px 7px", borderRadius:4 }}>
                conf 0.94
              </div>
            </div>

            {/* Detection labels */}
            <div style={{ display:"grid", gap:10 }}>
              {[
                ["Safety_Helmet","DETECTED","#10B981"],
                ["Safety_Vest","DETECTED","#10B981"],
                ["Safety_Belt","DETECTED","#10B981"],
                ["Person","CONFIRMED","#2C5BB8"],
                ["Safety_Shoes","DETECTED","#10B981"],
                ["Face_Mask","OPTIONAL","#94A3B8"],
              ].map(([n,s,c],i)=>(
                <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"10px 12px", border:"1px solid var(--line-2)", borderRadius:10, background:"#fff" }}>
                  <div>
                    <div style={{ fontFamily:"JetBrains Mono", fontSize:10.5, color:"var(--ink)" }}>{n}</div>
                    <div className="kicker" style={{ marginTop:2, fontSize:9 }}>label · {String(i+1).padStart(2,"0")}</div>
                  </div>
                  <span style={{ fontFamily:"JetBrains Mono", fontSize:9.5, color:c, padding:"4px 8px", borderRadius:999, background:c+"22" }}>● {s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom stats */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:0, marginTop:14, padding:14, background:"var(--paper)", borderRadius:10 }}>
            {[
              ["Compliance","92.4%"],["Workers (today)","148"],["Violations","6"],["Avg latency","320ms"]
            ].map(([k,v],i)=>(
              <div key={i} style={{ borderRight:i<3?"1px solid var(--line)":0, paddingLeft:i?14:0 }}>
                <div className="kicker">{k}</div>
                <div className="h-display" style={{ fontSize:18, marginTop:3 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PageFoot pageNo={6} total={17}/>
    </>
  );
}

/* PAGE 7 — SMART ATTENDANCE */
function PageAttendance() {
  return (
    <>
      <PageHeader pageNo={7} title="06 · PRODUCT — ATTENDANCE"/>
      <div className="circuit"><CircuitOrnament position="tr" opacity={0.3}/></div>

      <div style={{ position:"absolute", left:56, right:56, top:120 }}>
        <SectionChip>Smart Attendance System</SectionChip>
        <h2 className="h-display" style={{ fontSize:30, margin:"22px 0 10px", maxWidth:540 }}>
          Absensi modern berbasis AI &amp; pengenalan wajah.
        </h2>
        <p className="body" style={{ maxWidth:560, fontSize:12.5 }}>
          Terintegrasi dengan CCTV, sistem web, dan aplikasi mobile interaktif.
          Proses absensi berjalan otomatis tanpa input manual, dengan data terhubung
          real-time ke dashboard untuk memudahkan pemantauan dan analisis.
        </p>

        <div style={{ display:"grid", gridTemplateColumns:"0.9fr 1.3fr", gap:22, marginTop:26, alignItems:"start" }}>
          <PhoneFrame w={195}>
            <AttendancePhoneUI/>
          </PhoneFrame>

          <div style={{ display:"grid", gap:14 }}>
            {/* Face recognition feed */}
            <div style={{ position:"relative", borderRadius:12, overflow:"hidden", aspectRatio:"16/9", background:"linear-gradient(180deg,#1F2937,#374151)" }}>
              {/* tile floor */}
              <svg viewBox="0 0 320 180" width="100%" height="100%" preserveAspectRatio="none" style={{ position:"absolute", inset:0 }}>
                <defs>
                  <pattern id="floor" width="30" height="30" patternUnits="userSpaceOnUse">
                    <rect width="30" height="30" fill="#475569"/><path d="M0 0H30M0 0V30" stroke="#64748B" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect y="80" width="320" height="100" fill="url(#floor)"/>
                {/* head */}
                <circle cx="160" cy="80" r="28" fill="#D6BFA9"/>
                <ellipse cx="160" cy="60" rx="28" ry="14" fill="#1A1A1A"/>
                {/* shoulders */}
                <path d="M120 180 Q120 130 160 120 Q200 130 200 180Z" fill="#1F3A78"/>
              </svg>
              {/* Face box */}
              <div style={{ position:"absolute", top:20, left:130, width:62, height:74, border:"2px solid #10B981" }}/>
              <div style={{ position:"absolute", top:6, left:130, fontFamily:"JetBrains Mono", fontSize:9, color:"#10B981", background:"rgba(0,0,0,.6)", padding:"2px 6px" }}>
                ID:11211075 · conf=0.84
              </div>
              <div style={{ position:"absolute", bottom:8, left:130, fontFamily:"JetBrains Mono", fontSize:8, color:"#10B981", background:"rgba(0,0,0,.6)", padding:"2px 6px" }}>
                enc128
              </div>
              <div style={{ position:"absolute", top:8, right:8, fontFamily:"JetBrains Mono", fontSize:9, color:"#fff", background:"rgba(239,68,68,.85)", padding:"2px 6px", borderRadius:3 }}>● REC</div>
            </div>

            {/* Dashboard table */}
            <div style={{ borderRadius:12, border:"1px solid var(--line-2)", overflow:"hidden", background:"#fff" }}>
              <div style={{ padding:"10px 12px", background:"var(--paper)", display:"flex", justifyContent:"space-between", fontSize:10 }}>
                <span style={{ fontFamily:"Space Grotesk", fontWeight:700, color:"var(--navy)" }}>Pengguna · Real-time</span>
                <span className="kicker">DASHBOARD</span>
              </div>
              {[
                ["Wahyuono","whyono@.com","On Time","#10B981"],
                ["Rina Putri","rina@.com","Late","#F59E0B"],
                ["Kevin S.","kevin@.com","On Time","#10B981"],
                ["Bagas P.","bagas@.com","Absent","#EF4444"],
              ].map((r,i)=>(
                <div key={i} style={{ display:"grid", gridTemplateColumns:"1fr 1.4fr 0.8fr", gap:10, padding:"8px 12px", borderTop:"1px solid var(--line-2)", fontSize:10.5, alignItems:"center" }}>
                  <span style={{ fontFamily:"Space Grotesk", fontWeight:600, color:"var(--navy)" }}>{r[0]}</span>
                  <span style={{ color:"var(--muted)" }}>{r[1]}</span>
                  <span style={{ color:r[3], fontFamily:"JetBrains Mono", fontSize:9 }}>● {r[2]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <PageFoot pageNo={7} total={17}/>
    </>
  );
}

function AttendancePhoneUI() {
  return (
    <div style={{ padding:"34px 12px 12px", fontSize:11, height:"100%", background:"linear-gradient(180deg,#F0F4FB,#fff)" }}>
      <div style={{ fontSize:9, color:"#64748B" }}>9:41</div>
      <div style={{ fontWeight:700, fontSize:13, marginTop:10 }}>Riwayat</div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:2 }}>
        <span style={{ fontSize:10, color:"#64748B" }}>July 2025</span>
        <span>📅</span>
      </div>
      <div style={{ display:"flex", gap:14, marginTop:10, fontSize:9.5, borderBottom:"1px solid #E5EBF4", paddingBottom:6 }}>
        <span style={{ color:"#64748B" }}>Semua</span>
        <span style={{ color:"#64748B" }}>Akses Pintu</span>
        <span style={{ color:"#2C5BB8", fontWeight:600 }}>Absensi</span>
      </div>
      <div style={{ fontSize:9, color:"#64748B", marginTop:10 }}>Senin, 17 April</div>
      {[
        ["F-201","PKPA Rumah Sakit","Clock-in","Late","#F59E0B","09:30 AM"],
        ["F-202","Matematika Dasar","Clock-out","","#10B981","09:30 AM"],
      ].map((r,i)=>(
        <div key={i} style={{ marginTop:8, padding:8, border:"1px solid #E5EBF4", borderRadius:8, display:"flex", gap:8 }}>
          <div style={{ width:30, height:30, borderRadius:6, background:"#0F172A" }}/>
          <div style={{ flex:1 }}>
            <div style={{ fontSize:9, color:"#64748B" }}>{r[0]}</div>
            <div style={{ fontWeight:600, fontSize:10 }}>{r[1]}</div>
            <div style={{ fontSize:9, color:r[4] }}>● {r[2]} {r[3]&&<i style={{ color:"#F59E0B" }}>{r[3]}</i>}</div>
          </div>
          <div style={{ fontSize:9, color:"#64748B" }}>{r[5]}</div>
        </div>
      ))}
      <div style={{ marginTop:14, display:"inline-block", padding:"6px 12px", border:"1px solid #E5EBF4", borderRadius:999, fontSize:9, fontWeight:600 }}>📋 Filter Matkul</div>
    </div>
  );
}

/* PAGE 8 — HRIS */
function PageHRIS() {
  const features = [
    {ic:"user", t:"Manajemen Absensi"},
    {ic:"money",t:"Sistem Penggajian"},
    {ic:"cal",  t:"Kalender Kerja"},
    {ic:"bell", t:"Pengumuman Perusahaan"},
    {ic:"cert", t:"Sertifikasi & Pelatihan"},
    {ic:"mail", t:"Permohonan Lembur & Izin"},
  ];
  return (
    <>
      <PageHeader pageNo={8} title="07 · PRODUCT — HRIS"/>
      <div className="circuit"><CircuitOrnament position="bl" opacity={0.3}/></div>

      <div style={{ position:"absolute", left:56, right:56, top:120 }}>
        <SectionChip>HRIS · Human Resource Information System</SectionChip>
        <h2 className="h-display" style={{ fontSize:30, margin:"22px 0 10px", maxWidth:520 }}>
          Manajemen SDM yang terintegrasi, efisien, dan real-time.
        </h2>
        <p className="body" style={{ maxWidth:560, fontSize:12.5 }}>
          Dirancang untuk mempermudah karyawan dan manajer memantau pekerjaan,
          mengelola absensi, izin, lembur, dan slip gaji secara real-time melalui
          satu platform digital terpadu.
        </p>

        <div style={{ display:"grid", gridTemplateColumns:"0.9fr 1.1fr", gap:24, marginTop:24, alignItems:"start" }}>
          <PhoneFrame w={210}>
            <HRISPhoneUI/>
          </PhoneFrame>

          <div>
            <div className="kicker" style={{ color:"var(--primary)" }}>Fitur Utama HRIS</div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginTop:12 }}>
              {features.map((f,i)=>{
                const Ic = Icon[f.ic];
                return (
                  <div key={i} style={{ display:"flex", gap:10, alignItems:"center", padding:12, border:"1px solid var(--line-2)", borderRadius:10, background:"#fff" }}>
                    <div style={{ width:32, height:32, borderRadius:7, background:"linear-gradient(135deg,#E8EFFC,#D6E2F8)", color:"var(--primary)", display:"grid", placeItems:"center", flexShrink:0 }}><Ic/></div>
                    <div style={{ fontFamily:"Space Grotesk", fontWeight:600, fontSize:11.5, color:"var(--navy)" }}>{f.t}</div>
                  </div>
                );
              })}
            </div>

            {/* Mini stats */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:10, marginTop:14 }}>
              {[
                ["Karyawan aktif","324"],
                ["Tingkat kehadiran","97.2%"],
                ["Dokumen tergenerasi","1,8K /bln"],
              ].map(([k,v],i)=>(
                <div key={i} className="card-soft" style={{ padding:14 }}>
                  <div className="kicker">{k}</div>
                  <div className="h-display" style={{ fontSize:22, color:"var(--primary)", marginTop:4 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <PageFoot pageNo={8} total={17}/>
    </>
  );
}

function HRISPhoneUI() {
  return (
    <div style={{ padding:"32px 10px 10px", fontSize:11, height:"100%", background:"linear-gradient(180deg,#EAF1FB,#F7F9FC)" }}>
      <div style={{ fontSize:9, color:"#64748B" }}>9:27</div>
      <div style={{ marginTop:8 }}>
        <div style={{ fontSize:9.5, color:"#64748B" }}>Selamat Pagi,</div>
        <div style={{ fontWeight:700, fontSize:11.5 }}>Julice Vaneza Sihaloho</div>
        <div style={{ fontSize:9, color:"#64748B" }}>Jangan lupa absen hari ini!</div>
      </div>
      <div style={{ marginTop:8, padding:8, background:"#fff", borderRadius:8, fontSize:9 }}>
        <div style={{ color:"#64748B" }}>📍 Kantor</div>
        <div style={{ fontWeight:600 }}>28 Jan 2025 (08:30 - 16:30)</div>
        <div style={{ display:"flex", gap:6, marginTop:6 }}>
          <span style={{ flex:1, padding:"4px 6px", background:"#E8EFFC", color:"#2C5BB8", borderRadius:5, textAlign:"center" }}>Jam Masuk →</span>
          <span style={{ flex:1, padding:"4px 6px", background:"#E8EFFC", color:"#2C5BB8", borderRadius:5, textAlign:"center" }}>Jam Keluar →</span>
        </div>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:6, marginTop:8 }}>
        {["📅 Kalender","📑 Catatan","👥 Divisi","🕐 Lembur","📝 Pengembalian","💰 Slip Gaji"].map((t,i)=>(
          <div key={i} style={{ padding:"10px 6px", background:"#fff", borderRadius:6, fontSize:8.5, textAlign:"center" }}>{t}</div>
        ))}
      </div>
      <div style={{ marginTop:8, padding:8, background:"linear-gradient(90deg,#10B981,#059669)", color:"#fff", borderRadius:6, fontSize:9, fontWeight:600 }}>
        🎉 Jadwal Libur Nasional &amp; Cuti Bersama 2025 — Cek!
      </div>
      <div style={{ marginTop:8, padding:6, background:"#fff", borderRadius:6, fontSize:9 }}>
        <div style={{ display:"flex", justifyContent:"space-between" }}>
          <span style={{ fontWeight:600 }}>Pengumuman</span>
          <span style={{ color:"#2C5BB8" }}>Tampilkan</span>
        </div>
        <div style={{ marginTop:4, color:"#64748B" }}>Sosialisasi Perubahan PIC dan BPJS Tahun 2025</div>
        <div style={{ fontSize:8.5, color:"#94A3B8" }}>18 Jan 2025</div>
      </div>
    </div>
  );
}

Object.assign(window, { PageSmartlock, PageSafety, PageAttendance, PageHRIS });
