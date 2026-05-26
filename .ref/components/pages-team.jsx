// Page: OUR TEAM — 12 people across 2 divisions
// Inserted between "Why Sentra" and "Projects".

function PageTeam() {
  // Two divisions, 12 people total
  const divisions = [
    {
      code: "DIV-01",
      name: "Technology & Engineering",
      tagline: "Building the platforms — IoT, AI, software & integrations.",
      color: "#2C5BB8",
      icon: "code",
      lead: "Engineering",
      members: [
        { name: "Andika Pratama",     role: "Head of Engineering",     init: "AP", tag: "Lead" },
        { name: "Rizky Maulana",      role: "IoT & Embedded Lead",     init: "RM" },
        { name: "Dewi Larasati",      role: "AI / Computer Vision",    init: "DL" },
        { name: "Bagas Wicaksono",    role: "Full-Stack Engineer",     init: "BW" },
        { name: "Nadya Hartono",      role: "Mobile Engineer",         init: "NH" },
        { name: "Faisal Ramadhan",    role: "DevOps & Cloud",          init: "FR" },
        { name: "Putri Anggraini",    role: "QA & Integration",        init: "PA" },
      ],
    },
    {
      code: "DIV-02",
      name: "Business & Operations",
      tagline: "Client success, delivery, growth & after-sales support.",
      color: "#F59E0B",
      icon: "building",
      lead: "Operations",
      members: [
        { name: "Hendra Setiawan",    role: "Head of Operations",      init: "HS", tag: "Lead" },
        { name: "Rina Kusuma",        role: "Project Manager",         init: "RK" },
        { name: "Galang Pradipta",    role: "Business Development",    init: "GP" },
        { name: "Sari Widyaningsih",  role: "Client Success",          init: "SW" },
        { name: "Tomi Hidayat",       role: "Field & Support Lead",    init: "TH" },
      ],
    },
  ];

  return (
    <>
      <PageHeader pageNo={14} title="13 · OUR TEAM" />
      <div className="circuit"><CircuitOrnament position="tr" opacity={0.3} /></div>
      <div className="circuit"><CircuitOrnament position="bl" opacity={0.25} /></div>

      <div style={{ position: "absolute", left: 56, right: 56, top: 120 }}>
        <SectionChip>Our Team · People behind Sentra</SectionChip>

        {/* Header band */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginTop: 22 }}>
          <h2 className="h-display" style={{ fontSize: 38, margin: 0, maxWidth: 420 }}>
            Dua divisi.<br />Satu tim.
          </h2>
          <div style={{ display: "flex", gap: 22, alignItems: "flex-end" }}>
            <Stat n="12" k="Anggota tim" />
            <Stat n="02" k="Divisi" />
            <Stat n="100%" k="In-house" />
          </div>
        </div>

        <p className="body" style={{ fontSize: 12.5, maxWidth: 560, marginTop: 10 }}>
          Tim Sentra Technology terdiri dari engineer, product manager, dan
          spesialis lapangan yang bekerja end-to-end — dari riset, pengembangan,
          implementasi, hingga dukungan operasional di sisi klien.
        </p>

        {/* Division blocks */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 14, marginTop: 22 }}>
          {divisions.map((d) => (
            <DivisionBlock key={d.code} d={d} />
          ))}
        </div>
      </div>

      <PageFoot pageNo={14} total={17} />
    </>
  );
}

function Stat({ n, k }) {
  return (
    <div style={{ textAlign: "right" }}>
      <div style={{ fontFamily: "Space Grotesk", fontWeight: 800, fontSize: 26, color: "var(--ink)", lineHeight: 1 }}>{n}</div>
      <div className="kicker" style={{ fontSize: 9, marginTop: 4 }}>{k}</div>
    </div>
  );
}

function DivisionBlock({ d }) {
  const Ic = Icon[d.icon] || Icon.cog;
  return (
    <div style={{
      border: "1px solid var(--line-2)", borderRadius: 14, background: "#fff",
      overflow: "hidden", position: "relative",
    }}>
      {/* Division header strip */}
      <div style={{
        display: "flex", alignItems: "center", gap: 14,
        padding: "14px 18px",
        background: `linear-gradient(90deg, ${d.color}14, transparent 70%)`,
        borderBottom: "1px solid var(--line-2)",
        position: "relative",
      }}>
        <div style={{
          width: 38, height: 38, borderRadius: 10,
          background: d.color, color: "#fff",
          display: "grid", placeItems: "center",
          boxShadow: `0 6px 14px -4px ${d.color}80`,
        }}>
          <Ic />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{
              fontFamily: "JetBrains Mono", fontSize: 9, fontWeight: 700,
              color: d.color, letterSpacing: ".12em",
            }}>{d.code}</span>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--line)" }} />
            <span className="kicker" style={{ fontSize: 9 }}>{d.members.length} ANGGOTA</span>
          </div>
          <div style={{ fontFamily: "Space Grotesk", fontWeight: 700, fontSize: 16, color: "var(--navy)", marginTop: 2 }}>
            {d.name}
          </div>
        </div>
        <div style={{
          fontFamily: "Space Grotesk", fontStyle: "italic",
          fontSize: 11.5, color: "var(--ink-2)", maxWidth: 240, textAlign: "right",
        }}>
          {d.tagline}
        </div>
      </div>

      {/* Members grid */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
        gap: 0,
      }}>
        {d.members.map((m, i) => (
          <MemberCard key={m.init} m={m} color={d.color} idx={i} total={d.members.length} />
        ))}
      </div>
    </div>
  );
}

function MemberCard({ m, color, idx, total }) {
  // figure out borders for grid effect
  const col = idx % 4;
  const lastRowStart = Math.floor((total - 1) / 4) * 4;
  const isLastRow = idx >= lastRowStart;
  return (
    <div style={{
      padding: "14px 14px 12px",
      borderRight: col !== 3 ? "1px solid var(--line-2)" : 0,
      borderBottom: !isLastRow ? "1px solid var(--line-2)" : 0,
      display: "flex", flexDirection: "column", gap: 10,
      position: "relative",
      minHeight: 116,
    }}>
      {m.tag && (
        <span style={{
          position: "absolute", top: 10, right: 10,
          fontFamily: "JetBrains Mono", fontSize: 8, letterSpacing: ".12em",
          color: color, border: `1px solid ${color}55`, borderRadius: 3,
          padding: "2px 5px", textTransform: "uppercase",
        }}>{m.tag}</span>
      )}
      {/* Avatar — original abstract: initials over a dotted hex echo of the brand mark */}
      <div style={{ position: "relative", width: 46, height: 46 }}>
        <svg width="46" height="46" viewBox="0 0 64 64" style={{ position: "absolute", inset: 0, opacity: .35 }}>
          {[
            [14, 20], [32, 14], [50, 20],
            [10, 38], [32, 32], [54, 38],
            [20, 50], [44, 50],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={2.2} fill={color} />
          ))}
        </svg>
        <div style={{
          position: "absolute", inset: 0,
          display: "grid", placeItems: "center",
          fontFamily: "Space Grotesk", fontWeight: 700, fontSize: 15,
          color: color,
        }}>
          {m.init}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <div style={{
          fontFamily: "Space Grotesk", fontWeight: 700, fontSize: 12.5,
          color: "var(--navy)", lineHeight: 1.2,
        }}>
          {m.name}
        </div>
        <div style={{
          fontSize: 10.5, color: "var(--ink-2)", lineHeight: 1.35,
        }}>
          {m.role}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { PageTeam });
