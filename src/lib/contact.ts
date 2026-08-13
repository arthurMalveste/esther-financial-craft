// Central place for the business's real contact channels.
// Update the values here if they ever change — every reference across
// the site reads from these constants.
export const WHATSAPP_NUMBER = "5517981071616"; // (17) 98107-1616
export const EMAIL = "esthermonteiro@gmail.com";
export const INSTAGRAM_URL = "https://www.instagram.com/esthermonteiroconsultora/";

export function buildWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
