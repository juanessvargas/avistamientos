import {
  FormEvent,
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import {
  crearAvistamiento,
} from "../api/avistamientosApi";

import {
  obtenerCriaturas,
} from "../api/criaturasApi";

import {
  AvistamientoFormulario,
  Criatura,
} from "../tipos";

import {
  DarkButton,
  EmptyBlock,
  ErrorBlock,
  Field,
  GhostLink,
  LoadingBlock,
  PrimaryButton,
  SectionHeader,
  TraceWildFrame,
  TraceWildNav,
} from "../TraceWildDesign";

const FORM_VACIO: AvistamientoFormulario = {
  criatura: "",
  testigo: "",
  ubicacion: "",
  descripcion: "",
  fecha: "",
};

export function FormularioAvistamiento() {
  const [parametros] =
    useSearchParams();

  const navigate = useNavigate();

  const [criaturas, setCriaturas] =
    useState<Criatura[]>([]);

  const [form, setForm] =
    useState<AvistamientoFormulario>({
      ...FORM_VACIO,

      criatura:
        parametros.get("criaturaId") ??
        "",
    });

  const [cargando, setCargando] =
    useState(true);

  const [guardando, setGuardando] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {
    obtenerCriaturas()
      .then((lista) => {
        setCriaturas(lista);

        if (
          !form.criatura &&
          lista.length > 0
        ) {
          setForm((actual) => ({
            ...actual,
            criatura: lista[0]._id,
          }));
        }
      })
      .catch((err: unknown) =>
        setError(
          err instanceof Error
            ? err.message
            : "No se pudieron cargar las especies."
        )
      )
      .finally(() => setCargando(false));
  }, []);

  async function manejarEnvio(
    evento: FormEvent<HTMLFormElement>
  ) {
    evento.preventDefault();

    setError(null);

    if (
      !form.criatura ||
      !form.testigo.trim() ||
      !form.ubicacion.trim() ||
      !form.fecha
    ) {
      setError(
        "La especie, el testigo, la ubicación y la fecha son obligatorios."
      );
      return;
    }

    try {
      setGuardando(true);

      await crearAvistamiento(form);

      navigate("/avistamientos");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "No se pudo registrar el avistamiento."
      );
    } finally {
      setGuardando(false);
    }
  }

  return (
    <TraceWildFrame>
      <TraceWildNav />

      <section className="tw-content">
        <div style={{ marginBottom: "24px" }}>
          <GhostLink to="/avistamientos">
            ← Volver a avistamientos
          </GhostLink>
        </div>

        <SectionHeader
          eyebrow="Reporte de campo"
          title="Registrar avistamiento"
          copy="Documenta dónde fue vista la criatura, quién presenció el encuentro y cualquier detalle que pueda ayudar a entender mejor la especie."
        />

        {cargando && (
          <LoadingBlock>
            Cargando especies...
          </LoadingBlock>
        )}

        {!cargando && error && (
          <ErrorBlock>
            {error}
          </ErrorBlock>
        )}

        {!cargando &&
          !error &&
          criaturas.length === 0 && (
            <EmptyBlock>
              No hay especies registradas todavía. Primero registra una criatura para poder añadir un avistamiento.
            </EmptyBlock>
          )}

        {!cargando &&
          criaturas.length > 0 && (
            <div className="tw-form-card">
              <form
                className="tw-form-grid"
                onSubmit={manejarEnvio}
              >
                <Field
                  label="Especie"
                  htmlFor="criatura"
                >
                  <select
                    className="tw-select"
                    id="criatura"
                    value={form.criatura}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        criatura: e.target.value,
                      })
                    }
                  >
                    {criaturas.map((criatura) => (
                      <option
                        key={criatura._id}
                        value={criatura._id}
                      >
                        {criatura.nombre}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field
                  label="Testigo"
                  htmlFor="testigo"
                >
                  <input
                    className="tw-input"
                    id="testigo"
                    type="text"
                    value={form.testigo}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        testigo: e.target.value,
                      })
                    }
                    placeholder="Nombre del testigo"
                  />
                </Field>

                <Field
                  label="Ubicación"
                  htmlFor="ubicacion"
                >
                  <input
                    className="tw-input"
                    id="ubicacion"
                    type="text"
                    value={form.ubicacion}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        ubicacion: e.target.value,
                      })
                    }
                    placeholder="Bosque norte, lago, sector..."
                  />
                </Field>

                <Field
                  label="Fecha"
                  htmlFor="fecha"
                >
                  <input
                    className="tw-input"
                    id="fecha"
                    type="date"
                    value={form.fecha}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        fecha: e.target.value,
                      })
                    }
                  />
                </Field>

                <Field
                  label="Notas de campo"
                  htmlFor="descripcion"
                  full
                >
                  <textarea
                    className="tw-textarea"
                    id="descripcion"
                    value={form.descripcion}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        descripcion: e.target.value,
                      })
                    }
                    placeholder="Describe comportamiento, movimiento, condiciones del lugar o cualquier detalle extraño..."
                  />
                </Field>

                <div
                  className="tw-field full"
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    <PrimaryButton
                      type="submit"
                      disabled={guardando}
                    >
                      {guardando
                        ? "Guardando..."
                        : "Guardar reporte ↗"}
                    </PrimaryButton>

                    <DarkButton
                      type="button"
                      onClick={() => navigate(-1)}
                    >
                      Cancelar
                    </DarkButton>
                  </div>
                </div>
              </form>
            </div>
          )}
      </section>
    </TraceWildFrame>
  );
}