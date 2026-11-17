export const SITE_CONFIG = {
  businessName: "El Taita Remolques",
  instagramHandle: "@eltaitaremolques",
  instagramUrl: "https://www.instagram.com/eltaitaremolques/",
  // Formato internacional sin '+' ni espacios para API de WhatsApp
  whatsappNumber: "5492235947685",
  // Formato legible para mostrar en botones y llamadas
  phoneDisplay: "223 594-7685",
  phoneHref: "tel:+5492235947685",
  city: "Mar del Plata y zona",
  defaultWhatsappMessage:
    "Hola El Taita Remolques, necesito asistencia / cotizar un traslado con grúa plancha.",
};

/**
 * Dispara evento al dataLayer / gtag para medir conversiones en Google Ads
 * y abre WhatsApp con el mensaje prearmado.
 */
export function openWhatsApp(customMessage, originLabel = "boton_general") {
  const message = customMessage || SITE_CONFIG.defaultWhatsappMessage;
  const encodedText = encodeURIComponent(message);
  const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodedText}`;

  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "click_whatsapp",
      lead_origin: originLabel,
    });

    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion_whatsapp", {
        event_category: "Contacto",
        event_label: originLabel,
      });
    }
  }

  window.open(url, "_blank", "noopener,noreferrer");
}

/**
 * Registra el evento de llamada telefónica antes de abrir el marcador.
 */
export function trackPhoneCall(originLabel = "boton_llamar") {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "click_llamar",
      lead_origin: originLabel,
    });

    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion_llamar", {
        event_category: "Contacto",
        event_label: originLabel,
      });
    }
  }
}