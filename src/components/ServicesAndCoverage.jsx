import {
  Truck,
  BatteryCharging,
  Bike,
  Wrench,
  FileText,
  Package,
  MapPin,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { openWhatsApp } from "../config/siteConfig";

const SERVICES = [
  {
    icon: Truck,
    title: "Grúa Plancha Hidráulica",
    description:
      "Traslado seguro sin rodar para autos, camionetas 4x4, utilitarios, vehículos bajos, chocados o con caja automática bloqueada.",
    waText: "Hola El Taita Remolques, necesito cotizar un traslado en grúa plancha.",
  },
  {
    icon: BatteryCharging,
    title: "Auxilio de Arranques",
    description:
      "Asistencia rápida en el lugar por batería descargada. Puente de batería y puesta en marcha segura en ciudad o ruta.",
    waText: "Hola El Taita Remolques, necesito un auxilio de arranque / puente de batería.",
  },
  {
    icon: Bike,
    title: "Traslado de Motos y Cuatriciclos",
    description:
      "Sujeción especializada sobre plataforma plancha para motos de baja y alta cilindrada, scooters y cuatriciclos sin riesgo de caídas.",
    waText: "Hola El Taita Remolques, necesito cotizar el traslado de una moto.",
  },
  {
    icon: Wrench,
    title: "Maquinaria Liviana y Autoelevadores",
    description:
      "Transporte de autoelevadores, zorras, generadores, tractores cortacésped y equipos de obra o industria.",
    waText: "Hola El Taita Remolques, necesito consultar por el traslado de maquinaria.",
  },
  {
    icon: Package,
    title: "Traslado de Bienes Especiales",
    description:
      "Movimiento y transporte cuidadoso de estructuras, equipos pesados y bultos voluminosos en plataforma.",
    waText: "Hola El Taita Remolques, quiero consultar por el traslado de un bien/equipo.",
  },
  {
    icon: FileText,
    title: "Factura para Seguros",
    description:
      "Emitimos comprobante válido para que puedas presentar y tramitar el reintegro del traslado en tu compañía aseguradora.",
    waText: "Hola El Taita Remolques, necesito un traslado con factura para reintegro del seguro.",
  },
];

const ZONES = [
  "Mar del Plata (Todos los barrios y zona portuaria)",
  "Batán y Estación Chapadmalal",
  "Santa Clara del Mar y Mar Chiquita",
  "Autovía Ruta 2 (tramo local y media distancia)",
  "Ruta 11 (Costa Atlántica y Miramar)",
  "Ruta 226 (Sierra de los Padres y Balcarce)",
];

export default function ServicesAndCoverage() {
  return (
    <section id="servicios" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Encabezado de servicios */}
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Soluciones en calle y ruta
          </span>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-4xl">
            Servicios de auxilio y traslado
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
            Equipamiento preparado para resolver urgencias mecánicas leves o
            trasladar tu vehículo con total seguridad hasta tu domicilio o taller
            de confianza.
          </p>
        </div>

        {/* Grilla de tarjetas */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-amber-400/40"
              >
                <div>
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    openWhatsApp(item.waText, `servicio_${item.title}`)
                  }
                  className="mt-5 inline-flex cursor-pointer items-center gap-1.5 text-sm font-bold text-emerald-400 transition hover:text-emerald-300"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Consultar por WhatsApp</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Bloque de Cobertura Geográfica */}
        <div className="mt-16 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-900/40 p-6 sm:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                <MapPin className="h-4 w-4" />
                <span>Radio operativo</span>
              </div>
              <h3 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                Cobertura en Mar del Plata y zona
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                Operamos con base en Mar del Plata y salidas rápidas a rutas y
                localidades vecinas. También realizamos traslados programados de
                larga distancia.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-6">
              {ZONES.map((zone) => (
                <div
                  key={zone}
                  className="flex items-start gap-2.5 rounded-xl border border-slate-800/80 bg-slate-950/70 p-3.5 text-sm text-slate-200"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                  <span>{zone}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}