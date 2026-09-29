import { useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import ChatIcon from "@mui/icons-material/Chat";
import StraightenIcon from "@mui/icons-material/Straighten";
import { couture } from "../theme";
import { media } from "../media";
import { openWhatsApp, site } from "../site";

const filters = ["All", "Blouses", "Lehengas", "Kurtis", "Fusion"];

const pieces = [
  { id: "DV-01", title: "The Marigold Chand Aari Blouse", category: "Blouses", hours: "38 hours of artisan needlework, pure silk lining", body: "Mustard raw silk with hand-drawn zardozi crescents, micro French-knot lotus clusters, and a scalloped back. Reinforced inner canvas for bust support.", tags: ["Mustard raw silk", "Aari & zardozi", "Scalloped back"], img: media.creations[0], action: "Recreate in my size" },
  { id: "DV-02", title: "Kashidakari Kalidar Anarkali", category: "Kurtis", hours: "Zero-waste circle cut, lightweight comfort", body: "Eighteen-kali flare in ivory chanderi with Kashmiri threadwork at the neck and cuffs, hidden side pockets, and a scalloped organza dupatta.", tags: ["Ivory chanderi", "18-kali drape", "Kashmiri resham"], img: media.creations[1], action: "Recreate in my size" },
  { id: "DV-03", title: "Gulmohar Crimson Lehenga", category: "Lehengas", hours: "Double can-can framing with a lighter option", body: "5.5-metre flare in heavy raw silk, antique gold zardozi waistband, sweetheart blouse, and cotton-encased can-can.", tags: ["Crimson raw silk", "5.5m circumference", "Double can-can"], img: media.creations[2], action: "Recreate in my size" },
  { id: "DV-04", title: "Gold Peplum & Cowl Dhoti", category: "Fusion", hours: "Contemporary silhouette for sangeet or Diwali", body: "Tissue chanderi peplum with a scalloped gota hem, fluid cowl-pleated dhoti trousers, an invisible side zip, and deep pockets.", tags: ["Tissue chanderi", "Pleated cowl", "Dual pockets"], img: media.creations[3], action: "Recreate in my size" },
  { id: "DV-05", title: "Vintage Banarasi Boatneck", category: "Blouses", hours: "Upcycled silk · preserved zari border", body: "Cut from a grandmother’s heirloom Banarasi into an elbow-sleeve boat neck with emerald raw silk piping and twisted latkans.", tags: ["Heirloom Banarasi", "Boat neck", "Hand latkans"], img: media.creations[4], action: "Stitch from my saree" },
  { id: "DV-06", title: "Lilac Resham Kurti", category: "Kurtis", hours: "Tonal resham · micro-mirror light catches", body: "Airy chiffon georgette with muted lavender botanical embroidery, hand-punched mirrors, and a cotton mulmul skin lining.", tags: ["Chiffon georgette", "Tonal resham", "Mulmul lining"], img: media.creations[5], action: "Recreate in my size" },
];

const tiers = [
  { name: "Simple tailored cut", from: "₹1,200", days: "5–7 working days", body: "Princess cut, U, V, or round neckline, cotton lining, dual-side seam allowance, hook or zip finish." },
  { name: "Designer cut with padding", from: "₹1,800", days: "7–10 working days", popular: true, body: "Sweetheart, halter, or corset cuts, reinforced bust cups, contrast piping, deep backs, and dori latkans." },
  { name: "Hand embroidery bespoke", from: "₹3,500", days: "14–18 working days", body: "Custom Aari, Maggam, or Zardozi on neck borders, sleeve buttis, pearl edging, and silk canvas reinforcement." },
];

export default function CreationsPage() {
  const [filter, setFilter] = useState("All");
  const [piece, setPiece] = useState(null);
  const [form, setForm] = useState({ name: "", phone: "", size: "M (Bust 36-38)", fabric: "Exact as showcase", notes: "" });
  const visible = useMemo(() => (filter === "All" ? pieces : pieces.filter((item) => item.category === filter)), [filter]);

  function submit(event) {
    event.preventDefault();
    openWhatsApp(
      `Recreate request — ${piece.title} (${piece.id})\nName: ${form.name}\nWhatsApp: +91 ${form.phone}\nSize: ${form.size}\nFabric: ${form.fabric}\nNotes: ${form.notes || "—"}`
    );
    setPiece(null);
  }

  return (
    <>
      <Box sx={{ bgcolor: couture.surfaceLow, py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography variant="overline">Atelier lookbook · Curated works</Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: "2.2rem", md: "3.2rem" }, maxWidth: 820 }}>
            Where pure handlooms meet meticulous needlework and personal silhouettes
          </Typography>
          <Typography sx={{ mt: 2, maxWidth: 720, color: couture.onSurfaceVariant }}>
            A bespoke archive of {site.founder}’s foundational collection — each piece hand-measured, lined in breathable canvas, and stitched with Aari, Zardozi, and Kashmiri craft.
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mt: 3 }} flexWrap="wrap" useFlexGap>
            {[["6", "Heirloom works"], ["2.5 in", "Dual-seam margins"], ["100%", "Mulmul or silk lining"]].map(([n, label]) => (
              <Box key={label} sx={{ px: 2, py: 1.25, borderRadius: 2, bgcolor: "#fff" }}>
                <Typography sx={{ fontFamily: '"Playfair Display", serif', fontSize: 22, color: couture.primary }}>{n}</Typography>
                <Typography variant="body2">{label}</Typography>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {filters.map((item) => (
            <Chip
              key={item}
              label={item === "All" ? `All creations (${pieces.length})` : item}
              onClick={() => setFilter(item)}
              sx={{
                bgcolor: filter === item ? couture.primary : couture.surfaceContainer,
                color: filter === item ? "#fff" : couture.onSurface,
                fontWeight: 600,
              }}
            />
          ))}
        </Stack>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3, mt: 3 }}>
          {visible.map((item) => (
            <Box key={item.id} sx={{ bgcolor: couture.surfaceContainer, borderRadius: 2, overflow: "hidden" }}>
              <Box sx={{ position: "relative" }}>
                <Box component="img" src={item.img} alt={item.title} sx={{ width: "100%", height: 340, objectFit: "cover" }} />
                <Typography sx={{ position: "absolute", top: 12, left: 12, bgcolor: "rgba(80,3,17,0.88)", color: "#fff", px: 1.25, py: 0.4, borderRadius: 1, fontSize: 12 }}>{item.id}</Typography>
              </Box>
              <Box sx={{ p: 2.5 }}>
                <Typography variant="body2" sx={{ color: couture.secondary, fontWeight: 700 }}>{item.hours}</Typography>
                <Typography variant="h4" sx={{ fontSize: "1.55rem", mt: 0.5 }}>{item.title}</Typography>
                <Typography sx={{ mt: 1, color: couture.onSurfaceVariant }}>{item.body}</Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 1.5 }} flexWrap="wrap" useFlexGap>
                  {item.tags.map((tag) => (
                    <Chip key={tag} label={tag} size="small" sx={{ bgcolor: "#fff" }} />
                  ))}
                </Stack>
                <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                  <Button variant="contained" startIcon={<StraightenIcon />} onClick={() => setPiece(item)}>
                    {item.action}
                  </Button>
                  <Button startIcon={<ChatIcon />} onClick={() => openWhatsApp(`Hi ${site.founder}, I would like to enquire about ${item.title} (${item.id}).`)} sx={{ color: couture.primary }}>
                    Inquire
                  </Button>
                </Stack>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>

      <Box sx={{ bgcolor: couture.primary, color: "#fff", py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ color: couture.secondaryFixedDim }}>Why the stitching lasts</Typography>
          <Typography sx={{ fontFamily: '"Playfair Display", serif', fontSize: { xs: 28, md: 36 }, maxWidth: 680 }}>Dual seam allowances · Zero-itch linings</Typography>
          <Typography sx={{ mt: 1, maxWidth: 640, opacity: 0.88 }}>
            Every piece keeps at least 2.5 inches of inner seam so an heirloom can be adjusted across life stages without disturbing embroidery borders.
          </Typography>
          <Stack direction="row" spacing={4} sx={{ mt: 3 }} flexWrap="wrap" useFlexGap>
            {[["14+", "Bespoke fit points"], ["100%", "Cotton mulmul interlining"], ["48 hr", "Sample swatch dispatch"]].map(([n, label]) => (
              <Box key={label}>
                <Typography sx={{ fontFamily: '"Playfair Display", serif', fontSize: 32 }}>{n}</Typography>
                <Typography sx={{ opacity: 0.8 }}>{label}</Typography>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 4, alignItems: "center" }}>
          <Box>
            <Typography variant="overline">Heirloom revival concierge</Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.2rem" } }}>A cherished saree that needs a masterfully tailored blouse?</Typography>
            <Typography sx={{ mt: 1.5, color: couture.onSurfaceVariant }}>
              Mother’s Kanjeevaram, a wedding Chanderi, or fabric from your travels — courier it in. {site.founder} sketches necklines, selects contrast silk piping, and oversees the stitch.
            </Typography>
            <Button sx={{ mt: 2 }} variant="contained" onClick={() => openWhatsApp(`Hi ${site.founder}, I would like a saree blouse consultation. I will send pallu photos.`)}>
              Consult on WhatsApp
            </Button>
          </Box>
          <Stack spacing={1.5}>
            {[
              ["Snap & consult", "Send photos of the saree body and pallu. You receive two or three neckline concepts."],
              ["Doorstep pickup", "We collect the fabric and a best-fitting sample blouse."],
              ["Master stitch & delivery", "Lined in cotton, steam-pressed, and returned with a lifetime adjustment promise."],
            ].map(([title, body], index) => (
              <Box key={title} sx={{ p: 2, borderRadius: 2, bgcolor: couture.surfaceContainer }}>
                <Typography sx={{ fontWeight: 700, color: couture.primary }}>{index + 1}. {title}</Typography>
                <Typography variant="body2">{body}</Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.2rem" }, mt: 8 }}>Bespoke blouse tailoring guidelines</Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>Prices include pure mulmul lining, cup padding, and seam allowance.</Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, gap: 2 }}>
          {tiers.map((tier) => (
            <Box key={tier.name} sx={{ p: 3, borderRadius: 2, bgcolor: tier.popular ? couture.primary : couture.surfaceContainer, color: tier.popular ? "#fff" : "inherit" }}>
              {tier.popular && <Typography sx={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: couture.secondaryFixedDim }}>Most popular</Typography>}
              <Typography variant="h5" sx={{ color: tier.popular ? "#fff" : couture.primary }}>{tier.name}</Typography>
              <Typography sx={{ my: 1.5, color: tier.popular ? "rgba(255,255,255,0.88)" : couture.onSurfaceVariant }}>{tier.body}</Typography>
              <Typography sx={{ fontFamily: '"Playfair Display", serif', fontSize: 28 }}>From {tier.from}</Typography>
              <Typography sx={{ opacity: 0.8, fontSize: 13 }}>Delivery: {tier.days}</Typography>
            </Box>
          ))}
        </Box>
      </Container>

      <Dialog open={Boolean(piece)} onClose={() => setPiece(null)} fullWidth maxWidth="sm">
        <DialogContent sx={{ p: 3 }}>
          <Typography variant="overline">Bespoke commission</Typography>
          <Typography variant="h4" sx={{ fontSize: "1.6rem" }}>{piece?.title}</Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>{site.founder} will reply on WhatsApp to confirm measurements and fabric swatches.</Typography>
          <Box component="form" onSubmit={submit} sx={{ display: "grid", gap: 2 }}>
            <TextField required label="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <TextField required label="WhatsApp number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            <TextField select label="Approximate size" value={form.size} onChange={(e) => setForm({ ...form, size: e.target.value })}>
              {["XS (Bust 32-34)", "S (Bust 34-36)", "M (Bust 36-38)", "L (Bust 38-40)", "XL (Bust 40-42)", "Custom measurements"].map((size) => (
                <MenuItem key={size} value={size}>{size}</MenuItem>
              ))}
            </TextField>
            <TextField select label="Fabric preference" value={form.fabric} onChange={(e) => setForm({ ...form, fabric: e.target.value })}>
              {["Exact as showcase", "Alternative colour", "I'll provide fabric"].map((option) => (
                <MenuItem key={option} value={option}>{option}</MenuItem>
              ))}
            </TextField>
            <TextField label="Neckline or cut notes" multiline minRows={3} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
            <Button type="submit" variant="contained">Submit recreate request</Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
