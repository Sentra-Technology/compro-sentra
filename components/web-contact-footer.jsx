"use client";

import React from "react";
import { Icon } from "./primitives";

// Website — Contact (form + info) + Footer

function Contact() {
  const [sent, setSent] = React.useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };
  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact-card reveal">
          <div className="contact-grid">
            <div>
              <p className="section-label contact-eyebrow">Get in touch</p>
              <h2 className="h-display">Mari berkolaborasi.</h2>
              <p className="lede">
                Ceritakan tantangan operasional Anda — kami balas dalam 1×24 jam.
              </p>

              <div className="contact-list">
                {[
                  ["phone", "TELEPON", "+62 822 5544 3380"],
                  ["mail",  "EMAIL",   "admin@sentratechnology.com"],
                  ["pin",   "KANTOR",  "Kompleks Graha Indah A.13\nSamarinda Kota, Kalimantan Timur"],
                ].map(([ic, k, v]) => {
                  const Ic = Icon[ic];
                  return (
                    <div className="contact-row" key={k}>
                      <div className="ic"><Ic/></div>
                      <div>
                        <div className="k">{k}</div>
                        <div className="v">{v}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <form className="contact-form" onSubmit={onSubmit}>
              <div className="field-row">
                <div className="field">
                  <label>Nama</label>
                  <input type="text" required placeholder="Nama lengkap"/>
                </div>
                <div className="field">
                  <label>Perusahaan</label>
                  <input type="text" placeholder="Nama perusahaan"/>
                </div>
              </div>
              <div className="field">
                <label>Email</label>
                <input type="email" required placeholder="email@perusahaan.com"/>
              </div>
              <div className="field">
                <label>Layanan yang diminati</label>
                <input type="text" placeholder="Smartlock, AI Safety, HRIS, dll."/>
              </div>
              <div className="field">
                <label>Pesan singkat</label>
                <textarea required placeholder="Ceritakan kebutuhan singkat Anda…"></textarea>
              </div>
              <button type="submit" className="form-submit" disabled={sent}>
                {sent ? <><Icon.check/> Terkirim — kami akan hubungi balik</> : <>Kirim pesan <Icon.arrow/></>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <img className="footer-logo" src="/assets/sentra-logo.png" alt="Sentra Technology"/>
            <p style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.6, margin: "0 0 16px", maxWidth: 320 }}>
              PT. Sentra Visi Teknologi (Sentra Technology) — pusat teknologi
              berbasis di Samarinda yang menghadirkan solusi AI, IoT, dan
              pengembangan software untuk mendorong transformasi digital
              pemerintahan, industri, pendidikan, dan korporasi di Indonesia.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              {["globe", "mail", "phone"].map(ic => {
                const Ic = Icon[ic];
                return (
                  <a key={ic} href="#contact" style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: "var(--surface-2)",
                    border: "1px solid var(--line-2)",
                    display: "grid", placeItems: "center",
                    color: "var(--ink-2)",
                    transition: "border-color .15s, color .15s",
                  }} onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                     onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--line-2)"; e.currentTarget.style.color = "var(--ink-2)"; }}>
                    <Ic/>
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h5>Produk</h5>
            <ul>
              <li><a href="#produk">Smartlock</a></li>
              <li><a href="#produk">Safety AI</a></li>
              <li><a href="#produk">Attendance</a></li>
              <li><a href="#produk">HRIS Sentra</a></li>
              <li><a href="#produk">Fleet</a></li>
              <li><a href="#produk">sentrAI</a></li>
            </ul>
          </div>

          <div>
            <h5>Perusahaan</h5>
            <ul>
              <li><a href="#tentang">Tentang</a></li>
              <li><a href="#tim">Tim</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h5>Kontak</h5>
            <ul>
              <li><a href="tel:+6282255443380">+62 822 5544 3380</a></li>
              <li><a href="mailto:admin@sentratechnology.com">admin@sentratechnology.com</a></li>
              <li style={{ color: "var(--ink-2)", fontSize: 13.5, lineHeight: 1.5 }}>
                Kompleks Graha Indah A.13<br/>
                Samarinda Kota, Kaltim
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 PT. Sentra Visi Teknologi · All rights reserved</span>
          <span>Made in Samarinda · Indonesia</span>
        </div>
      </div>
    </footer>
  );
}

export { Contact, Footer };
