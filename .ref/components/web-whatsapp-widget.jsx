// Modern WhatsApp Business live chat widget

function WhatsAppWidget() {
  const PHONE = "6282255443380";
  const ADMIN_NAME = "Sentra Support";
  const ADMIN_ROLE = "Sales & Support · Admin";
  const GREETING = "Halo! 👋 Bagaimana kami bisa membantu Anda hari ini? Silakan tinggalkan pesan, kami akan segera membalas via WhatsApp.";

  const [open, setOpen] = React.useState(false);
  const [text, setText] = React.useState("");
  const [unread, setUnread] = React.useState(true);
  const [typing, setTyping] = React.useState(true);
  const inputRef = React.useRef(null);

  // Simulate "typing" → "online" after popup opens
  React.useEffect(() => {
    if (!open) return;
    setTyping(true);
    setUnread(false);
    const t = setTimeout(() => setTyping(false), 1400);
    setTimeout(() => inputRef.current?.focus(), 200);
    return () => clearTimeout(t);
  }, [open]);

  // Esc closes
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const send = (e) => {
    e?.preventDefault?.();
    const msg = text.trim() || "Halo Sentra Technology, saya tertarik dengan solusi Anda.";
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener");
  };

  const quickReplies = [
    "Saya tertarik dengan CCTV AI",
    "Demo Smartlock",
    "Konsultasi proyek",
    "Pertanyaan teknis",
  ];

  // Get current time (HH:MM)
  const now = React.useMemo(() => {
    const d = new Date();
    return d.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", hour12: false });
  }, [open]);

  return (
    <>
      {/* Floating button */}
      <button
        className={`wa-fab ${open ? "is-open" : ""}`}
        onClick={() => setOpen(o => !o)}
        aria-label={open ? "Close chat" : "Open chat"}>
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round">
            <path d="M6 6l12 12M6 18L18 6"/>
          </svg>
        ) : (
          <>
            <svg width="30" height="30" viewBox="0 0 32 32" fill="#fff">
              <path d="M16 3C9.4 3 4 8.4 4 15c0 2.3.6 4.4 1.7 6.3L4 29l7.9-1.6c1.8 1 3.9 1.6 6.1 1.6 6.6 0 12-5.4 12-12S22.6 3 16 3zm6.9 17.2c-.3.8-1.7 1.6-2.4 1.7-.7.1-1.5.1-2.4-.2-.5-.2-1.3-.4-2.2-.9-3.9-1.7-6.5-5.6-6.7-5.9-.2-.3-1.6-2.2-1.6-4.1 0-2 1-3 1.4-3.4.4-.4.8-.5 1.1-.5h.8c.3 0 .6 0 .9.7.3.8 1.1 2.8 1.2 3 .1.2.2.4 0 .7-.1.3-.2.4-.4.7-.2.2-.4.5-.6.7-.2.2-.4.4-.2.8.2.4 1 1.7 2.2 2.7 1.5 1.3 2.8 1.7 3.2 1.9.4.2.6.2.8-.1.2-.3.9-1.1 1.2-1.4.3-.4.6-.3.9-.2.4.1 2.4 1.1 2.8 1.3.4.2.7.3.8.5.1.2.1 1-.2 1.8z"/>
            </svg>
            {unread && <span className="wa-fab-badge">1</span>}
          </>
        )}
      </button>

      {/* Chat popup */}
      <div className={`wa-chat ${open ? "is-open" : ""}`} role="dialog" aria-label="WhatsApp chat">
        {/* Header */}
        <div className="wa-chat-head">
          <div className="wa-chat-bg-pattern"/>
          <button className="wa-chat-back" onClick={() => setOpen(false)} aria-label="Close">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <div className="wa-chat-avatar">
            <img src="assets/sentra-mark.png" alt="Sentra"/>
            <span className="wa-online-dot"/>
          </div>
          <div className="wa-chat-info">
            <div className="wa-chat-name">{ADMIN_NAME}</div>
            <div className="wa-chat-status">
              {typing ? (
                <span className="wa-typing">
                  <span/><span/><span/>
                </span>
              ) : (
                <span className="wa-online">online</span>
              )}
            </div>
          </div>
          <div className="wa-chat-actions">
            <button aria-label="More">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Messages body with WhatsApp-style pattern */}
        <div className="wa-chat-body">
          <div className="wa-chat-pattern"/>
          <div className="wa-chat-stack">
            <div className="wa-day">Hari ini</div>

            <div className="wa-msg incoming msg-1">
              <div className="wa-msg-bubble">
                <div className="wa-msg-name">{ADMIN_NAME}</div>
                <div className="wa-msg-text">{GREETING}</div>
                <div className="wa-msg-meta">{now}</div>
                <div className="wa-msg-tail"/>
              </div>
            </div>

            <div className="wa-msg incoming msg-2">
              <div className="wa-msg-bubble">
                <div className="wa-msg-text">
                  Pilih topik di bawah, atau langsung ketik pesan Anda 👇
                </div>
                <div className="wa-msg-meta">{now}</div>
                <div className="wa-msg-tail"/>
              </div>
            </div>

            <div className="wa-quick-replies">
              {quickReplies.map(q => (
                <button key={q} className="wa-quick" onClick={() => setText(q)}>
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Input */}
        <form className="wa-chat-input" onSubmit={send}>
          <button type="button" className="wa-icon-btn" aria-label="Emoji" tabIndex={-1}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="9"/>
              <path d="M8 14s1.5 2 4 2 4-2 4-2M9 10h.01M15 10h.01"/>
            </svg>
          </button>
          <input
            ref={inputRef}
            type="text"
            placeholder="Ketik pesan…"
            value={text}
            onChange={(e) => setText(e.target.value)}/>
          <button type="submit" className="wa-send-btn" aria-label="Kirim pesan">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
              <path d="M2 21L23 12 2 3l5 9-5 9zm5-7l9.5-2L7 5l3.5 7L7 14z"/>
            </svg>
          </button>
        </form>

        <div className="wa-chat-foot">
          Powered by <strong>WhatsApp</strong> · Pesan Anda akan dibuka di WhatsApp
        </div>
      </div>

      {/* Backdrop for mobile */}
      {open && <div className="wa-backdrop" onClick={() => setOpen(false)}/>}
    </>
  );
}

Object.assign(window, { WhatsAppWidget });
