import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { obtenerCriaturas } from "../api/criaturasApi";

import {
  Criatura,
  TipoCriatura,
  TIPOS_CRIATURA,
} from "../tipos";

import {
  Chip,
  EmptyBlock,
  ErrorBlock,
  LoadingBlock,
  PrimaryLink,
  SectionHeader,
  StatCard,
  ThreatLevel,
  TraceWildFrame,
  TraceWildHero,
  TraceWildNav,
  formatCreatureType,
} from "../TraceWildDesign";

export function ListaCriaturas() {
  const [criaturas, setCriaturas] = useState<Criatura[]>([]);
  const [filtroTipo, setFiltroTipo] =
    useState<TipoCriatura | "">("");

  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setCargando(true);
    setError(null);

    obtenerCriaturas(filtroTipo || undefined)
      .then(setCriaturas)
      .catch((err: unknown) => {
        setError(
          err instanceof Error
            ? err.message
            : "No se pudieron cargar las criaturas."
        );
      })
      .finally(() => setCargando(false));
  }, [filtroTipo]);

  const criaturasActivas = criaturas.filter(
    (criatura) => criatura.estado === "activa"
  ).length;

  const criaturasInvestigacion = criaturas.filter(
    (criatura) =>
      criatura.estado === "en_investigacion"
  ).length;

  const promedioPeligro =
    criaturas.length > 0
      ? (
          criaturas.reduce(
            (total, criatura) =>
              total + criatura.nivelPeligro,
            0
          ) / criaturas.length
        ).toFixed(1)
      : "0.0";

  return (
    <TraceWildFrame>
      <TraceWildNav />

      <TraceWildHero speciesCount={criaturas.length} />

      <section className="tw-content">
        <SectionHeader
          eyebrow="Archivo vivo"
          title="Especies registradas"
          copy="Cada criatura documentada en Pawnee forma parte de este atlas. Explora su clasificación, nivel de amenaza, estado de investigación y ficha completa."
          actions={
            <PrimaryLink to="/criaturas/nueva">
              Registrar nueva especie ↗
            </PrimaryLink>
          }
        />

        <div className="tw-stats">
          <StatCard
            label="Especies registradas"
            value={criaturas.length}
            copy="Criaturas documentadas actualmente dentro del atlas."
          />

          <StatCard
            label="Casos activos"
            value={criaturasActivas}
            copy="Especies con actividad confirmada y seguimiento vigente."
            tone="accent"
          />

          <StatCard
            label="Amenaza promedio"
            value={promedioPeligro}
            copy={`${criaturasInvestigacion} especies siguen en investigación.`}
            tone="dark"
          />
        </div>

        <div className="tw-filter-row">
          <div className="tw-chips">
            <button
              type="button"
              className={`tw-chip ${
                filtroTipo === "" ? "active" : ""
              }`}
              onClick={() => setFiltroTipo("")}
            >
              Todas
            </button>

            {TIPOS_CRIATURA.map((tipo) => (
              <button
                type="button"
                key={tipo}
                className={`tw-chip ${
                  filtroTipo === tipo ? "active" : ""
                }`}
                onClick={() => setFiltroTipo(tipo)}
              >
                {formatCreatureType(tipo)}
              </button>
            ))}
          </div>

          <Chip>
            {criaturas.length} resultados
          </Chip>
        </div>

        {cargando && (
          <LoadingBlock>
            Revisando el atlas...
          </LoadingBlock>
        )}

        {!cargando && error && (
          <ErrorBlock>
            No se pudo cargar el registro: {error}
          </ErrorBlock>
        )}

        {!cargando &&
          !error &&
          criaturas.length === 0 && (
            <EmptyBlock>
              No encontramos criaturas dentro de esta categoría.
            </EmptyBlock>
          )}

        {!cargando &&
          !error &&
          criaturas.length > 0 && (
            <div className="tw-table-wrap">
              <table className="tw-table">
                <thead>
                  <tr>
                    <th>Especie</th>
                    <th>Clasificación</th>
                    <th>Amenaza</th>
                    <th>Estado</th>
                    <th>Ficha</th>
                  </tr>
                </thead>

                <tbody>
                  {criaturas.map((criatura) => (
                    <tr key={criatura._id}>
                      <td data-label="Especie">
                        <div className="tw-species-name">
                          {criatura.nombre}
                        </div>

                        <div className="tw-meta">
                          Registro ·{" "}
                          {criatura._id
                            .slice(-6)
                            .toUpperCase()}
                        </div>
                      </td>

                      <td data-label="Clasificación">
                        <Chip>
                          {formatCreatureType(
                            criatura.tipo
                          )}
                        </Chip>
                      </td>

                      <td data-label="Amenaza">
                        <ThreatLevel
                          value={criatura.nivelPeligro}
                        />
                      </td>

                      <td data-label="Estado">
                        <Chip
                          active={
                            criatura.estado === "activa"
                          }
                        >
                          {formatCreatureType(
                            criatura.estado
                          )}
                        </Chip>
                      </td>

                      <td data-label="Ficha">
                        <div
                          style={{
                            display: "flex",
                            gap: "8px",
                            flexWrap: "wrap",
                          }}
                        >
                          <Link
                            className="tw-dark"
                            to={`/criaturas/${criatura._id}`}
                          >
                            Ver ficha
                          </Link>

                          <Link
                            className="tw-chip"
                            to={`/criaturas/${criatura._id}/editar`}
                          >
                            Editar
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
      </section>
    </TraceWildFrame>
  );
}