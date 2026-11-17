import { Phone, MessageCircle } from "lucide-react";
import { SITE_CONFIG, openWhatsApp, trackPhoneCall } from "../config/siteConfig";
import logoTaita from "../assets/logoelTaita.jpg";

export default function FooterAndFloatingBar() {
  return (
    <>
      <footer className="border-t border-slate-800 bg-slate-950 pb-24 pt-12 md:pb-12">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6">
          <div className="flex items-center gap-3.5">
            <div className="flex h-20 w-52 items-center justify-center overflow-hidden">
              <img
                src={logoTaita}
                alt="Remolques El Taita"
                className="h-full w-full scale-150 object-contain mix-blend-lighten"
              />
            </div>
            <div>
              <p className="font-extrabold text-white">
                {SITE_CONFIG.businessName}
              </p>
              <p className="text-xs text-slate-400">
                Auxilio Automotor, Arranques y Grúa Plancha • {SITE_CONFIG.city}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:border-sky-400/40 hover:text-sky-300"
            >
              <svg
                className="h-4 w-4 text-sky-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span>{SITE_CONFIG.instagramHandle}</span>
            </a>

            <a
              href={SITE_CONFIG.phoneHref}
              onClick={() => trackPhoneCall("footer_llamar")}
              className="font-semibold text-sky-400 hover:underline"
            >
              {SITE_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      </footer>

      {/* Barra fija inferior solo visible en móviles */}
      <div className="fixed right-0 bottom-0 left-0 z-50 grid grid-cols-2 gap-2 border-t border-slate-800 bg-slate-950/95 p-2.5 backdrop-blur-md md:hidden">
        <a
          href={SITE_CONFIG.phoneHref}
          onClick={() => trackPhoneCall("barra_movil_llamar")}
          className="flex items-center justify-center gap-2 rounded-xl border border-sky-400/40 bg-slate-900 py-3 text-sm font-bold text-white active:scale-[0.98]"
        >
          <Phone className="h-4 w-4 text-sky-400" />
          <span>Llamar</span>
        </a>

        <button
          type="button"
          onClick={() => openWhatsApp(null, "barra_movil_whatsapp")}
          className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3 text-sm font-extrabold text-slate-950 shadow-lg shadow-emerald-500/20 active:scale-[0.98]"
        >
          <MessageCircle className="h-4 w-4 stroke-[2.5]" />
          <span>WhatsApp</span>
        </button>
      </div>
    </>
  );
}