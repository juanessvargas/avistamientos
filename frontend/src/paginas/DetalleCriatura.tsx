import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  eliminarCriatura,
  obtenerCriaturaPorId,
} from "../api/criaturasApi";

import {
  obtenerAvistamientosDeCriatura,
} from "../api/avistamientosApi";

import { Criatura } from "../tipos";

import {
  Chip,
  DangerButton,
  EmptyBlock,
  ErrorBlock,
  GhostLink,
  LoadingBlock,
  PrimaryLink,
  SectionHeader,
  ThreatLevel,
  TraceWildFrame,
  TraceWildNav,
  formatCreatureType,
} from "../TraceWildDesign";

interface AvistamientoSinPopular {
  _id: string;
  testigo: string;
  ubicacion: string;
  descripcion?: string;
  fecha: string;
}

export function DetalleCriatura() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [criatura, setCriatura] = useState<Criatura | null>(null);
  const [avistamientos, setAvistamientos] = useState<
    AvistamientoSinPopular[]
  >([]);

  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    Promise.all([
      obtenerCriaturaPorId(id),
      obtenerAvistamientosDeCriatura(id),
    ])
      .then(([criaturaCargada, avistamientosCargados]) => {
        setCriatura(criaturaCargada);

        setAvistamientos(
          avistamientosCargados as unknown as AvistamientoSinPopular[]
        );
      })
      .catch((err: unknown) =>
        setError(
          err instanceof Error
            ? err.message
            : "No se pudo cargar la especie."
        )
      )
      .finally(() => setCargando(false));
  }, [id]);

  async function manejarEliminar() {
    if (!id) return;

    const confirmar = window.confirm(
      "¿Seguro que quieres eliminar esta especie del atlas?"
    );

    if (!confirmar) return;

    try {
      await eliminarCriatura(id);
      navigate("/");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "No se pudo eliminar la especie."
      );
    }
  }

  return (
    <TraceWildFrame>
      <TraceWildNav />

      <section className="tw-content">
        {cargando && (
          <LoadingBlock>
            Cargando ficha de especie...
          </LoadingBlock>
        )}

        {!cargando && error && (
          <ErrorBlock>
            No se pudo cargar la ficha: {error}
          </ErrorBlock>
        )}

        {!cargando && !error && !criatura && (
          <EmptyBlock>
            No encontramos esta especie en el atlas.
          </EmptyBlock>
        )}

        {!cargando && !error && criatura && (
          <>
            <div className="tw-filter-row">
              <div className="tw-chips">
                <GhostLink to="/">
                  ← Volver al atlas
                </GhostLink>

                <Chip active>
                  {formatCreatureType(criatura.estado)}
                </Chip>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  flexWrap: "wrap",
                }}
              >
                <PrimaryLink
                  to={`/criaturas/${criatura._id}/editar`}
                >
                  Editar ficha ↗
                </PrimaryLink>

                <DangerButton onClick={manejarEliminar}>
                  Eliminar
                </DangerButton>
              </div>
            </div>

            <div className="tw-detail-hero">
              <div className="tw-specimen-card tw-grid-bg">
                <div className="tw-eyebrow">
                  Ficha de especie
                </div>

                <div
                  style={{
                    marginTop: "34px",
                    maxWidth: "360px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: ".1em",
                      color: "rgba(255,255,255,.78)",
                    }}
                  >
                    Clasificación
                  </div>

                  <div
                    style={{
                      fontSize: "38px",
                      fontWeight: 950,
                      letterSpacing: "-.05em",
                      textTransform: "uppercase",
                      marginTop: "8px",
                    }}
                  >
                    {formatCreatureType(criatura.tipo)}
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "26px",
                  }}
                >
                  <ThreatLevel value={criatura.nivelPeligro} />
                </div>

                <div className="tw-specimen-mark">
                  ?
                </div>
              </div>

              <div className="tw-detail-card">
                <div className="tw-eyebrow">
                  Especie registrada
                </div>

                <h1 className="tw-detail-title">
                  {criatura.nombre}
                </h1>

                <p
                  className="tw-section-copy"
                  style={{
                    marginTop: "18px",
                    width: "100%",
                  }}
                >
                  Esta ficha reúne la clasificación, el nivel de amenaza,
                  el estado de investigación y las habilidades conocidas
                  de esta criatura.
                </p>

                <div className="tw-detail-grid">
                  <div className="tw-detail-item">
                    <strong>Clasificación</strong>
                    <span>
                      {formatCreatureType(criatura.tipo)}
                    </span>
                  </div>

                  <div className="tw-detail-item">
                    <strong>Estado</strong>
                    <span>
                      {formatCreatureType(criatura.estado)}
                    </span>
                  </div>

                  <div className="tw-detail-item">
                    <strong>Nivel de amenaza</strong>
                    <span>
                      {criatura.nivelPeligro}/10
                    </span>
                  </div>

                  <div className="tw-detail-item">
                    <strong>Habilidades conocidas</strong>
                    <span>
                      {criatura.habilidades.length > 0
                        ? criatura.habilidades.join(", ")
                        : "No hay habilidades registradas"}
                    </span>
                  </div>
                </div>

                <div
                  className="tw-hero-actions"
                  style={{ marginTop: "26px" }}
                >
                  <PrimaryLink
                    to={`/avistamientos/nuevo?criaturaId=${criatura._id}`}
                  >
                    Registrar avistamiento ↗
                  </PrimaryLink>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "40px" }}>
              <SectionHeader
                eyebrow="Actividad registrada"
                title="Historial de avistamientos"
                copy="Todos los reportes confirmados asociados a esta especie aparecen aquí."
              />

              {avistamientos.length === 0 ? (
                <EmptyBlock>
                  Todavía no hay avistamientos registrados para esta especie.
                </EmptyBlock>
              ) : (
                <div className="tw-table-wrap">
                  <table className="tw-table">
                    <thead>
                      <tr>
                        <th>Fecha</th>
                        <th>Testigo</th>
                        <th>Ubicación</th>
                        <th>Descripción</th>
                      </tr>
                    </thead>

                    <tbody>
                      {avistamientos.map((avistamiento) => (
                        <tr key={avistamiento._id}>
                          <td data-label="Fecha">
                            {avistamiento.fecha.slice(0, 10)}
                          </td>

                          <td data-label="Testigo">
                            <div className="tw-species-name">
                              {avistamiento.testigo}
                            </div>
                          </td>

                          <td data-label="Ubicación">
                            <Chip>
                              {avistamiento.ubicacion}
                            </Chip>
                          </td>

                          <td data-label="Descripción">
                            {avistamiento.descripcion ||
                              "Sin notas adicionales."}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        )}
      </section>
    </TraceWildFrame>
  );
}