import React from "react";
import { Link } from "react-router-dom";

/* =========================================================
   ATLAS DE CRIATURAS
   Sistema visual general de la aplicación
   ========================================================= */

export function TraceWildFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TraceWildTheme />

      <div className="tw-page">
        <main className="tw-shell">
          {children}
        </main>
      </div>
    </>
  );
}

/* =========================================================
   ESTILOS
   ========================================================= */

function TraceWildTheme() {
  return (
    <style>{`
      :root {
        --tw-bg: #eee5d7;
        --tw-paper: #fffaf1;
        --tw-paper-2: #f7efe2;
        --tw-paper-3: #eee2cf;

        --tw-ink: #302820;
        --tw-muted: #776b60;

        --tw-line: rgba(65, 48, 34, 0.17);
        --tw-line-dark: rgba(65, 48, 34, 0.35);

        --tw-green: #9fbf79;
        --tw-green-light: #dce8c4;

        --tw-orange: #e99848;
        --tw-yellow: #efc46e;

        --tw-coral: #df8977;
        --tw-coral-light: #f2d3ca;

        --tw-blue: #7faeb3;
        --tw-blue-light: #d8e7e7;

        --tw-danger: #a7554c;

        --tw-radius: 30px;

        --tw-shadow:
          0 24px 70px rgba(73, 55, 36, 0.10);
      }

      * {
        box-sizing: border-box;
      }

      html,
      body,
      #root {
        min-height: 100%;
      }

      body {
        margin: 0;
        color: var(--tw-ink);
        background: var(--tw-bg);
        font-family:
          Inter,
          ui-sans-serif,
          system-ui,
          -apple-system,
          BlinkMacSystemFont,
          "Segoe UI",
          sans-serif;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      button,
      input,
      select,
      textarea {
        font: inherit;
      }

      button {
        color: inherit;
      }

      /* =====================================================
         FONDO GENERAL
         ===================================================== */

      .tw-page {
        min-height: 100vh;
        padding: 24px;

        background:
          linear-gradient(
            rgba(238, 229, 215, .92),
            rgba(238, 229, 215, .92)
          ),
          url("/images/patron-atlas.png");

        background-size:
          auto,
          620px;

        background-repeat:
          repeat,
          repeat;
      }

      .tw-shell {
        width: min(1280px, calc(100vw - 48px));
        min-height: calc(100vh - 48px);

        margin: 0 auto;

        overflow: hidden;

        border: 1px solid var(--tw-line);
        border-radius: 38px;

        background: var(--tw-paper);

        box-shadow: var(--tw-shadow);
      }

      /* =====================================================
         NAV
         ===================================================== */

      .tw-nav {
        display: flex;
        align-items: center;
        justify-content: space-between;

        gap: 20px;

        padding: 22px 30px;
      }

      .tw-brand {
        display: flex;
        align-items: center;
        gap: 12px;

        min-width: 240px;
      }

      .tw-brand-badge {
        width: 50px;
        height: 50px;

        display: grid;
        place-items: center;

        flex-shrink: 0;

        border: 1px solid var(--tw-line-dark);
        border-radius: 16px;

        background:
          linear-gradient(
            135deg,
            var(--tw-yellow),
            var(--tw-green)
          );

        font-size: 22px;
      }

      .tw-brand-copy {
        display: flex;
        flex-direction: column;
        gap: 3px;
      }

      .tw-brand-copy strong {
        font-family:
          Georgia,
          "Times New Roman",
          serif;

        font-size: 18px;
        line-height: 1;

        letter-spacing: -.03em;
      }

      .tw-brand-copy span {
        color: var(--tw-muted);

        font-size: 10px;
        line-height: 1.3;
      }

      .tw-nav-links {
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 8px;

        flex-wrap: wrap;
      }

      .tw-nav-link,
      .tw-nav-cta {
        min-height: 40px;

        padding: 0 15px;

        display: inline-flex;
        align-items: center;
        justify-content: center;

        border: 1px solid var(--tw-line);
        border-radius: 999px;

        background: rgba(255, 250, 241, .85);

        font-size: 12px;
        font-weight: 700;

        transition:
          transform .18s ease,
          background .18s ease;
      }

      .tw-nav-link:hover {
        transform: translateY(-1px);
        background: var(--tw-green-light);
      }

      .tw-nav-cta {
        border-color: var(--tw-line-dark);
        background: var(--tw-green);

        white-space: nowrap;
      }

      /* =====================================================
         HERO
         ===================================================== */

      .tw-hero {
        padding: 0 28px 32px;
      }

      .tw-hero-box {
        position: relative;

        min-height: 610px;

        overflow: hidden;

        display: flex;
        align-items: center;

        padding: 54px;

        border: 1px solid var(--tw-line);
        border-radius: 34px;

        background-image:
          url("/images/hero-atlas.png");

        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }

      .tw-hero-box::after {
        content: "";

        position: absolute;
        inset: 0;

        pointer-events: none;

        background:
          linear-gradient(
            90deg,
            rgba(255, 248, 237, .94) 0%,
            rgba(255, 248, 237, .82) 28%,
            rgba(255, 248, 237, .30) 52%,
            rgba(255, 248, 237, 0) 72%
          );
      }

      .tw-hero-inner {
        position: relative;
        z-index: 2;

        width: min(580px, 100%);
      }

      .tw-pill-soft {
        width: fit-content;

        min-height: 36px;

        padding: 0 14px;

        display: inline-flex;
        align-items: center;

        border: 1px solid var(--tw-line);
        border-radius: 999px;

        background: rgba(255, 250, 241, .85);
        backdrop-filter: blur(8px);

        color: var(--tw-muted);

        font-size: 11px;
        font-weight: 800;

        text-transform: uppercase;
        letter-spacing: .08em;
      }

      .tw-hero-title {
        max-width: 8ch;

        margin: 20px 0 0;

        font-family:
          Georgia,
          "Times New Roman",
          serif;

        font-size: clamp(58px, 7.6vw, 106px);
        font-weight: 700;

        line-height: .83;
        letter-spacing: -.065em;
      }

      .tw-hero-title span {
        display: block;
      }

      .tw-hero-copy {
        max-width: 500px;

        margin: 24px 0 0;

        color: var(--tw-muted);

        font-size: 15px;
        line-height: 1.65;
      }

      .tw-hero-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;

        margin-top: 24px;
      }

      /* =====================================================
         CONTENIDO
         ===================================================== */

      .tw-content {
        padding: 0 28px 38px;
      }

      .tw-section-header {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;

        gap: 28px;

        margin-bottom: 24px;
      }

      .tw-eyebrow {
        margin-bottom: 9px;

        color: var(--tw-coral);

        font-size: 11px;
        font-weight: 900;

        text-transform: uppercase;
        letter-spacing: .12em;
      }

      .tw-section-title {
        margin: 0;

        font-family:
          Georgia,
          "Times New Roman",
          serif;

        font-size: clamp(38px, 5vw, 62px);

        line-height: .92;
        letter-spacing: -.055em;
      }

      .tw-section-copy {
        width: min(100%, 500px);

        margin: 0;

        color: var(--tw-muted);

        font-size: 14px;
        line-height: 1.7;
      }

      /* =====================================================
         ESTADÍSTICAS
         ===================================================== */

      .tw-stats {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));

        gap: 14px;

        margin: 26px 0;
      }

      .tw-stat {
        position: relative;

        min-height: 185px;

        overflow: hidden;

        padding: 24px;

        border: 1px solid var(--tw-line);
        border-radius: 26px;

        background: var(--tw-paper-2);
      }

      .tw-stat::after {
        content: "✦";

        position: absolute;

        right: 18px;
        top: 18px;

        color: var(--tw-orange);

        font-size: 28px;

        opacity: .8;
      }

      .tw-stat.accent {
        background: var(--tw-green-light);
      }

      .tw-stat.accent::after {
        content: "❋";
        color: #729459;
      }

      .tw-stat.dark {
        background: var(--tw-blue-light);
      }

      .tw-stat.dark::after {
        content: "◉";
        color: #628a91;
      }

      .tw-stat-label {
        color: var(--tw-muted);

        font-size: 11px;
        font-weight: 900;

        text-transform: uppercase;
        letter-spacing: .1em;
      }

      .tw-stat-value {
        margin: 18px 0 8px;

        font-family:
          Georgia,
          "Times New Roman",
          serif;

        font-size: clamp(42px, 5vw, 62px);

        line-height: .9;
        letter-spacing: -.05em;
      }

      .tw-stat-copy {
        max-width: 280px;

        color: var(--tw-muted);

        font-size: 13px;
        line-height: 1.6;
      }

      /* =====================================================
         FILTROS / CHIPS
         ===================================================== */

      .tw-filter-row {
        display: flex;
        align-items: center;
        justify-content: space-between;

        gap: 16px;

        flex-wrap: wrap;

        margin: 12px 0 20px;
      }

      .tw-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .tw-chip {
        min-height: 39px;

        padding: 0 14px;

        display: inline-flex;
        align-items: center;
        justify-content: center;

        border: 1px solid var(--tw-line);
        border-radius: 999px;

        background: var(--tw-paper);

        color: var(--tw-muted);

        font-size: 12px;
        font-weight: 750;

        cursor: pointer;

        transition:
          transform .18s ease,
          background .18s ease;
      }

      .tw-chip:hover {
        transform: translateY(-1px);
        background: var(--tw-paper-3);
      }

      .tw-chip.active {
        border-color: #b7ca95;
        background: var(--tw-green-light);

        color: var(--tw-ink);
      }

      /* =====================================================
         TABLAS
         ===================================================== */

      .tw-table-wrap {
        overflow: hidden;

        border: 1px solid var(--tw-line);
        border-radius: 28px;

        background: var(--tw-paper);
      }

      .tw-table {
        width: 100%;

        border-collapse: collapse;
      }

      .tw-table thead {
        background: var(--tw-paper-3);
      }

      .tw-table th {
        padding: 17px 20px;

        text-align: left;

        color: var(--tw-muted);

        font-size: 10px;
        font-weight: 900;

        text-transform: uppercase;
        letter-spacing: .11em;
      }

      .tw-table td {
        padding: 18px 20px;

        border-top: 1px solid var(--tw-line);

        vertical-align: middle;

        font-size: 14px;
      }

      .tw-table tbody tr {
        transition: background .18s ease;
      }

      .tw-table tbody tr:hover {
        background: rgba(247, 239, 226, .65);
      }

      .tw-species-name {
        font-family:
          Georgia,
          "Times New Roman",
          serif;

        font-size: 21px;
        font-weight: 700;

        letter-spacing: -.03em;
      }

      .tw-meta {
        margin-top: 5px;

        color: var(--tw-muted);

        font-size: 11px;
      }

      /* =====================================================
         NIVEL DE AMENAZA
         ===================================================== */

      .tw-level {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .tw-level span {
        width: 11px;
        height: 11px;

        border: 1px solid var(--tw-line);
        border-radius: 999px;

        background: #e8dfd2;
      }

      .tw-level span.on {
        border-color: transparent;
        background: var(--tw-coral);
      }

      /* =====================================================
         BOTONES
         ===================================================== */

      .tw-btn-primary,
      .tw-btn-dark,
      .tw-btn-danger,
      .tw-dark {
        min-height: 44px;

        padding: 0 17px;

        display: inline-flex;
        align-items: center;
        justify-content: center;

        gap: 8px;

        border-radius: 999px;

        font-size: 12px;
        font-weight: 800;

        cursor: pointer;

        transition:
          transform .18s ease,
          box-shadow .18s ease;
      }

      .tw-btn-primary {
        border: 1px solid #788f58;

        background: var(--tw-green);

        color: var(--tw-ink);
      }

      .tw-btn-dark,
      .tw-dark {
        border: 1px solid var(--tw-line-dark);

        background: var(--tw-paper);

        color: var(--tw-ink);
      }

      .tw-btn-danger {
        border: 1px solid #bc756b;

        background: var(--tw-coral-light);

        color: var(--tw-danger);
      }

      .tw-btn-primary:hover,
      .tw-btn-dark:hover,
      .tw-btn-danger:hover,
      .tw-dark:hover {
        transform: translateY(-1px);
      }

      /* =====================================================
         LOADING / ERROR / EMPTY
         ===================================================== */

      .tw-feedback {
        padding: 28px;

        border: 1px dashed var(--tw-line-dark);
        border-radius: 24px;

        background: var(--tw-paper-2);

        color: var(--tw-muted);

        font-size: 14px;
        line-height: 1.65;
      }

      .tw-feedback.error {
        border-style: solid;
        border-color: #ddb0a8;

        background: #f8e5e1;

        color: #854c43;
      }

      /* =====================================================
         DETALLE DE CRIATURA
         ===================================================== */

      .tw-detail-hero {
        display: grid;
        grid-template-columns: minmax(340px, .9fr) 1.1fr;

        gap: 18px;
      }

      .tw-specimen-card {
        position: relative;

        min-height: 500px;

        overflow: hidden;

        padding: 28px;

        border: 1px solid var(--tw-line);
        border-radius: 30px;

        color: var(--tw-paper);

        background:
          linear-gradient(
            180deg,
            rgba(47, 40, 32, .05),
            rgba(47, 40, 32, .42)
          ),
          url("/images/decor-detalle.png");

        background-size: cover;
        background-position: center;
      }

      .tw-grid-bg {
        background-image:
          linear-gradient(
            180deg,
            rgba(47, 40, 32, .03),
            rgba(47, 40, 32, .38)
          ),
          url("/images/decor-detalle.png");
      }

      .tw-specimen-card .tw-eyebrow {
        color: rgba(255, 255, 255, .88);
      }

      .tw-specimen-mark {
        position: absolute;

        right: 24px;
        bottom: 24px;

        width: 74px;
        height: 74px;

        display: grid;
        place-items: center;

        border: 1px solid rgba(255,255,255,.55);
        border-radius: 999px;

        background: rgba(255, 250, 241, .75);

        backdrop-filter: blur(8px);

        color: var(--tw-ink);

        font-family:
          Georgia,
          "Times New Roman",
          serif;

        font-size: 38px;
      }

      .tw-detail-card {
        padding: 30px;

        border: 1px solid var(--tw-line);
        border-radius: 30px;

        background: var(--tw-paper);
      }

      .tw-detail-title {
        margin: 9px 0 0;

        font-family:
          Georgia,
          "Times New Roman",
          serif;

        font-size: clamp(48px, 6vw, 80px);

        line-height: .88;
        letter-spacing: -.06em;
      }

      .tw-detail-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));

        gap: 12px;

        margin-top: 26px;
      }

      .tw-detail-item {
        padding: 17px;

        border: 1px solid var(--tw-line);
        border-radius: 20px;

        background: var(--tw-paper-2);
      }

      .tw-detail-item strong {
        display: block;

        margin-bottom: 8px;

        color: var(--tw-muted);

        font-size: 10px;
        font-weight: 900;

        text-transform: uppercase;
        letter-spacing: .11em;
      }

      .tw-detail-item span {
        font-size: 14px;
        line-height: 1.6;
      }

      /* =====================================================
         FORMULARIOS
         ===================================================== */

      .tw-form-card {
        position: relative;

        overflow: hidden;

        padding: 30px;

        border: 1px solid var(--tw-line);
        border-radius: 30px;

        background:
          linear-gradient(
            90deg,
            rgba(255,250,241,.98) 0%,
            rgba(255,250,241,.95) 58%,
            rgba(255,250,241,.72) 100%
          ),
          url("/images/decor-formulario.png");

        background-size: cover;
        background-position: center;
      }

      .tw-form-grid {
        position: relative;
        z-index: 2;

        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));

        gap: 16px;
      }

      .tw-field {
        display: flex;
        flex-direction: column;

        gap: 9px;
      }

      .tw-field.full {
        grid-column: 1 / -1;
      }

      .tw-field label {
        color: var(--tw-muted);

        font-size: 10px;
        font-weight: 900;

        text-transform: uppercase;
        letter-spacing: .1em;
      }

      .tw-input,
      .tw-select,
      .tw-textarea {
        width: 100%;

        border: 1px solid var(--tw-line-dark);
        border-radius: 15px;

        outline: none;

        background: rgba(255,250,241,.92);

        color: var(--tw-ink);
      }

      .tw-input,
      .tw-select {
        min-height: 51px;

        padding: 0 14px;
      }

      .tw-textarea {
        min-height: 140px;

        padding: 14px;

        resize: vertical;
      }

      .tw-input:focus,
      .tw-select:focus,
      .tw-textarea:focus {
        border-color: #819d62;

        box-shadow:
          0 0 0 3px rgba(159, 191, 121, .18);
      }

      /* =====================================================
         BANNERS ILUSTRADOS
         ===================================================== */

      .tw-illustration-banner {
        min-height: 300px;

        margin-bottom: 30px;

        overflow: hidden;

        border: 1px solid var(--tw-line);
        border-radius: 30px;

        background-image:
          url("/images/decor-avistamientos.png");

        background-size: cover;
        background-position: center;
      }

      .tw-notes-banner {
        min-height: 260px;

        margin: 30px 0;

        border: 1px solid var(--tw-line);
        border-radius: 30px;

        background-image:
          url("/images/decor-notas.png");

        background-size: cover;
        background-position: center;
      }

      .tw-species-decoration {
        min-height: 260px;

        overflow: hidden;

        border: 1px solid var(--tw-line);
        border-radius: 30px;

        background-image:
          url("/images/decor-especies.png");

        background-size: cover;
        background-position: center;
      }

      /* =====================================================
         STICKERS DECORATIVOS
         ===================================================== */

      .tw-sticker-sheet {
        display: block;

        width: 100%;
        max-width: 420px;

        object-fit: contain;

        pointer-events: none;
      }

      /* =====================================================
         RESPONSIVE
         ===================================================== */

      @media (max-width: 1020px) {
        .tw-nav {
          flex-wrap: wrap;
        }

        .tw-brand {
          min-width: auto;
        }

        .tw-nav-links {
          order: 3;
          width: 100%;
          justify-content: flex-start;
        }

        .tw-stats {
          grid-template-columns: 1fr;
        }

        .tw-detail-hero {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 760px) {
        .tw-page {
          padding: 10px;
        }

        .tw-shell {
          width: calc(100vw - 20px);

          border-radius: 24px;
        }

        .tw-nav {
          padding: 18px;
        }

        .tw-nav-cta {
          display: none;
        }

        .tw-hero {
          padding: 0 16px 24px;
        }

        .tw-hero-box {
          min-height: 640px;

          padding: 28px 22px;

          align-items: flex-start;

          background-position: 65% center;
        }

        .tw-hero-box::after {
          background:
            linear-gradient(
              180deg,
              rgba(255,248,237,.96) 0%,
              rgba(255,248,237,.86) 50%,
              rgba(255,248,237,.12) 78%,
              rgba(255,248,237,0) 100%
            );
        }

        .tw-hero-title {
          font-size: clamp(52px, 17vw, 78px);
        }

        .tw-content {
          padding: 0 16px 26px;
        }

        .tw-section-header {
          flex-direction: column;
          align-items: flex-start;
        }

        .tw-detail-grid {
          grid-template-columns: 1fr;
        }

        .tw-form-grid {
          grid-template-columns: 1fr;
        }

        .tw-field.full {
          grid-column: auto;
        }

        .tw-table thead {
          display: none;
        }

        .tw-table,
        .tw-table tbody,
        .tw-table tr,
        .tw-table td {
          display: block;
          width: 100%;
        }

        .tw-table tr {
          padding: 12px 0;
        }

        .tw-table td {
          padding: 9px 16px;

          border-top: none;
        }

        .tw-table tr + tr {
          border-top: 1px solid var(--tw-line);
        }

        .tw-table td::before {
          content: attr(data-label);

          display: block;

          margin-bottom: 5px;

          color: var(--tw-muted);

          font-size: 9px;
          font-weight: 900;

          text-transform: uppercase;
          letter-spacing: .1em;
        }

        .tw-specimen-card {
          min-height: 420px;
        }

        .tw-form-card {
          background:
            linear-gradient(
              rgba(255,250,241,.91),
              rgba(255,250,241,.91)
            ),
            url("/images/decor-formulario.png");

          background-size: cover;
        }
      }
        /* =====================================================
   RESPONSIVE MÓVIL
   No modifica desktop
   ===================================================== */

@media (max-width: 768px) {

  /* =========================
     BASE
     ========================= */

  body {
    overflow-x: hidden;
  }

  .tw-page {
    width: 100%;
    min-height: 100vh;

    padding: 8px;

    background-size:
      auto,
      380px;
  }

  .tw-shell {
    width: 100%;
    min-height: calc(100vh - 16px);

    margin: 0;

    border-radius: 22px;
  }


  /* =========================
     NAV
     ========================= */

  .tw-nav {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    gap: 14px;

    padding: 16px;
  }

  .tw-brand {
    width: 100%;
    min-width: 0;
  }

  .tw-brand-badge {
    width: 44px;
    height: 44px;

    border-radius: 14px;

    font-size: 19px;
  }

  .tw-brand-copy {
    min-width: 0;
  }

  .tw-brand-copy strong {
    font-size: 17px;
  }

  .tw-brand-copy span {
    max-width: 230px;

    font-size: 9px;
    line-height: 1.3;
  }

  .tw-nav-links {
    width: calc(100% + 32px);

    margin-left: -16px;

    padding: 0 16px 4px;

    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;

    gap: 8px;

    overflow-x: auto;
    overflow-y: hidden;

    scrollbar-width: none;

    -webkit-overflow-scrolling: touch;
  }

  .tw-nav-links::-webkit-scrollbar {
    display: none;
  }

  .tw-nav-link {
    flex: 0 0 auto;

    min-height: 37px;

    padding: 0 13px;

    white-space: nowrap;

    font-size: 11px;
  }

  .tw-nav-cta {
    display: none;
  }


  /* =========================
     HERO
     ========================= */

  .tw-hero {
    padding: 0 12px 22px;
  }

  .tw-hero-box {
    min-height: 570px;

    padding: 24px 20px;

    align-items: flex-start;

    border-radius: 24px;

    background-position: 66% center;
  }

  .tw-hero-box::after {
    background:
      linear-gradient(
        180deg,
        rgba(255, 248, 237, .98) 0%,
        rgba(255, 248, 237, .94) 37%,
        rgba(255, 248, 237, .62) 57%,
        rgba(255, 248, 237, .10) 82%,
        rgba(255, 248, 237, 0) 100%
      );
  }

  .tw-hero-inner {
    width: 100%;
    max-width: 100%;
  }

  .tw-pill-soft {
    min-height: 32px;

    padding: 0 11px;

    font-size: 9px;
  }

  .tw-hero-title {
    max-width: 100%;

    margin-top: 16px;

    font-size: clamp(51px, 16vw, 72px);

    line-height: .86;
    letter-spacing: -.06em;
  }

  .tw-hero-copy {
    max-width: 310px;

    margin-top: 17px;

    font-size: 13px;
    line-height: 1.55;
  }

  .tw-hero-actions {
    width: 100%;

    margin-top: 18px;

    display: flex;
    flex-direction: column;

    gap: 8px;
  }

  .tw-hero-actions .tw-btn-primary,
  .tw-hero-actions .tw-dark {
    width: 100%;
  }


  /* =========================
     CONTENIDO GENERAL
     ========================= */

  .tw-content {
    padding: 0 14px 24px;
  }

  .tw-section-header {
    margin-bottom: 19px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 12px;
  }

  .tw-eyebrow {
    margin-bottom: 7px;

    font-size: 9px;
  }

  .tw-section-title {
    font-size: clamp(35px, 11vw, 48px);

    line-height: .91;
  }

  .tw-section-copy {
    width: 100%;
    max-width: 100%;

    font-size: 13px;
    line-height: 1.6;
  }

  .tw-section-header .tw-btn-primary {
    width: 100%;
  }


  /* =========================
     ESTADÍSTICAS
     ========================= */

  .tw-stats {
    grid-template-columns: 1fr;

    gap: 10px;

    margin: 20px 0;
  }

  .tw-stat {
    min-height: auto;

    padding: 19px;

    border-radius: 20px;
  }

  .tw-stat::after {
    right: 16px;
    top: 14px;

    font-size: 23px;
  }

  .tw-stat-label {
    font-size: 9px;
  }

  .tw-stat-value {
    margin: 13px 0 6px;

    font-size: 44px;
  }

  .tw-stat-copy {
    max-width: 85%;

    font-size: 12px;
  }


  /* =========================
     FILTROS
     ========================= */

  .tw-filter-row {
    width: 100%;

    margin: 8px 0 17px;

    display: flex;
    flex-direction: column;
    align-items: stretch;

    gap: 10px;
  }

  .tw-chips {
    width: calc(100% + 28px);

    margin-left: -14px;

    padding: 0 14px 4px;

    display: flex;
    flex-wrap: nowrap;

    gap: 7px;

    overflow-x: auto;

    scrollbar-width: none;

    -webkit-overflow-scrolling: touch;
  }

  .tw-chips::-webkit-scrollbar {
    display: none;
  }

  .tw-chip {
    flex: 0 0 auto;

    min-height: 36px;

    padding: 0 12px;

    white-space: nowrap;

    font-size: 11px;
  }


  /* =========================
     TABLAS → CARDS MÓVILES
     ========================= */

  .tw-table-wrap {
    border-radius: 22px;

    overflow: visible;

    border: none;

    background: transparent;
  }

  .tw-table {
    display: block;

    width: 100%;
  }

  .tw-table thead {
    display: none;
  }

  .tw-table tbody {
    display: grid;

    gap: 10px;
  }

  .tw-table tr {
    display: block;

    padding: 15px;

    border: 1px solid var(--tw-line);
    border-radius: 20px;

    background: var(--tw-paper);
  }

  .tw-table tbody tr:hover {
    background: var(--tw-paper);
  }

  .tw-table td {
    width: 100%;

    display: block;

    padding: 9px 0;

    border: none;
  }

  .tw-table td + td {
    border-top: 1px solid var(--tw-line);
  }

  .tw-table td::before {
    content: attr(data-label);

    display: block;

    margin-bottom: 6px;

    color: var(--tw-muted);

    font-size: 8px;
    font-weight: 900;

    text-transform: uppercase;
    letter-spacing: .12em;
  }

  .tw-species-name {
    font-size: 22px;
  }

  .tw-meta {
    font-size: 10px;
  }

  .tw-level {
    gap: 3px;
  }

  .tw-level span {
    width: 10px;
    height: 10px;
  }


  /* =========================
     BOTONES
     ========================= */

  .tw-btn-primary,
  .tw-btn-dark,
  .tw-btn-danger,
  .tw-dark {
    min-height: 42px;

    padding: 0 14px;

    font-size: 11px;
  }

  .tw-table td:last-child > div {
    width: 100%;
  }

  .tw-table td:last-child .tw-dark,
  .tw-table td:last-child .tw-btn-danger,
  .tw-table td:last-child .tw-chip {
    flex: 1;
  }


  /* =========================
     DETALLE DE CRIATURA
     ========================= */

  .tw-detail-hero {
    grid-template-columns: 1fr;

    gap: 12px;
  }

  .tw-specimen-card {
    min-height: 430px;

    padding: 20px;

    border-radius: 23px;

    background-position: center;
  }

  .tw-specimen-card > div:nth-child(2) {
    margin-top: 20px !important;
  }

  .tw-specimen-card > div:nth-child(2) > div:last-child {
    font-size: 30px !important;
  }

  .tw-specimen-mark {
    right: 17px;
    bottom: 17px;

    width: 62px;
    height: 62px;

    font-size: 31px;
  }

  .tw-detail-card {
    padding: 21px 18px;

    border-radius: 23px;
  }

  .tw-detail-title {
    font-size: clamp(43px, 14vw, 65px);
  }

  .tw-detail-grid {
    grid-template-columns: 1fr;

    gap: 9px;

    margin-top: 20px;
  }

  .tw-detail-item {
    padding: 14px;

    border-radius: 16px;
  }

  .tw-detail-item strong {
    font-size: 9px;
  }

  .tw-detail-item span {
    font-size: 13px;
  }


  /* =========================
     FORMULARIOS
     ========================= */

  .tw-form-card {
    padding: 18px;

    border-radius: 23px;

    background:
      linear-gradient(
        rgba(255,250,241,.92),
        rgba(255,250,241,.92)
      ),
      url("/images/decor-formulario.png");

    background-size: cover;
    background-position: center;
  }

  .tw-form-grid {
    grid-template-columns: 1fr;

    gap: 14px;
  }

  .tw-field,
  .tw-field.full {
    grid-column: auto;

    width: 100%;
  }

  .tw-input,
  .tw-select {
    min-height: 49px;

    font-size: 16px;
  }

  .tw-textarea {
    min-height: 130px;

    font-size: 16px;
  }

  .tw-form-grid .tw-field:last-child > div {
    width: 100%;

    display: flex !important;
    flex-direction: column;

    gap: 8px !important;
  }

  .tw-form-grid .tw-field:last-child button {
    width: 100%;
  }


  /* =========================
     ILUSTRACIONES
     ========================= */

  .tw-illustration-banner,
  .tw-species-decoration,
  .tw-notes-banner {
    border-radius: 22px;
  }

  .tw-illustration-banner {
    min-height: 220px;

    margin-bottom: 22px;

    background-position: center;
  }

  .tw-species-decoration {
    min-height: 220px;
  }

  .tw-notes-banner {
    min-height: 210px;

    margin: 22px 0;
  }

  .tw-sticker-sheet {
    max-width: 100%;
  }


  /* =========================
     MENSAJES
     ========================= */

  .tw-feedback {
    padding: 20px;

    border-radius: 20px;

    font-size: 13px;
  }
}


/* =====================================================
   CELULARES PEQUEÑOS
   ===================================================== */

@media (max-width: 430px) {

  .tw-page {
    padding: 6px;
  }

  .tw-shell {
    min-height: calc(100vh - 12px);

    border-radius: 20px;
  }

  .tw-nav {
    padding: 14px;
  }

  .tw-brand-copy strong {
    font-size: 16px;
  }

  .tw-brand-copy span {
    max-width: 205px;
  }

  .tw-hero {
    padding:
      0
      10px
      20px;
  }

  .tw-hero-box {
    min-height: 530px;

    padding:
      21px
      17px;

    border-radius: 21px;

    background-position: 68% center;
  }

  .tw-hero-title {
    font-size: 49px;
  }

  .tw-hero-copy {
    max-width: 270px;

    font-size: 12px;
  }

  .tw-content {
    padding:
      0
      12px
      22px;
  }

  .tw-section-title {
    font-size: 36px;
  }

  .tw-stat-value {
    font-size: 40px;
  }

  .tw-specimen-card {
    min-height: 380px;
  }

  .tw-detail-title {
    font-size: 43px;
  }
}
    `}</style>
  );
}

/* =========================================================
   NAVEGACIÓN
   ========================================================= */

export function TraceWildNav() {
  return (
    <header className="tw-nav">
      <Link to="/" className="tw-brand">
        <div className="tw-brand-badge">
          ✦
        </div>

        <div className="tw-brand-copy">
          <strong>
            Atlas de Criaturas
          </strong>

          <span>
            Registro de avistamientos y especies imposibles
          </span>
        </div>
      </Link>

      <nav className="tw-nav-links">
        <Link
          className="tw-nav-link"
          to="/"
        >
          Especies
        </Link>

        <Link
          className="tw-nav-link"
          to="/avistamientos"
        >
          Avistamientos
        </Link>

        <Link
          className="tw-nav-link"
          to="/criaturas/nueva"
        >
          Nueva especie
        </Link>

        <Link
          className="tw-nav-link"
          to="/avistamientos/nuevo"
        >
          Nuevo reporte
        </Link>
      </nav>

      <Link
        className="tw-nav-cta"
        to="/"
      >
        Explorar atlas
      </Link>
    </header>
  );
}

/* =========================================================
   HERO
   ========================================================= */

export function TraceWildHero({
  speciesCount,
}: {
  speciesCount: number;
}) {
  return (
    <section className="tw-hero">
      <div className="tw-hero-box">
        <div className="tw-hero-inner">
          <div className="tw-pill-soft">
            Archivo vivo · {speciesCount} especies
          </div>

          <h1 className="tw-hero-title">
            <span>
              Atlas de
            </span>

            <span>
              criaturas
            </span>
          </h1>

          <p className="tw-hero-copy">
            Explora especies imposibles, documenta nuevos
            avistamientos y construye un archivo vivo de todo
            aquello que todavía no sabemos explicar.
          </p>

          <div className="tw-hero-actions">
            <PrimaryLink to="/criaturas/nueva">
              Registrar especie ↗
            </PrimaryLink>

            <GhostLink to="/avistamientos">
              Ver avistamientos
            </GhostLink>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   ENCABEZADOS DE SECCIÓN
   ========================================================= */

export function SectionHeader({
  eyebrow,
  title,
  copy,
  actions,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  actions?: React.ReactNode;
}) {
  return (
    <div className="tw-section-header">
      <div>
        <div className="tw-eyebrow">
          {eyebrow}
        </div>

        <h2 className="tw-section-title">
          {title}
        </h2>
      </div>

      <div>
        <p className="tw-section-copy">
          {copy}
        </p>

        {actions && (
          <div
            style={{
              marginTop: 14,
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            {actions}
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   STAT CARDS
   ========================================================= */

export function StatCard({
  label,
  value,
  copy,
  tone,
}: {
  label: string;
  value: string | number;
  copy: string;
  tone?: "accent" | "dark";
}) {
  return (
    <article
      className={`tw-stat ${tone ?? ""}`}
    >
      <div className="tw-stat-label">
        {label}
      </div>

      <div className="tw-stat-value">
        {value}
      </div>

      <div className="tw-stat-copy">
        {copy}
      </div>
    </article>
  );
}

/* =========================================================
   CHIPS
   ========================================================= */

export function Chip({
  children,
  active = false,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <span
      className={`tw-chip ${
        active ? "active" : ""
      }`}
    >
      {children}
    </span>
  );
}

/* =========================================================
   NIVEL DE AMENAZA
   ========================================================= */

export function ThreatLevel({
  value,
}: {
  value: number;
}) {
  return (
    <div
      className="tw-level"
      title={`Nivel de amenaza: ${value}/10`}
    >
      {Array.from({
        length: 10,
      }).map((_, index) => (
        <span
          key={index}
          className={
            index < value
              ? "on"
              : ""
          }
        />
      ))}
    </div>
  );
}

/* =========================================================
   LINKS / BOTONES
   ========================================================= */

export function PrimaryLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      className="tw-btn-primary"
      to={to}
    >
      {children}
    </Link>
  );
}

export function GhostLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      className="tw-dark"
      to={to}
    >
      {children}
    </Link>
  );
}

export function PrimaryButton({
  children,
  type = "button",
  disabled = false,
}: {
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  return (
    <button
      className="tw-btn-primary"
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export function DarkButton({
  children,
  type = "button",
  disabled = false,
  onClick,
}: {
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      className="tw-btn-dark"
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function DangerButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      className="tw-btn-danger"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

/* =========================================================
   ESTADOS
   ========================================================= */

export function LoadingBlock({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="tw-feedback">
      {children}
    </div>
  );
}

export function ErrorBlock({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="tw-feedback error">
      {children}
    </div>
  );
}

export function EmptyBlock({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="tw-feedback">
      {children}
    </div>
  );
}

/* =========================================================
   FORM FIELD
   ========================================================= */

export function Field({
  label,
  htmlFor,
  children,
  full = false,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <div
      className={`tw-field ${
        full ? "full" : ""
      }`}
    >
      <label htmlFor={htmlFor}>
        {label}
      </label>

      {children}
    </div>
  );
}

/* =========================================================
   IMÁGENES DECORATIVAS
   Para usarlas luego en las páginas
   ========================================================= */

export function SpeciesDecoration() {
  return (
    <div
      className="tw-species-decoration"
      aria-hidden="true"
    />
  );
}

export function SightingsDecoration() {
  return (
    <div
      className="tw-illustration-banner"
      aria-hidden="true"
    />
  );
}

export function NotesDecoration() {
  return (
    <div
      className="tw-notes-banner"
      aria-hidden="true"
    />
  );
}

export function AtlasStickers() {
  return (
    <img
      className="tw-sticker-sheet"
      src="/images/stickers-atlas.png"
      alt=""
      aria-hidden="true"
    />
  );
}

/* =========================================================
   FORMATEO DE DATOS
   ========================================================= */

export function formatCreatureType(
  value: string
) {
  const labels: Record<
    string,
    string
  > = {
    mitica: "Mítica",
    elemental: "Elemental",
    mecanica: "Mecánica",
    espectral: "Espectral",

    activa: "Activa",

    en_investigacion:
      "En investigación",

    descartada: "Descartada",
  };

  return labels[value] ?? value;
}