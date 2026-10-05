import React from "react";
import { Link } from "react-router-dom";

export function PawneeTheme() {
  return (
    <style>{`
      :root {
        --bg: #050505;
        --paper: #f3f0ea;
        --paper-2: #ebe6dd;
        --ink: #0e0e0e;
        --muted: #706a63;
        --line: rgba(14, 14, 14, 0.12);
        --line-strong: rgba(14, 14, 14, 0.22);
        --accent: #111111;
        --accent-soft: #dcd5c7;
        --success: #dfe7d8;
        --danger: #f0dddd;
        --shadow: 0 20px 80px rgba(0,0,0,.18);
      }

      * { box-sizing: border-box; }
      html, body, #root { min-height: 100%; }
      body {
        margin: 0;
        background: var(--bg);
        color: var(--ink);
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }
      a { color: inherit; text-decoration: none; }
      button, input, select, textarea { font: inherit; }

      .pw-page {
        min-height: 100vh;
        padding: 28px;
        background: var(--bg);
      }

      .pw-canvas {
        width: min(1240px, calc(100vw - 56px));
        margin: 0 auto;
        background: var(--paper);
        min-height: calc(100vh - 56px);
        box-shadow: var(--shadow);
        position: relative;
        overflow: hidden;
      }

      .pw-topbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 18px 26px;
        font-size: 10px;
        letter-spacing: .18em;
        text-transform: uppercase;
      }

      .pw-monogram {
        width: 28px;
        height: 28px;
        border: 1px solid var(--ink);
        border-radius: 999px;
        display: grid;
        place-items: center;
        font-family: Didot, "Bodoni MT", "Times New Roman", serif;
        font-size: 15px;
      }

      .pw-hero {
        padding: 28px 44px 10px;
        position: relative;
      }

      .pw-hero-grid {
        min-height: 420px;
        display: grid;
        align-items: center;
        justify-items: center;
        position: relative;
      }

      .pw-kicker {
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: .22em;
        color: var(--muted);
        margin-bottom: 22px;
      }

      .pw-display {
        font-family: Didot, "Bodoni MT", "Times New Roman", serif;
        font-weight: 400;
        text-transform: uppercase;
        font-size: clamp(54px, 8vw, 108px);
        line-height: .86;
        text-align: center;
        max-width: 10ch;
        margin: 0 auto;
        letter-spacing: -.04em;
      }

      .pw-display strong {
        display: block;
        margin-top: 8px;
        font-family: Inter, ui-sans-serif, system-ui, sans-serif;
        font-weight: 900;
        letter-spacing: -.06em;
      }

      .pw-subcopy {
        width: min(620px, 90%);
        margin: 22px auto 0;
        text-align: center;
        color: var(--muted);
        font-size: 14px;
        line-height: 1.6;
      }

      .pw-thumbrail {
        position: absolute;
        right: 28px;
        bottom: 22px;
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
        max-width: 320px;
        justify-content: flex-end;
      }

      .pw-thumb {
        width: 54px;
        height: 54px;
        background: linear-gradient(135deg, #ced8ce, #f0d6bc);
        border: 1px solid rgba(0,0,0,.08);
        overflow: hidden;
        display: flex;
        align-items: flex-end;
        padding: 6px;
        font-size: 8px;
        text-transform: uppercase;
        line-height: 1.2;
      }

      .pw-counter {
        position: absolute;
        right: 30px;
        bottom: 88px;
        font-size: 10px;
        letter-spacing: .18em;
        text-transform: uppercase;
        color: var(--muted);
      }

      .pw-collage {
        position: absolute;
        inset: 56px 140px 90px 140px;
        pointer-events: none;
      }

      .pw-polaroid {
        position: absolute;
        width: 140px;
        aspect-ratio: .76;
        background: white;
        box-shadow: 0 18px 40px rgba(0,0,0,.18);
        padding: 10px;
        display: flex;
        align-items: flex-end;
        overflow: hidden;
      }

      .pw-polaroid::before {
        content: "";
        position: absolute;
        inset: 10px 10px 34px 10px;
        background: var(--art, linear-gradient(135deg,#ece6d9,#d3e0d2));
      }

      .pw-polaroid span {
        position: relative;
        z-index: 1;
        font-size: 9px;
        letter-spacing: .12em;
        text-transform: uppercase;
        background: rgba(255,255,255,.75);
        padding: 4px 6px;
      }

      .pw-section {
        padding: 24px 44px 44px;
      }

      .pw-section-head {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 16px;
        margin-bottom: 22px;
      }

      .pw-section-title {
        font-family: Didot, "Bodoni MT", "Times New Roman", serif;
        font-size: clamp(34px, 5vw, 56px);
        line-height: .95;
        text-transform: uppercase;
        letter-spacing: -.05em;
        margin: 0;
      }

      .pw-section-copy {
        color: var(--muted);
        max-width: 460px;
        font-size: 14px;
        line-height: 1.65;
      }

      .pw-card-grid {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 18px;
      }

      .pw-panel {
        background: rgba(255,255,255,.42);
        border: 1px solid var(--line);
        padding: 22px;
      }

      .pw-panel-dark {
        background: #111;
        color: #f7f4ed;
        border: 1px solid rgba(255,255,255,.08);
      }

      .pw-panel-muted {
        background: var(--paper-2);
      }

      .pw-col-4 { grid-column: span 4; }
      .pw-col-5 { grid-column: span 5; }
      .pw-col-6 { grid-column: span 6; }
      .pw-col-7 { grid-column: span 7; }
      .pw-col-8 { grid-column: span 8; }
      .pw-col-12 { grid-column: span 12; }

      .pw-mini-label {
        font-size: 10px;
        letter-spacing: .18em;
        text-transform: uppercase;
        color: var(--muted);
        margin-bottom: 14px;
      }

      .pw-stat-value {
        font-family: Didot, "Bodoni MT", "Times New Roman", serif;
        font-size: clamp(30px, 4vw, 56px);
        line-height: .9;
        margin: 0 0 10px;
      }

      .pw-stat-copy {
        font-size: 14px;
        color: var(--muted);
        line-height: 1.6;
      }

      .pw-action-row,
      .pw-link-row {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }

      .pw-button,
      .pw-button-ghost,
      .pw-button-link {
        border: 1px solid var(--ink);
        min-height: 44px;
        padding: 0 18px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-size: 11px;
        letter-spacing: .15em;
        text-transform: uppercase;
        cursor: pointer;
        transition: transform .18s ease, background .18s ease, color .18s ease;
      }

      .pw-button:hover,
      .pw-button-ghost:hover,
      .pw-button-link:hover { transform: translateY(-1px); }

      .pw-button {
        background: var(--ink);
        color: var(--paper);
      }

      .pw-button-ghost,
      .pw-button-link {
        background: transparent;
        color: var(--ink);
      }

      .pw-button-link {
        border-color: var(--line-strong);
      }

      .pw-filterbar {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        margin: 18px 0 26px;
      }

      .pw-select-wrap {
        display: inline-flex;
        align-items: center;
        gap: 12px;
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: .15em;
      }

      .pw-select,
      .pw-input,
      .pw-textarea {
        width: 100%;
        background: rgba(255,255,255,.55);
        border: 1px solid var(--line-strong);
        padding: 13px 14px;
        outline: none;
        color: var(--ink);
      }

      .pw-select { min-width: 220px; }
      .pw-textarea { min-height: 120px; resize: vertical; }
      .pw-input:focus,
      .pw-select:focus,
      .pw-textarea:focus {
        border-color: var(--ink);
      }

      .pw-table {
        width: 100%;
        border-collapse: collapse;
      }
      .pw-table thead th {
        text-align: left;
        font-size: 10px;
        letter-spacing: .18em;
        text-transform: uppercase;
        color: var(--muted);
        border-bottom: 1px solid var(--line-strong);
        padding: 0 0 14px;
      }
      .pw-table tbody td {
        padding: 18px 0;
        border-bottom: 1px solid var(--line);
        vertical-align: top;
      }
      .pw-table tbody tr:last-child td { border-bottom: none; }

      .pw-table-title {
        font-family: Didot, "Bodoni MT", "Times New Roman", serif;
        font-size: 28px;
        line-height: 1;
        margin-bottom: 6px;
      }

      .pw-meta {
        color: var(--muted);
        font-size: 13px;
        line-height: 1.55;
      }

      .pw-pill {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 28px;
        padding: 0 12px;
        border: 1px solid var(--line-strong);
        background: rgba(255,255,255,.55);
        font-size: 10px;
        letter-spacing: .14em;
        text-transform: uppercase;
        gap: 8px;
      }

      .pw-pill-group {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .pw-empty,
      .pw-error,
      .pw-loading {
        padding: 26px;
        border: 1px solid var(--line);
        background: rgba(255,255,255,.45);
        color: var(--muted);
        line-height: 1.6;
      }

      .pw-error { background: var(--danger); color: #633; }

      .pw-info-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;
      }

      .pw-info-item {
        padding: 16px 0;
        border-bottom: 1px solid var(--line);
      }

      .pw-info-item strong {
        display: block;
        font-size: 10px;
        letter-spacing: .18em;
        text-transform: uppercase;
        color: var(--muted);
        margin-bottom: 8px;
      }

      .pw-info-item span {
        font-size: 16px;
        line-height: 1.55;
      }

      .pw-form {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;
      }

      .pw-field { display: flex; flex-direction: column; gap: 10px; }
      .pw-field-full { grid-column: 1 / -1; }

      .pw-field label {
        font-size: 10px;
        letter-spacing: .18em;
        text-transform: uppercase;
        color: var(--muted);
      }

      .pw-range {
        appearance: none;
        width: 100%;
        height: 2px;
        background: var(--ink);
        margin-top: 16px;
      }
      .pw-range::-webkit-slider-thumb {
        appearance: none;
        width: 18px;
        height: 18px;
        border-radius: 999px;
        background: var(--ink);
        cursor: pointer;
      }
      .pw-range::-moz-range-thumb {
        width: 18px;
        height: 18px;
        border-radius: 999px;
        background: var(--ink);
        border: none;
        cursor: pointer;
      }

      .pw-split {
        display: grid;
        grid-template-columns: 1.05fr .95fr;
        min-height: 540px;
        background: rgba(255,255,255,.35);
        border: 1px solid var(--line);
      }

      .pw-visual {
        position: relative;
        overflow: hidden;
        background:
          radial-gradient(circle at 14% 22%, rgba(255,93,93,.24), transparent 16%),
          radial-gradient(circle at 82% 18%, rgba(76,189,138,.26), transparent 20%),
          linear-gradient(135deg, #bcd5c4 0%, #e9d9bc 48%, #dad0e7 100%);
        min-height: 360px;
      }

      .pw-visual::before {
        content: "";
        position: absolute;
        width: 48%;
        height: 92%;
        left: 9%;
        top: 12%;
        background: linear-gradient(180deg, rgba(255,255,255,.3), rgba(255,255,255,0));
        border-radius: 46% 46% 16% 16% / 34% 34% 12% 12%;
        filter: blur(4px);
        opacity: .45;
      }

      .pw-visual::after {
        content: "";
        position: absolute;
        inset: auto 9% 12% auto;
        width: 160px;
        height: 220px;
        background: linear-gradient(180deg, #24416d, #14253d);
        transform: rotate(-9deg);
        box-shadow: 0 18px 38px rgba(0,0,0,.18);
      }

      .pw-visual-copy {
        position: absolute;
        inset: auto auto 22px 24px;
        max-width: 280px;
        color: #14251a;
      }

      .pw-visual-copy small,
      .pw-footnote {
        font-size: 10px;
        letter-spacing: .16em;
        text-transform: uppercase;
      }

      .pw-visual-copy h3 {
        font-family: Didot, "Bodoni MT", "Times New Roman", serif;
        font-size: 38px;
        margin: 10px 0 8px;
        line-height: .95;
      }

      .pw-visual-copy p,
      .pw-footcopy {
        font-size: 13px;
        line-height: 1.6;
        color: rgba(20,37,26,.78);
      }

      .pw-copy-wrap {
        padding: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .pw-editorial {
        font-family: Didot, "Bodoni MT", "Times New Roman", serif;
        font-size: clamp(42px, 6vw, 88px);
        line-height: .85;
        text-transform: uppercase;
        letter-spacing: -.05em;
        margin: 0;
      }

      .pw-editorial strong {
        font-family: Inter, ui-sans-serif, system-ui, sans-serif;
        display: inline-block;
        font-weight: 900;
      }

      .pw-detail-head {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 18px;
        margin-bottom: 22px;
      }

      .pw-title-xl {
        font-family: Didot, "Bodoni MT", "Times New Roman", serif;
        font-size: clamp(40px, 7vw, 76px);
        line-height: .9;
        margin: 0;
        text-transform: uppercase;
        letter-spacing: -.04em;
      }

      .pw-title-md {
        font-family: Didot, "Bodoni MT", "Times New Roman", serif;
        font-size: clamp(30px, 5vw, 54px);
        line-height: .95;
        margin: 0;
        text-transform: uppercase;
        letter-spacing: -.04em;
      }

      .pw-spread {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 20px;
      }

      .pw-divider {
        border: none;
        border-top: 1px solid var(--line-strong);
        margin: 24px 0;
      }

      .pw-mono {
        font-size: 11px;
        letter-spacing: .15em;
        text-transform: uppercase;
        color: var(--muted);
      }

      @media (max-width: 980px) {
        .pw-col-4, .pw-col-5, .pw-col-6, .pw-col-7, .pw-col-8 { grid-column: span 12; }
        .pw-split { grid-template-columns: 1fr; }
        .pw-form { grid-template-columns: 1fr; }
        .pw-info-grid { grid-template-columns: 1fr; }
        .pw-collage {
          inset: 86px 30px 124px 30px;
          opacity: .85;
          transform: scale(.78);
          transform-origin: center;
        }
        .pw-thumbrail {
          position: static;
          margin-top: 26px;
          justify-content: center;
          max-width: none;
        }
        .pw-counter {
          position: static;
          text-align: center;
          margin-top: 16px;
        }
      }

      @media (max-width: 720px) {
        .pw-page { padding: 12px; }
        .pw-canvas { width: min(100vw - 24px, 1240px); min-height: calc(100vh - 24px); }
        .pw-topbar, .pw-hero, .pw-section { padding-left: 18px; padding-right: 18px; }
        .pw-section-head,
        .pw-filterbar,
        .pw-detail-head,
        .pw-spread { flex-direction: column; align-items: flex-start; }
        .pw-table thead { display: none; }
        .pw-table, .pw-table tbody, .pw-table tr, .pw-table td { display: block; width: 100%; }
        .pw-table tbody tr { padding: 12px 0; }
        .pw-table tbody td { padding: 8px 0; }
        .pw-table tbody td::before {
          content: attr(data-label);
          display: block;
          margin-bottom: 4px;
          font-size: 10px;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: var(--muted);
        }
      }
    `}</style>
  );
}

export function AppFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PawneeTheme />
      <div className="pw-page">
        <main className="pw-canvas">{children}</main>
      </div>
    </>
  );
}

export function Topbar() {
  return (
    <div className="pw-topbar">
      <span>(Menu)</span>
      <span className="pw-monogram">P</span>
      <span>(Work)</span>
    </div>
  );
}

export function HeroLanding({ creaturesCount = 0 }: { creaturesCount?: number }) {
  const cards = [
    { left: "8%", top: "23%", rotate: "-14deg", art: "linear-gradient(135deg,#f4d477,#67c2da)", label: "Case 01" },
    { left: "19%", top: "8%", rotate: "9deg", art: "linear-gradient(135deg,#d6ead3,#8eb48c)", label: "Field log" },
    { left: "33%", top: "18%", rotate: "-7deg", art: "linear-gradient(135deg,#cfd7ec,#f0cab9)", label: "Archive" },
    { left: "47%", top: "5%", rotate: "10deg", art: "linear-gradient(135deg,#efd0c8,#aa876f)", label: "Signal" },
    { left: "57%", top: "28%", rotate: "-13deg", art: "linear-gradient(135deg,#dfe4ce,#8fa573)", label: "Proof" },
    { left: "39%", top: "34%", rotate: "7deg", art: "linear-gradient(135deg,#101010,#555)", label: "Research" },
    { left: "23%", top: "35%", rotate: "4deg", art: "linear-gradient(135deg,#eab15d,#c75653)", label: "Report" },
    { left: "68%", top: "11%", rotate: "14deg", art: "linear-gradient(135deg,#b8e1dd,#f2dcb2)", label: "Specimen" },
  ];

  const thumbs = ["Míticas", "Elementales", "Mecánicas", "Espectrales"];

  return (
    <section className="pw-hero">
      <div className="pw-hero-grid">
        <div className="pw-collage" aria-hidden="true">
          {cards.map((card, index) => (
            <div
              key={index}
              className="pw-polaroid"
              style={{ left: card.left, top: card.top, transform: `rotate(${card.rotate})`, ["--art" as any]: card.art }}
            >
              <span>{card.label}</span>
            </div>
          ))}
        </div>

        <div>
          <div className="pw-kicker">Pawnee Cryptid Bureau</div>
          <h1 className="pw-display">
            We document
            <strong>the unknown</strong>
          </h1>
          <p className="pw-subcopy">
            Una interfaz editorial, limpia y con look premium para que tu frontend ya no se vea genérico.
            Mantiene el CRUD de criaturas y avistamientos, pero con una dirección de arte inspirada en la referencia.
          </p>
        </div>

        <div className="pw-counter">{String(Math.max(creaturesCount, 1)).padStart(2, "0")} / 04</div>
        <div className="pw-thumbrail">
          {thumbs.map((thumb) => (
            <div className="pw-thumb" key={thumb}>
              <span>{thumb}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionIntro({ title, copy, actions }: { title: string; copy: string; actions?: React.ReactNode }) {
  return (
    <div className="pw-section-head">
      <div>
        <h2 className="pw-section-title">{title}</h2>
      </div>
      <div>
        <p className="pw-section-copy">{copy}</p>
        {actions ? <div className="pw-action-row">{actions}</div> : null}
      </div>
    </div>
  );
}

export function ActionLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link className="pw-button-link" to={to}>
      {children}
    </Link>
  );
}

export function PrimaryLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link className="pw-button" to={to}>
      {children}
    </Link>
  );
}

export function GhostButton({ onClick, children, type = "button", disabled = false }: { onClick?: () => void; children: React.ReactNode; type?: "button" | "submit"; disabled?: boolean; }) {
  return (
    <button className="pw-button-ghost" onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  );
}

export function PrimaryButton({ children, type = "button", disabled = false }: { children: React.ReactNode; type?: "button" | "submit"; disabled?: boolean }) {
  return (
    <button className="pw-button" type={type} disabled={disabled}>
      {children}
    </button>
  );
}

export function MetricPanel({ label, value, copy, dark = false }: { label: string; value: string | number; copy: string; dark?: boolean }) {
  return (
    <div className={`pw-panel ${dark ? "pw-panel-dark" : ""}`}>
      <div className="pw-mini-label">{label}</div>
      <p className="pw-stat-value">{value}</p>
      <p className="pw-stat-copy">{copy}</p>
    </div>
  );
}

export function LoadingBlock({ children = "Cargando..." }: { children?: React.ReactNode }) {
  return <div className="pw-loading">{children}</div>;
}

export function ErrorBlock({ children }: { children: React.ReactNode }) {
  return <div className="pw-error">{children}</div>;
}

export function EmptyBlock({ children }: { children: React.ReactNode }) {
  return <div className="pw-empty">{children}</div>;
}

export function Pill({ children }: { children: React.ReactNode }) {
  return <span className="pw-pill">{children}</span>;
}

export function SplitFeature({
  eyebrow,
  title,
  highlight,
  copy,
  sideNote,
  children,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  copy: string;
  sideNote?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="pw-split">
      <div className="pw-visual">
        <div className="pw-visual-copy">
          <small>{eyebrow}</small>
          <h3>{highlight}</h3>
          <p>{copy}</p>
        </div>
      </div>
      <div className="pw-copy-wrap">
        <div className="pw-mini-label">Our Evolution</div>
        <h2 className="pw-editorial">
          {title} <strong>{highlight}</strong>
        </h2>
        {sideNote ? <p className="pw-section-copy" style={{ marginTop: 18 }}>{sideNote}</p> : null}
        {children ? <div style={{ marginTop: 24 }}>{children}</div> : null}
      </div>
    </div>
  );
}

export function MetaTable({ children }: { children: React.ReactNode }) {
  return <table className="pw-table">{children}</table>;
}

export function Field({ label, htmlFor, children, full = false }: { label: string; htmlFor: string; children: React.ReactNode; full?: boolean }) {
  return (
    <div className={`pw-field ${full ? "pw-field-full" : ""}`}>
      <label htmlFor={htmlFor}>{label}</label>
      {children}
    </div>
  );
}

export function formatTipo(value: string) {
  const map: Record<string, string> = {
    mitica: "Mítica",
    elemental: "Elemental",
    mecanica: "Mecánica",
    espectral: "Espectral",
    activa: "Activa",
    en_investigacion: "En investigación",
    descartada: "Descartada",
  };
  return map[value] ?? value;
}
