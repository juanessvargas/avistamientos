import {
  FormEvent,
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  actualizarCriatura,
  crearCriatura,
  obtenerCriaturaPorId,
} from "../api/criaturasApi";

import {
  CriaturaFormulario,
  ESTADOS_INVESTIGACION,
  TIPOS_CRIATURA,
} from "../tipos";

import {
  DarkButton,
  ErrorBlock,
  Field,
  GhostLink,
  LoadingBlock,
  PrimaryButton,
  SectionHeader,
  TraceWildFrame,
  TraceWildNav,
  formatCreatureType,
} from "../TraceWildDesign";

const FORM_VACIO: CriaturaFormulario = {
  nombre: "",
  tipo: "mitica",
  habilidades: [],
  nivelPeligro: 5,
  estado: "activa",
};

export function FormularioCriatura() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const esEdicion = Boolean(id);

  const [form, setForm] =
    useState<CriaturaFormulario>(FORM_VACIO);

  const [
    habilidadesTexto,
    setHabilidadesTexto,
  ] = useState("");

  const [cargando, setCargando] =
    useState(esEdicion);

  const [guardando, setGuardando] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    obtenerCriaturaPorId(id)
      .then((criatura) => {
        setForm({
          nombre: criatura.nombre,
          tipo: criatura.tipo,
          habilidades: criatura.habilidades,
          nivelPeligro: criatura.nivelPeligro,
          estado: criatura.estado,
        });

        setHabilidadesTexto(
          criatura.habilidades.join(", ")
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

  async function manejarEnvio(
    evento: FormEvent<HTMLFormElement>
  ) {
    evento.preventDefault();

    setError(null);

    if (!form.nombre.trim()) {
      setError(
        "El nombre de la especie es obligatorio."
      );
      return;
    }

    const datosAEnviar: CriaturaFormulario = {
      ...form,

      habilidades: habilidadesTexto
        .split(",")
        .map((habilidad) => habilidad.trim())
        .filter((habilidad) => habilidad.length > 0),
    };

    try {
      setGuardando(true);

      if (esEdicion && id) {
        await actualizarCriatura(id, datosAEnviar);
      } else {
        await crearCriatura(datosAEnviar);
      }

      navigate("/");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "No se pudo guardar la especie."
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
          <GhostLink to="/">
            ← Volver al atlas
          </GhostLink>
        </div>

        <SectionHeader
          eyebrow="Registro de especies"
          title={
            esEdicion
              ? "Editar especie"
              : "Registrar nueva especie"
          }
          copy={
            esEdicion
              ? "Actualiza la clasificación, habilidades, nivel de amenaza y estado de investigación de esta criatura."
              : "Crea una nueva ficha para sumar una criatura al Atlas de Criaturas."
          }
        />

        {cargando && (
          <LoadingBlock>
            Cargando datos de la especie...
          </LoadingBlock>
        )}

        {!cargando && error && (
          <ErrorBlock>
            {error}
          </ErrorBlock>
        )}

        {!cargando && (
          <div className="tw-form-card">
            <form
              className="tw-form-grid"
              onSubmit={manejarEnvio}
            >
              <Field
                label="Nombre de la especie"
                htmlFor="nombre"
              >
                <input
                  className="tw-input"
                  id="nombre"
                  type="text"
                  value={form.nombre}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      nombre: e.target.value,
                    })
                  }
                  placeholder="Ej. Caminante de ceniza"
                />
              </Field>

              <Field
                label="Clasificación"
                htmlFor="tipo"
              >
                <select
                  className="tw-select"
                  id="tipo"
                  value={form.tipo}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      tipo: e.target
                        .value as CriaturaFormulario["tipo"],
                    })
                  }
                >
                  {TIPOS_CRIATURA.map((tipo) => (
                    <option
                      key={tipo}
                      value={tipo}
                    >
                      {formatCreatureType(tipo)}
                    </option>
                  ))}
                </select>
              </Field>

              <Field
                label="Habilidades conocidas"
                htmlFor="habilidades"
                full
              >
                <input
                  className="tw-input"
                  id="habilidades"
                  type="text"
                  value={habilidadesTexto}
                  onChange={(e) =>
                    setHabilidadesTexto(e.target.value)
                  }
                  placeholder="Volar, camuflaje, resistencia al calor..."
                />
              </Field>

              <Field
                label={`Nivel de amenaza · ${form.nivelPeligro}/10`}
                htmlFor="nivelPeligro"
                full
              >
                <input
                  id="nivelPeligro"
                  type="range"
                  min={1}
                  max={10}
                  value={form.nivelPeligro}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      nivelPeligro:
                        Number(e.target.value),
                    })
                  }
                  style={{
                    width: "100%",
                    accentColor:
                      "var(--tw-coral)",
                  }}
                />
              </Field>

              <Field
                label="Estado de investigación"
                htmlFor="estado"
              >
                <select
                  className="tw-select"
                  id="estado"
                  value={form.estado}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      estado: e.target
                        .value as CriaturaFormulario["estado"],
                    })
                  }
                >
                  {ESTADOS_INVESTIGACION.map((estado) => (
                    <option
                      key={estado}
                      value={estado}
                    >
                      {formatCreatureType(estado)}
                    </option>
                  ))}
                </select>
              </Field>

              <div
                className="tw-field"
                style={{
                  justifyContent: "flex-end",
                }}
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
                      : esEdicion
                      ? "Guardar cambios ↗"
                      : "Registrar especie ↗"}
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