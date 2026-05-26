"use client";

import React from "react";
import { Icon } from "./primitives";

// Per-product animated previews. Each renders a small "live demo" of the product.

function ProductPreview({ code }) {
  switch (code) {
    case "SL-01": return <PrevLock/>;
    case "AI-02": return <PrevCCTV/>;
    case "AT-03": return <PrevFace/>;
    case "HR-04": return <PrevHRIS/>;
    case "FM-05": return <PrevFleet/>;
    case "AI-06": return <PrevAI/>;
    case "WB-07": return <PrevWeb/>;
    case "IN-08": return <PrevInt/>;
    case "MT-09": return <PrevMeeting/>;
    case "IV-10": return <PrevInvoice/>;
    case "KS-11": return <PrevKiosk/>;
    default:      return <PrevLock/>;
  }
}

/* Smartlock — animated lock state + scrolling audit log */
function PrevLock() {
  return (
    <div className="preview pp-lock">
      <div className="preview-stage">
        <div className="preview-chrome"/>
        <div className="lock-frame">
          <div className="lock-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="4" y="11" width="16" height="10" rx="2"/>
              <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
            </svg>
          </div>
        </div>
        <div className="lock-status">STATUS · <span className="v">SECURED</span></div>
        <div className="log-row r1"><span className="t">14:32</span> Andika · Office</div>
        <div className="log-row r2"><span className="t">14:31</span> Rina · Lobby</div>
        <div className="log-row r3"><span className="t">14:29</span> Faisal · Server</div>
      </div>
    </div>
  );
}

/* CCTV / Safety AI — mini live frame with detection boxes */
function PrevCCTV() {
  return (
    <div className="preview pp-cctv">
      <div className="preview-stage">
        <div className="preview-chrome"/>
        <div className="cctv-mini">
          <div className="scan-mini"/>
          <span className="hud-mini tl">CAM-04 · AI</span>
          <span className="hud-mini tr">REC</span>
          {/* silhouettes */}
          <svg viewBox="0 0 320 320" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
               preserveAspectRatio="xMidYMid slice">
            <rect x="0" y="220" width="320" height="100" fill="rgba(15,23,42,0.4)"/>
            <g fill="#2A3547">
              <ellipse cx="92" cy="190" rx="14" ry="16"/>
              <rect x="78" y="200" width="28" height="48"/>
              <ellipse cx="220" cy="195" rx="12" ry="14"/>
              <rect x="208" y="205" width="24" height="42"/>
            </g>
          </svg>
          <div className="det d1" data-l="Person · 98%"/>
          <div className="det d2" data-l="Person · 94%"/>
        </div>
      </div>
    </div>
  );
}

/* Face recognition attendance */
function PrevFace() {
  return (
    <div className="preview pp-face">
      <div className="preview-stage">
        <div className="preview-chrome"/>
        <div className="face-card">
          <div className="face-circle">
            <div className="face-scan"/>
          </div>
          <div className="face-check">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="m4 12 5 5 11-11"/>
            </svg>
          </div>
          <div className="face-name">
            Rina Kusuma
            <span className="role">Verified · 08:24 AM</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* HRIS — list of employees with payroll meters filling */
function PrevHRIS() {
  const rows = [
    { ini: "AP", name: "Andika P.", pct: "88%" },
    { ini: "RM", name: "Rizky M.",   pct: "62%" },
    { ini: "DL", name: "Dewi L.",    pct: "94%" },
    { ini: "FR", name: "Faisal R.",  pct: "50%" },
  ];
  return (
    <div className="preview pp-hris">
      <div className="preview-stage">
        <div className="preview-chrome"/>
        {rows.map((r, i) => (
          <div key={i} className={`hris-bar r${i+1}`}>
            <span className="av">{r.ini}</span>
            <span style={{ flex: "0 0 60px", overflow: "hidden", whiteSpace: "nowrap" }}>{r.name}</span>
            <span className="meter"/>
            <span className="pct">{r.pct}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Fleet — map with moving trucks */
function PrevFleet() {
  return (
    <div className="preview pp-fleet">
      <div className="preview-stage">
        <div className="preview-chrome"/>
        <div className="map-bg">
          <span className="pin p1"/>
          <span className="pin p2"/>
          <span className="pin p3"/>
          <div className="truck">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 7h11v10H3zM14 11h4l3 3v3h-7"/>
              <circle cx="7" cy="18" r="2"/>
              <circle cx="17" cy="18" r="2"/>
            </svg>
          </div>
          <div className="truck t2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
              <path d="M3 7h11v10H3zM14 11h4l3 3v3h-7"/>
              <circle cx="7" cy="18" r="2"/>
              <circle cx="17" cy="18" r="2"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

/* sentrAI — chat UI with typing indicator */
function PrevAI() {
  return (
    <div className="preview pp-ai">
      <div className="preview-stage">
        <div className="preview-chrome"/>
        <div className="chat">
          <div className="msg you">Berapa total biaya BBM bulan lalu?</div>
          <div className="msg ai-typing"><span/><span/><span/></div>
          <div className="msg ai">Rp 248,5 juta — turun 18% dari April.</div>
        </div>
      </div>
    </div>
  );
}

/* Custom Website — browser frame with blocks appearing */
function PrevWeb() {
  return (
    <div className="preview pp-web">
      <div className="preview-stage">
        <div className="preview-chrome"/>
        <div className="browser">
          <div className="browser-bar">
            <span className="d"/><span className="d"/><span className="d"/>
            <span className="url">sentratechnology.com</span>
          </div>
          <div className="web-content">
            <div className="block h w70 r1"/>
            <div className="block w85 r2"/>
            <div className="block w50 r3"/>
            <div className="web-grid">
              <div className="card r4"/>
              <div className="card alt r5"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Integration — central node with packets streaming from corners */
function PrevInt() {
  return (
    <div className="preview pp-int">
      <div className="preview-stage">
        <div className="preview-chrome"/>
        <div className="int-stage">
          <svg className="lines" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 18 22 L 50 50"/>
            <path d="M 82 22 L 50 50"/>
            <path d="M 18 78 L 50 50"/>
            <path d="M 82 78 L 50 50"/>
          </svg>
          <div className="node n-tl"><Icon.cog/></div>
          <div className="node n-tr"><Icon.data/></div>
          <div className="node n-bl"><Icon.cam/></div>
          <div className="node n-br"><Icon.user/></div>
          <div className="node center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3"/>
              <circle cx="12" cy="12" r="3" fill="currentColor"/>
            </svg>
          </div>
          <span className="packet p1"/>
          <span className="packet p2"/>
          <span className="packet p3"/>
          <span className="packet p4"/>
        </div>
      </div>
    </div>
  );
}

/* Sentra Meeting — video conference grid with active speaker + recording indicator */
function PrevMeeting() {
  const tiles = [
    { ini: "AP", color: "#14B8A6", muted: false, speaking: true,  name: "Andika" },
    { ini: "RK", color: "#F97316", muted: false, speaking: false, name: "Rina"   },
    { ini: "DL", color: "#3B82F6", muted: true,  speaking: false, name: "Dewi"   },
    { ini: "FR", color: "#8B5CF6", muted: false, speaking: false, name: "Faisal" },
  ];
  return (
    <div className="preview pp-meet">
      <div className="preview-stage">
        <div className="preview-chrome"/>
        <div className="meet-frame">
          <div className="meet-hud tl"><span className="meet-rec"/>REC · 00:24</div>
          <div className="meet-hud tr">LIVE TRANSCRIPT · ID</div>

          <div className="meet-grid">
            {tiles.map((t, i) => (
              <div key={i} className={`meet-tile ${t.speaking ? "speaking" : ""}`}>
                <div className="meet-av" style={{ background: t.color }}>{t.ini}</div>
                <div className="meet-name">
                  {t.name}
                  {t.muted && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" style={{ marginLeft: 4 }}>
                      <path d="M3 3 L21 21 M9 9V5a3 3 0 0 1 6 0v3M15 13.3a3 3 0 0 1-5.9-.7"/>
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="meet-caption">
            "...laporan compliance bulan ini naik 8%..."
          </div>
        </div>
      </div>
    </div>
  );
}

/* Sentra Invoice — invoice document being generated, line items appear, total animates */
function PrevInvoice() {
  return (
    <div className="preview pp-inv">
      <div className="preview-stage">
        <div className="preview-chrome"/>
        <div className="inv-doc">
          <div className="inv-head">
            <div className="inv-logo">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="6" width="18" height="12" rx="2"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              <span>INV · 2026-0042</span>
            </div>
            <div className="inv-status">DRAFT → SENT</div>
          </div>

          <div className="inv-from">
            <div className="inv-label">Untuk</div>
            <div className="inv-to">PT. Tunas Inti Abadi</div>
          </div>

          <div className="inv-lines">
            <div className="inv-line r1">
              <span>Fleet GPS Subscription · 120 unit</span>
              <span className="amt">Rp 57.600.000</span>
            </div>
            <div className="inv-line r2">
              <span>Implementasi & training</span>
              <span className="amt">Rp 15.000.000</span>
            </div>
            <div className="inv-line r3">
              <span>PPN 11%</span>
              <span className="amt">Rp 7.986.000</span>
            </div>
          </div>

          <div className="inv-total">
            <span className="inv-total-label">Total</span>
            <span className="inv-total-val">Rp 80.586.000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Kiosk — animated touchscreen self-service kiosk */
function PrevKiosk() {
  return (
    <div className="preview pp-kiosk">
      <div className="preview-stage">
        <div className="preview-chrome"/>
        <div className="kiosk-frame">
          <div className="kiosk-screen">
            <div className="kiosk-header">
              <div className="kiosk-logo">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="14" rx="2"/>
                  <path d="M8 21h8M12 18v3"/>
                </svg>
                <span>PEMKOT SAMARINDA</span>
              </div>
              <div className="kiosk-queue">A-247</div>
            </div>
            <div className="kiosk-grid">
              <div className="kiosk-btn kb1">
                <Icon.user/>
                <span>e-KTP</span>
              </div>
              <div className="kiosk-btn kb2">
                <Icon.cert/>
                <span>Surat</span>
              </div>
              <div className="kiosk-btn kb3">
                <Icon.money/>
                <span>Pajak</span>
              </div>
              <div className="kiosk-btn kb4">
                <Icon.cal/>
                <span>Antrian</span>
              </div>
            </div>
            <div className="kiosk-prompt">Pilih layanan untuk memulai</div>
            <div className="kiosk-touch"/>
          </div>
          <div className="kiosk-stand"/>
          <div className="kiosk-base"/>
        </div>
      </div>
    </div>
  );
}

export { ProductPreview };
