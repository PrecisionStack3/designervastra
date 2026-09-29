export const site = {
  brand: "Designer Vastra",
  wordmark: "DESIGNER VASTRA",
  tagline: "Couture Atelier",
  founder: "Vasudha",
  phoneDisplay: "+91 98765 43210",
  phone: "919876543210",
  email: "atelier@designervastra.in",
  instagram: "https://instagram.com/designervastra",
  instagramHandle: "@designervastra",
  address: "14 Heritage Lane, Near 100ft Road, Indiranagar, Bengaluru 560038",
  maps: "https://maps.google.com/?q=Indiranagar,+Bengaluru",
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/creations", label: "Handcrafted Creations" },
  { to: "/services", label: "Bespoke Stitching & Services" },
  { to: "/design", label: "Design Your Outfit" },
];

export function waLink(text) {
  return `https://wa.me/${site.phone}?text=${encodeURIComponent(text)}`;
}

export function openWhatsApp(text) {
  window.open(waLink(text), "_blank", "noopener,noreferrer");
}
