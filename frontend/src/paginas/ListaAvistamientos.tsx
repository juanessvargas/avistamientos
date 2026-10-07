import {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";

import {
  eliminarAvistamiento,
  obtenerAvistamientos,
} from "../api/avistamientosApi";

import { Avistamiento } from "../tipos";

import {
  Chip,
  DangerButton,
  EmptyBlock,
  ErrorBlock,
  LoadingBlock,
  PrimaryLink,
  SectionHeader,
  SightingsDecoration,
  StatCard,
  TraceWildFrame,
  TraceWildNav,
} from "../TraceWildDesign";

export function ListaAvistamientos() {
  const [
    avistamientos,
    setAvistamientos,
  ] = useState<Avistamiento[]>([]);

  const [cargando, setCargando] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  function cargar() {
    setCargando(true);
    setError(null);

    obtenerAvistamientos()
      .then(setAvistamientos)
      .catch((err: unknown) =>
        setError(
          err instanceof Error
            ? err.message
            : "No se pudieron cargar los avistamientos."
        )
      )
      .finally(() => setCargando(false));
  }

  useEffect(() => {
    cargar();
  }, []);

  async function manejarEliminar(
    id: string
  ) {
    const confirmar = window.confirm(
      "¿Eliminar este avistamiento?"
    );

    if (!confirmar) return;

    try {
      await eliminarAvistamiento(id);
      cargar();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "No se pudo eliminar el avistamiento."
      );
    }
  }

  const ubicacionesUnicas =
    new Set(
      avistamientos.map(
        (avistamiento) =>
          avistamiento.ubicacion
      )
    ).size;

  const especiesUnicas =
    new Set(
      avistamientos.map(
        (avistamiento) =>
          avistamiento.criatura._id
      )
    ).size;

  return (
    <TraceWildFrame>
      <TraceWildNav />

      <section className="tw-content">
        <SightingsDecoration />

        <SectionHeader
          eyebrow="Reportes de campo"
          title="Red de avistamientos"
          copy="Todos los encuentros registrados en el Atlas de Criaturas aparecen aquí, conectados directamente con la especie correspondiente."
          actions={
            <PrimaryLink to="/avistamientos/nuevo">
              Registrar avistamiento ↗
            </PrimaryLink>
          }
        />

        <div className="tw-stats">
          <StatCard
            label="Avistamientos"
            value={avistamientos.length}
            copy="Cantidad total de encuentros documentados."
          />

          <StatCard
            label="Especies observadas"
            value={especiesUnicas}
            copy="Especies distintas relacionadas con reportes de campo."
            tone="accent"
          />

          <StatCard
            label="Ubicaciones"
            value={ubicacionesUnicas}
            copy="Zonas diferentes donde se ha registrado actividad."
            tone="dark"
          />
        </div>

        <div style={{ marginTop: "30px" }}>
          {cargando && (
            <LoadingBlock>
              Revisando reportes de campo...
            </LoadingBlock>
          )}

          {!cargando && error && (
            <ErrorBlock>
              {error}
            </ErrorBlock>
          )}

          {!cargando &&
            !error &&
            avistamientos.length === 0 && (
              <EmptyBlock>
                Todavía no existen avistamientos registrados.
              </EmptyBlock>
            )}

          {!cargando &&
            !error &&
            avistamientos.length > 0 && (
              <div className="tw-table-wrap">
                <table className="tw-table">
                  <thead>
                    <tr>
                      <th>Fecha</th>
                      <th>Especie</th>
                      <th>Testigo</th>
                      <th>Ubicación</th>
                      <th>Ficha</th>
                    </tr>
                  </thead>

                  <tbody>
                    {avistamientos.map((avistamiento) => (
                      <tr key={avistamiento._id}>
                        <td data-label="Fecha">
                          {avistamiento.fecha.slice(0, 10)}
                        </td>

                        <td data-label="Especie">
                          <div className="tw-species-name">
                            {avistamiento.criatura.nombre}
                          </div>

                          <div className="tw-meta">
                            Especie vinculada al reporte
                          </div>
                        </td>

                        <td data-label="Testigo">
                          {avistamiento.testigo}
                        </td>

                        <td data-label="Ubicación">
                          <Chip>
                            {avistamiento.ubicacion}
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
                              to={`/criaturas/${avistamiento.criatura._id}`}
                            >
                              Ver ficha
                            </Link>

                            <DangerButton
                              onClick={() =>
                                manejarEliminar(avistamiento._id)
                              }
                            >
                              Eliminar
                            </DangerButton>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
        </div>
      </section>
    </TraceWildFrame>
  );
}