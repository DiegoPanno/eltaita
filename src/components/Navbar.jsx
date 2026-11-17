import { Phone, MessageCircle } from "lucide-react";
import { SITE_CONFIG, openWhatsApp, trackPhoneCall } from "../config/siteConfig";
import logoTaita from "../assets/logoelTaita.jpg";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6">
        <a href="#" className="flex items-center gap-3">
          {/* Contenedor recortado para eliminar el aire negro superior/inferior del JPG y agrandar el logo */}
          <div className="flex h-16 w-44 items-center justify-center overflow-hidden sm:h-20 sm:w-56">
            <img
              src={logoTaita}
              alt="Remolques El Taita - Servicio las 24 horas"
              className="h-full w-full scale-150 object-contain mix-blend-lighten"
            />
          </div>

          <div className="hidden border-l border-slate-800 pl-3 lg:block">
            <span className="block text-xs font-bold uppercase tracking-wider text-sky-400">
              Auxilio y Grúa Plancha
            </span>
            <span className="block text-xs text-slate-400">
              {SITE_CONFIG.city}
            </span>
          </div>
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={SITE_CONFIG.phoneHref}
            onClick={() => trackPhoneCall("header_llamar")}
            className="hidden items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-sky-400/50 hover:text-sky-300 md:inline-flex"
          >
            <Phone className="h-4 w-4 text-sky-400" />
            <span>{SITE_CONFIG.phoneDisplay}</span>
          </a>

          <button
            type="button"
            onClick={() => openWhatsApp(null, "header_whatsapp")}
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
          >
            <MessageCircle className="h-4 w-4 stroke-[2.5]" />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </header>
  );
}
