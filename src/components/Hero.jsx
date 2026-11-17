import { useState } from "react";
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  Clock,
  FileCheck2,
  MapPin,
  Car,
  Navigation,
} from "lucide-react";
import { SITE_CONFIG, openWhatsApp, trackPhoneCall } from "../config/siteConfig";

export default function Hero() {
  const [vehiculo, setVehiculo] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [servicio, setServicio] = useState("Traslado en grúa plancha");

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    const mensaje = [
      `Hola *${SITE_CONFIG.businessName}*, necesito solicitar asistencia:`,
      `• *Servicio:* ${servicio}`,
      `• *Vehículo:* ${vehiculo.trim() || "A confirmar"}`,
      `• *Ubicación / Destino:* ${ubicacion.trim() || "A confirmar"}`,
    ].join("\n");

    openWhatsApp(mensaje, "hero_formulario_cotizador");
  };

  return (
    <section className="relative overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 py-12 sm:py-16 lg:py-20">
      {/* Detalle luminoso de fondo */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12">
        {/* Columna izquierda: Mensaje principal y botones de acción directa */}
        <div className="lg:col-span-7">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1.5 text-xs font-semibold text-amber-300 sm:text-sm">
            <Clock className="h-4 w-4 text-amber-400" />
            <span>Atención rápida en Mar del Plata, Batán, Santa Clara y Rutas</span>
          </div>

          <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl lg:leading-[1.1]">
            Auxilio Automotor y{" "}
            <span className="text-amber-400">Grúa Plancha</span> al instante
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Traslados seguros sin rodar para autos, camionetas, motos, vehículos
            bajos o chocados, maquinaria liviana y{" "}
            <strong className="font-semibold text-white">
              auxilio de arranques / puente de batería
            </strong>
            .
          </p>

          {/* Botones principales de conversión */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => openWhatsApp(null, "hero_whatsapp_directo")}
              className="inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-2xl bg-emerald-500 px-6 py-4 text-base font-extrabold text-slate-950 shadow-xl shadow-emerald-500/25 transition hover:bg-emerald-400 active:scale-[0.99]"
            >
              <MessageCircle className="h-5 w-5 stroke-[2.5]" />
              <span>Pedir Grúa por WhatsApp</span>
            </button>

            <a
              href={SITE_CONFIG.phoneHref}
              onClick={() => trackPhoneCall("hero_llamar_directo")}
              className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-amber-400/40 bg-slate-900 px-6 py-4 text-base font-bold text-white transition hover:border-amber-400 hover:bg-slate-800"
            >
              <Phone className="h-5 w-5 text-amber-400" />
              <span>Llamar: {SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>

          {/* Diferenciales rápidos */}
          <div className="mt-8 grid grid-cols-1 gap-3 border-t border-slate-800/80 pt-6 sm:grid-cols-3">
            <div className="flex items-center gap-2.5 text-sm text-slate-300">
              <ShieldCheck className="h-5 w-5 shrink-0 text-amber-400" />
              <span>Plancha hidráulica (cuida tu vehículo)</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-slate-300">
              <FileCheck2 className="h-5 w-5 shrink-0 text-amber-400" />
              <span>Factura para reintegro de seguros</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-slate-300">
              <Clock className="h-5 w-5 shrink-0 text-amber-400" />
              <span>Urgencias y traslados programados</span>
            </div>
          </div>
        </div>

        {/* Columna derecha: Cotizador express a WhatsApp */}
        <div className="lg:col-span-5">
          <form
            onSubmit={handleQuoteSubmit}
            className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl sm:p-7"
          >
            <div className="mb-5">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Respuesta inmediata
              </span>
              <h2 className="mt-1 text-xl font-extrabold text-white">
                Cotizá tu auxilio o traslado
              </h2>
              <p className="mt-1 text-xs text-slate-400">
                Completá estos datos y te enviamos presupuesto directo por WhatsApp.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-slate-300">
                  ¿Qué servicio necesitás?
                </label>
                <div className="relative">
                  <Navigation className="pointer-events-none absolute top-3 left-3.5 h-4 w-4 text-amber-400" />
                  <select
                    value={servicio}
                    onChange={(e) => setServicio(e.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 py-2.5 pr-3 pl-10 text-sm text-white focus:border-amber-400 focus:outline-none"
                  >
                    <option value="Traslado en grúa plancha">
                      Traslado en grúa plancha
                    </option>
                    <option value="Auxilio de arranque / batería">
                      Auxilio de arranque / batería
                    </option>
                    <option value="Traslado de moto / cuatriciclo">
                      Traslado de moto / cuatriciclo
                    </option>
                    <option value="Traslado de maquinaria / bienes">
                      Traslado de maquinaria / bienes
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-slate-300">
                  Vehículo (Marca / Modelo)
                </label>
                <div className="relative">
                  <Car className="pointer-events-none absolute top-3 left-3.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={vehiculo}
                    onChange={(e) => setVehiculo(e.target.value)}
                    placeholder="Ej: Gol Trend, Hilux, Moto 250cc..."
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 py-2.5 pr-3 pl-10 text-sm text-white placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-slate-300">
                  ¿Dónde estás y hacia dónde vas?
                </label>
                <div className="relative">
                  <MapPin className="pointer-events-none absolute top-3 left-3.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={ubicacion}
                    onChange={(e) => setUbicacion(e.target.value)}
                    placeholder="Ej: Av. Constitución y Ruta 2 hasta taller..."
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 py-2.5 pr-3 pl-10 text-sm text-white placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-amber-400/20 transition hover:bg-amber-300"
              >
                <MessageCircle className="h-4 w-4 stroke-[2.5]" />
                <span>Enviar consulta a WhatsApp</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}