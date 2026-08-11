// Central place for the business's real contact channels.
// Update WHATSAPP_NUMBER here if the number ever changes — every
// WhatsApp link/button in the site reads from this one constant.
export const WHATSAPP_NUMBER = "5517981071616"; // (17) 98107-1616

export function buildWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
