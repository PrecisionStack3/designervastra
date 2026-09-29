import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CallIcon from "@mui/icons-material/Call";
import CelebrationIcon from "@mui/icons-material/Celebration";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import ImageIcon from "@mui/icons-material/Image";
import HomeIcon from "@mui/icons-material/Home";
import SecurityIcon from "@mui/icons-material/Security";
import SendIcon from "@mui/icons-material/Send";
import StarIcon from "@mui/icons-material/Star";
import { couture } from "../theme";
import { media } from "../media";
import { openWhatsApp, site, waLink } from "../site";

const garments = [
  ["Bridal Blouse", "Aari, zardozi, dori tassels"],
  ["Saree Blouse", "Princess cut, boat neck, halter"],
  ["Lehenga Set", "Multi-kali, double can-can"],
  ["Kurti / Anarkali", "Sharara, gharara, straight pants"],
  ["Indo-Western", "Pre-draped saree, cape sets"],
  ["Upcycle Saree", "Heirloom silk into lehenga or jacket"],
];

const events = ["Bridal / Wedding", "Sangeet / Cocktails", "Festive / Pooja", "Casual Luxury"];
const fabrics = [
  ["I already have my fabric", "Doorstep pickup or a studio drop-off."],
  ["Source fabric for me", "Silk, Banarasi georgette, and organza from weaver clusters."],
];
const embroideries = ["Clean tailoring (no work)", "Subtle gota / cord piping", "Rich Aari & zardozi", "Mirror & resham thread"];
const budgets = [
  ["₹2,000 – ₹5,000", "Essential custom stitching"],
  ["₹5,000 – ₹12,000", "Fine embroidered blouse or set"],
  ["₹12,000 – ₹25,000", "Bridal blouse or anarkali"],
  ["₹25,000+", "Heirloom bridal ensemble"],
];

const reviews = [
  { img: media.design[1], name: "Tanvi Kulkarni", meta: "Bridal order · Indiranagar", quote: "Three local tailors had already ruined necklines. Vasudha spent forty minutes on a video call, showed neckline stencils, and sent photos at every zardozi stage. It fit on the first trial." },
  { img: media.design[2], name: "Meher Qureshi", meta: "Sangeet lehenga · Dubai", quote: "I couriered fabric from Dubai with no idea of can-can weight. She sent flare videos until the bounce felt right, then shipped it back insulated and on time for the sangeet." },
  { img: media.design[3], name: "Ananya Iyer", meta: "Heirloom upcycle · Chennai", quote: "My mother’s Kanjeevaram became a jacket and blouse without losing a single zari motif. The lining is butter-soft and the seam margins are generous enough to alter later." },
];

const initial = {
  garments: ["Bridal Blouse"],
  event: "Bridal / Wedding",
  date: "",
  fabric: "I already have my fabric",
  embroidery: "Clean tailoring (no work)",
  budget: "₹5,000 – ₹12,000",
  link: "",
  name: "",
  phone: "",
  city: "",
  fitting: "Doorstep master tailor measurement",
  notes: "",
  files: [],
};

export default function DesignPage() {
  const [form, setForm] = useState(initial);
  const set = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));

  function toggleGarment(value) {
    setForm((current) => {
      const has = current.garments.includes(value);
      const next = has ? current.garments.filter((item) => item !== value) : [...current.garments, value];
      return { ...current, garments: next.length ? next : [value] };
    });
  }

  function submit(event) {
    event.preventDefault();
    const fileNote = form.files.length ? `\nPhotos selected locally: ${form.files.join(", ")} (please attach them in this chat)` : "";
    openWhatsApp(
      `Bespoke couture consultation — ${site.brand}\n\nClient: ${form.name}\nWhatsApp: +91 ${form.phone}\nCity: ${form.city}\n\nGarments: ${form.garments.join(", ")}\nOccasion: ${form.event}\nTarget date: ${form.date || "Flexible"}\nFabric: ${form.fabric}\nEmbroidery: ${form.embroidery}\nBudget: ${form.budget}\nFitting: ${form.fitting}${form.link ? `\nReference: ${form.link}` : ""}${form.notes ? `\nNotes: ${form.notes}` : ""}${fileNote}`
    );
  }

  return (
    <>
      <Box sx={{ bgcolor: couture.surfaceLow, py: { xs: 6, md: 8 }, position: "relative", overflow: "hidden" }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1.4fr 0.6fr" }, gap: 4, alignItems: "center" }}>
            <Box>
              <Typography variant="overline">Artisanal co-creation atelier</Typography>
              <Typography variant="h1" sx={{ fontSize: { xs: "2.3rem", md: "3.3rem" } }}>Let’s design your dream outfit together</Typography>
              <Typography sx={{ mt: 2, maxWidth: 640, color: couture.onSurfaceVariant, fontSize: "1.05rem" }}>
                A Pinterest board, a wedding, or an heirloom saree in the wardrobe — share it with {site.founder} for a bespoke consult and a transparent estimate.
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mt: 2 }} flexWrap="wrap" useFlexGap>
                {["Zero consultation fees", "30-min designer response", "Dual-seam fit architecture"].map((item) => (
                  <Typography key={item} sx={{ fontWeight: 600, fontSize: 13 }}>{item}</Typography>
                ))}
              </Stack>
            </Box>
            <Box sx={{ position: "relative", borderRadius: 2, overflow: "hidden", maxWidth: 360, justifySelf: { lg: "end" } }}>
              <Box component="img" src={media.design[0]} alt="Designer sketching zari motifs" sx={{ width: "100%", height: 420, objectFit: "cover" }} />
              <Box sx={{ position: "absolute", inset: "auto 0 0 0", p: 2, color: "#fff", background: "linear-gradient(transparent, rgba(80,3,17,0.85))" }}>
                <Typography sx={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: couture.secondaryFixedDim }}>Lead designer</Typography>
                <Typography sx={{ fontFamily: '"Playfair Display", serif', fontSize: 22 }}>{site.founder}</Typography>
                <Typography sx={{ fontSize: 13 }}>“Every stitch carries your personal celebration.”</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: -3 }}>
        <Box sx={{ p: { xs: 2.5, md: 3.5 }, borderRadius: 2, color: "#fff", background: `linear-gradient(100deg, ${couture.primary}, ${couture.primaryContainer}, ${couture.tertiary})`, boxShadow: "0 16px 40px rgba(80,3,17,0.18)" }}>
          <Stack direction={{ xs: "column", md: "row" }} spacing={2} justifyContent="space-between" alignItems={{ md: "center" }}>
            <Box>
              <Stack direction="row" spacing={1} alignItems="center">
                <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#4ade80" }} />
                <Typography sx={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: couture.secondaryFixedDim }}>Active studio line</Typography>
              </Stack>
              <Typography sx={{ fontFamily: '"Playfair Display", serif', fontSize: 24 }}>Fastest response via WhatsApp concierge</Typography>
              <Typography sx={{ opacity: 0.85 }}>Message {site.founder} at {site.phoneDisplay}. Typical reply within 30 minutes.</Typography>
            </Box>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <Button href={waLink(`Hi ${site.founder}, I have a blouse reference photo to discuss.`)} target="_blank" startIcon={<ImageIcon />} sx={{ bgcolor: "#fff", color: couture.primary }}>Send blouse reference</Button>
              <Button href={waLink(`Hello, I am looking for a custom wedding outfit quote.`)} target="_blank" startIcon={<CelebrationIcon />} sx={{ bgcolor: "#fff", color: couture.primary }}>Ask for a wedding quote</Button>
              <Button href={waLink(`Hi, I would like to schedule a saree sourcing call.`)} target="_blank" startIcon={<CallIcon />} sx={{ bgcolor: couture.secondaryFixed, color: couture.onSecondaryFixed }}>Book sourcing call</Button>
            </Stack>
          </Stack>
        </Box>
      </Container>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1.6fr 0.8fr" }, gap: 3 }}>
          <Box component="form" onSubmit={submit} sx={{ display: "grid", gap: 2.5 }}>
            <Box>
              <Typography variant="overline">Artisanal tailoring intake</Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" } }}>Bespoke couture dossier</Typography>
              <Typography variant="body2">Tell the cutting desk your silhouette, embroidery intensity, and event deadline.</Typography>
            </Box>

            <Card step="1" title="What would you like us to craft?">
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", sm: "1fr 1fr 1fr" }, gap: 1 }}>
                {garments.map(([name, sub]) => {
                  const active = form.garments.includes(name);
                  return (
                    <Box key={name} onClick={() => toggleGarment(name)} sx={{ p: 1.5, borderRadius: 2, cursor: "pointer", bgcolor: active ? couture.primaryContainer : "#fff", color: active ? "#fff" : couture.onSurface }}>
                      <Typography sx={{ fontWeight: 700, fontSize: 14 }}>{name}</Typography>
                      <Typography sx={{ fontSize: 12, opacity: 0.8 }}>{sub}</Typography>
                    </Box>
                  );
                })}
              </Box>
            </Card>

            <Card step="2" title="Event and target delivery">
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
                <TextField select label="Celebration type" value={form.event} onChange={set("event")}>
                  {events.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)}
                </TextField>
                <TextField label="Expected delivery or fitting" type="date" value={form.date} onChange={set("date")} slotProps={{ inputLabel: { shrink: true } }} helperText="Keep a 10-day buffer before the event." />
              </Box>
            </Card>

            <Card step="3" title="Fabric sourcing and embroidery">
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2 }}>
                <Stack spacing={1}>
                  {fabrics.map(([name, sub]) => (
                    <Box key={name} onClick={() => setForm({ ...form, fabric: name })} sx={{ p: 1.5, borderRadius: 2, cursor: "pointer", bgcolor: form.fabric === name ? couture.primaryFixed : "#fff", border: form.fabric === name ? `1px solid ${couture.primary}` : "1px solid transparent" }}>
                      <Typography sx={{ fontWeight: 700, fontSize: 14 }}>{name}</Typography>
                      <Typography variant="body2">{sub}</Typography>
                    </Box>
                  ))}
                </Stack>
                <TextField select label="Needlework intensity" value={form.embroidery} onChange={set("embroidery")}>
                  {embroideries.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)}
                </TextField>
              </Box>
            </Card>

            <Card step="4" title="Budget comfort zone">
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: 1 }}>
                {budgets.map(([name, sub]) => {
                  const active = form.budget === name;
                  return (
                    <Box key={name} onClick={() => setForm({ ...form, budget: name })} sx={{ p: 1.5, borderRadius: 2, textAlign: "center", cursor: "pointer", bgcolor: active ? couture.primaryContainer : "#fff", color: active ? "#fff" : couture.primary }}>
                      <Typography sx={{ fontWeight: 700, fontSize: 14 }}>{name}</Typography>
                      <Typography sx={{ fontSize: 12, color: active ? "rgba(255,255,255,0.8)" : couture.onSurfaceVariant }}>{sub}</Typography>
                    </Box>
                  );
                })}
              </Box>
            </Card>

            <Card step="5" title="Inspiration and visual references">
              <Box component="label" sx={{ display: "grid", placeItems: "center", gap: 1, p: 3, borderRadius: 2, bgcolor: "#fff", cursor: "pointer", textAlign: "center" }}>
                <Typography sx={{ fontWeight: 700, color: couture.primary }}>Drop reference photos, or click to browse</Typography>
                <Typography variant="body2">JPG, PNG, or HEIC up to 15MB. Attach the same photos in the WhatsApp chat that opens next.</Typography>
                <input hidden type="file" accept="image/*" multiple onChange={(e) => setForm({ ...form, files: [...e.target.files].map((file) => file.name) })} />
                {form.files.length > 0 && <Typography sx={{ color: couture.secondary, fontWeight: 700 }}>{form.files.length} photo reference(s) ready</Typography>}
              </Box>
              <TextField sx={{ mt: 1.5 }} fullWidth label="Pinterest or Instagram URL" value={form.link} onChange={set("link")} placeholder="https://pinterest.com/pin/..." />
            </Card>

            <Card step="6" title="Contact and fitting preferences">
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
                <TextField required label="Full name" value={form.name} onChange={set("name")} placeholder="Radhika Menon" />
                <TextField required label="WhatsApp number" value={form.phone} onChange={set("phone")} placeholder="98765 43210" />
                <TextField required label="City / suburb" value={form.city} onChange={set("city")} placeholder="Indiranagar, Bangalore" />
                <TextField select label="Fitting preference" value={form.fitting} onChange={set("fitting")}>
                  {["Doorstep master tailor measurement", "Visit the atelier by appointment", "I will courier a sample blouse", "Guided video call on WhatsApp"].map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)}
                </TextField>
                <TextField sx={{ gridColumn: { sm: "1 / -1" } }} label="Notes, neckline, or heirloom history" multiline minRows={3} value={form.notes} onChange={set("notes")} />
              </Box>
            </Card>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems={{ sm: "center" }} justifyContent="space-between" sx={{ p: 2, borderRadius: 2, bgcolor: couture.surfaceHigh }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <SecurityIcon sx={{ color: couture.secondary }} />
                <Typography variant="body2">Measurements and wedding dates stay with the atelier.</Typography>
              </Stack>
              <Button type="submit" variant="contained" endIcon={<SendIcon />}>Submit to designer’s WhatsApp</Button>
            </Stack>
          </Box>

          <Stack spacing={2}>
            <Side icon={<HomeIcon />} title="Doorstep measurement" kicker="Complimentary across Bangalore" body="A lady master tailor visits with fitting garments, tapes, and zari swatches for orders above ₹5,000. Monday–Sunday, 10:00 to 19:30." />
            <Side icon={<FlightTakeoffIcon />} title="Global & pan-India dispatch" kicker="Secure tracked courier" body="USA, UK, UAE, Canada, and Australia via DHL, with moisture-proof bridal wrapping. Domestic 2–3 days · international 4–6 days." />
            <Box sx={{ p: 2.5, borderRadius: 2, bgcolor: couture.surfaceContainer }}>
              <Typography variant="h5">Atelier location</Typography>
              <Typography variant="body2" sx={{ my: 1 }}>{site.address}</Typography>
              <Box component="img" src={media.map} alt="Map preview of Indiranagar" sx={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 1.5 }} />
              <Button href={site.maps} target="_blank" rel="noopener noreferrer" sx={{ mt: 1, color: couture.secondary, fontWeight: 700 }}>Get directions</Button>
            </Box>
            <Box sx={{ p: 2.5, borderRadius: 2, bgcolor: couture.primary, color: "#fff" }}>
              <Typography sx={{ color: couture.secondaryFixedDim, letterSpacing: "0.12em", fontSize: 11, textTransform: "uppercase" }}>Why this atelier</Typography>
              <Typography variant="h5" sx={{ color: "#fff", my: 1 }}>Precision pattern architecture</Typography>
              {["2.5-inch hidden side seam for lifetime alterations", "Double-padded cups moulded to your size", "Pre-shrunk mulmul lining, never scratchy"].map((line) => (
                <Stack key={line} direction="row" spacing={1} sx={{ mb: 0.75 }}>
                  <CheckCircleIcon sx={{ fontSize: 18, color: couture.secondaryFixedDim }} />
                  <Typography sx={{ fontSize: 14 }}>{line}</Typography>
                </Stack>
              ))}
            </Box>
          </Stack>
        </Box>
      </Container>

      <Box sx={{ bgcolor: couture.surfaceLow, py: 7 }}>
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ display: "block", textAlign: "center" }}>Patron experiences</Typography>
          <Typography variant="h2" sx={{ textAlign: "center", fontSize: { xs: "1.8rem", md: "2.3rem" }, mb: 3 }}>Loved by brides and festive clients</Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, gap: 2 }}>
            {reviews.map((review) => (
              <Box key={review.name} sx={{ p: 3, borderRadius: 2, bgcolor: "#fff" }}>
                <Stack direction="row" sx={{ color: couture.secondary }}>{Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} sx={{ fontSize: 16 }} />)}</Stack>
                <Typography sx={{ my: 1.5, fontStyle: "italic" }}>“{review.quote}”</Typography>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Box component="img" src={review.img} alt="" sx={{ width: 42, height: 42, borderRadius: "50%", objectFit: "cover" }} />
                  <Box>
                    <Typography sx={{ fontWeight: 700, color: couture.primary }}>{review.name}</Typography>
                    <Typography variant="body2">{review.meta}</Typography>
                  </Box>
                </Stack>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}

function Card({ step, title, children }) {
  return (
    <Box sx={{ p: { xs: 2, md: 3 }, borderRadius: 2, bgcolor: couture.surfaceContainer }}>
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
        <Box sx={{ width: 26, height: 26, borderRadius: "50%", bgcolor: couture.primary, color: "#fff", display: "grid", placeItems: "center", fontSize: 13, fontWeight: 700 }}>{step}</Box>
        <Typography variant="h5">{title}</Typography>
      </Stack>
      {children}
    </Box>
  );
}

function Side({ icon, title, kicker, body }) {
  return (
    <Box sx={{ p: 2.5, borderRadius: 2, bgcolor: couture.surfaceContainer }}>
      <Stack direction="row" spacing={1.5} alignItems="center">
        <Box sx={{ width: 40, height: 40, borderRadius: "50%", bgcolor: couture.primaryFixed, color: couture.primary, display: "grid", placeItems: "center" }}>{icon}</Box>
        <Box>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body2" sx={{ color: couture.secondary, fontWeight: 700 }}>{kicker}</Typography>
        </Box>
      </Stack>
      <Typography variant="body2" sx={{ mt: 1.5 }}>{body}</Typography>
    </Box>
  );
}
