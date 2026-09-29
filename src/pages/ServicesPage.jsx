import { useMemo, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import ChatIcon from "@mui/icons-material/Chat";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { couture } from "../theme";
import { media } from "../media";
import { openWhatsApp, site } from "../site";

const offerings = [
  { title: "Designer bridal & saree blouses", price: "₹1,499", extra: "₹3,999+ with Aari", days: "5–7 days", img: media.services[1], points: ["Princess, katori, or corset backs", "Tailored padding or breathable cups", "Potli latkans, piping, and doris", "Aari and Zardozi modules"] },
  { title: "Made-to-measure lehengas", price: "₹4,500", extra: "on fabric", days: "10–14 days", img: media.services[2], points: ["16 to 32 kali with pattern matching", "Subtle or dramatic can-can", "Concealed pockets and crepe lining", "Dupatta scalloping and kiran lace"] },
  { title: "Kurti & salwar suit sets", price: "₹1,800", extra: "onwards", days: "5–7 days", img: media.services[3], points: ["Anarkalis, angrakhas, and straight cuts", "Sharara, gharara, or cigarette pants", "Elastic back with a flat front belt", "Pre-shrink for cottons and raw silks"] },
  { title: "Mother-daughter & sibling sets", price: "₹3,400", extra: "set of 2", days: "7–10 days", img: media.services[4], points: ["Coordinated dye baths and motifs", "Sensory-friendly children's linings", "Expandable hems for growing kids", "Matching accessories and potlis"] },
  { title: "Vintage saree revival", price: "From ₹2,800", extra: "restyling suite", days: "On consult", img: media.services[5], points: ["Saree to kalidar lehenga", "Pallu to a long jacket", "Border re-appliqué on chiffon", "Formal blazer with zari lapels"] },
];

const ledger = [
  ["Classic saree blouse", "Cotton, raw silk, Chanderi, georgette", "Lining, 2\" margins, piping", "5 days", "₹1,499"],
  ["Bridal blouse with Aari / Zardozi", "Kanjeevaram, brocade, velvet, organza", "Embroidery, latkans, cups", "8–12 days", "₹3,999 – ₹8,500"],
  ["Kalidar lehenga & can-can", "Banarasi, silk, net, velvet", "Canvas belt, pleats, pockets", "10–14 days", "₹4,500 – ₹7,000"],
  ["3-piece kurti, pant & dupatta", "Chanderi, linen, mulmul, tussar", "Pockets and slit reinforcement", "5–7 days", "₹1,800 – ₹2,500"],
  ["Anarkali floor-length gown", "Organza, georgette, bandhani", "Crinoline hem and inner body", "7–10 days", "₹3,200 – ₹5,000"],
  ["Express 48-hour slot", "Any unstitched blouse or suit", "Priority line and fitting check", "48 hours", "+₹800 rush"],
];

const faqs = [
  ["Can I provide my own fabric, or do you source it?", "You are welcome to send your own fabric, including a Kanjeevaram or ancestral Banarasi. If you prefer sourcing, the atelier works with weavers in Banaras, Kanchipuram, and Chanderi at wholesale silk prices."],
  ["What if I live outside the city, or in the USA, UK, or UAE?", "A large share of bridal clients are overseas. Fitting happens on a scheduled WhatsApp video call. Finished garments ship by DHL or FedEx, insured, in about 4–6 business days."],
  ["How do I take measurements if we cannot meet?", "Courier a best-fitting blouse for replica drafting, or book a 20-minute video session. A friend can measure the 18 points with a household tape while the designer guides the call."],
  ["Do you stitch in 48 to 72 hours for a sudden invite?", "Yes. Two machines are held for festive emergencies. Express work carries a flat ₹800 priority charge. Confirm the slot on WhatsApp before you courier fabric."],
  ["What if the outfit does not fit?", "You have 7 days after delivery to flag tightness, dart, or neckline issues. Pickup, alteration, and return dispatch within 48 hours are included."],
];

const points = [
  "High bust", "Full bust at apex", "Under bust", "Apex-to-apex distance", "Shoulder breadth", "Armhole contour", "Bicep girth", "Sleeve length", "Front neck depth", "Back neck depth", "Blouse length", "Natural waist", "High hip", "Full hip", "Waist to floor", "Thigh girth", "Knee point", "Ankle hem",
];

const bases = [
  { id: "blouse", label: "Saree blouse", price: 1499 },
  { id: "lehenga", label: "Lehenga set", price: 4500 },
  { id: "kurti", label: "Kurti / suit", price: 1800 },
  { id: "anarkali", label: "Anarkali gown", price: 3200 },
  { id: "revival", label: "Saree revival", price: 2800 },
];

const addons = [
  { id: "aari", label: "Handcrafted Aari work", price: 2500 },
  { id: "cancan", label: "Royal tiered can-can", price: 800 },
  { id: "latkan", label: "Handmade heavy latkans", price: 450 },
  { id: "rush", label: "48-hour rush priority", price: 800 },
];

const inr = (n) => `₹${n.toLocaleString("en-IN")}`;

export default function ServicesPage() {
  const [base, setBase] = useState("blouse");
  const [picked, setPicked] = useState([]);
  const [guide, setGuide] = useState(false);
  const estimate = useMemo(() => {
    const start = bases.find((item) => item.id === base).price;
    return picked.reduce((sum, id) => sum + addons.find((item) => item.id === id).price, start);
  }, [base, picked]);

  function toggle(id) {
    setPicked((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  }

  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Box component="img" src={media.services[0]} alt="Designer measuring handloom silk" sx={{ width: "100%", height: { xs: 280, md: 420 }, objectFit: "cover" }} />
        <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(80,3,17,0.82), rgba(80,3,17,0.2))" }} />
        <Container maxWidth="lg" sx={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
          <Box sx={{ color: "#fff", maxWidth: 680 }}>
            <Typography variant="overline" sx={{ color: couture.secondaryFixedDim }}>Couture master-tailoring</Typography>
            <Typography variant="h1" sx={{ color: "#fff", fontSize: { xs: "2.1rem", md: "3.2rem" } }}>Artisanal stitching & design services</Typography>
            <Typography sx={{ mt: 1, opacity: 0.92 }}>From bridal blouses to a full trousseau — precision of a trained designer, warmth of a small atelier.</Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: -4, position: "relative" }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, gap: 2 }}>
          {[["100%", "Zero fabric-ruin policy"], ["+2 in", "Lifelong dual margins"], ["18 points", "Anatomical fit mapping"]].map(([n, label]) => (
            <Box key={label} sx={{ p: 2.5, borderRadius: 2, bgcolor: "#fff", boxShadow: "0 8px 24px rgba(80,3,17,0.06)" }}>
              <Typography sx={{ fontFamily: '"Playfair Display", serif', fontSize: 28, color: couture.primary }}>{n}</Typography>
              <Typography>{label}</Typography>
              <Typography variant="body2">Overseen personally by {site.founder}</Typography>
            </Box>
          ))}
        </Box>
      </Container>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{ p: 3, borderRadius: 2, bgcolor: couture.surfaceContainer, display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
          <Box>
            <Typography variant="h5">Tired of local tailors spoiling pure Kanjeevarams or organzas?</Typography>
            <Typography variant="body2">Every stitch line is basted, photo-verified on WhatsApp, and cut only after the paper pattern is drafted.</Typography>
          </Box>
          <Button variant="contained" startIcon={<ChatIcon />} onClick={() => openWhatsApp(`Hi ${site.founder}, please share the fabric safety checklist.`)}>Fabric safety checklist</Button>
        </Box>

        <Typography variant="overline" sx={{ display: "block", mt: 6 }}>Our craft disciplines</Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.3rem" }, mb: 3 }}>Bespoke atelier offerings</Typography>
        <Stack spacing={3}>
          {offerings.map((item, index) => (
            <Box key={item.title} sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: index % 2 ? "1.1fr 0.9fr" : "0.9fr 1.1fr" }, gap: 0, bgcolor: couture.surfaceContainer, borderRadius: 2, overflow: "hidden" }}>
              <Box component="img" src={item.img} alt={item.title} sx={{ width: "100%", height: { xs: 240, md: 320 }, objectFit: "cover", order: { md: index % 2 ? 2 : 0 } }} />
              <Box sx={{ p: 3 }}>
                <Typography variant="h4" sx={{ fontSize: "1.6rem" }}>{item.title}</Typography>
                <Stack spacing={0.6} sx={{ my: 1.5 }}>
                  {item.points.map((point) => (
                    <Stack key={point} direction="row" spacing={1} alignItems="center">
                      <CheckIcon sx={{ fontSize: 16, color: couture.secondary }} />
                      <Typography variant="body2" sx={{ color: couture.onSurface }}>{point}</Typography>
                    </Stack>
                  ))}
                </Stack>
                <Typography sx={{ fontFamily: '"Playfair Display", serif', fontSize: 28, color: couture.primary }}>{item.price}</Typography>
                <Typography variant="body2">{item.extra} · {item.days}</Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>

      <Box sx={{ bgcolor: couture.surfaceLow, py: 7 }}>
        <Container maxWidth="lg">
          <Typography variant="overline">Our promise</Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.3rem" } }}>The {site.founder} 100% fit guarantee</Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, gap: 2, mt: 3 }}>
            {[
              ["01", "18-point anatomical mapping", "Shoulder slope, cross-back, armscye, bust apex, and hollow-to-hem drape."],
              ["02", "2-inch lifelong margins", "Generous dual seams in every blouse, kurti, and lehenga belt."],
              ["03", "Doorstep tweak", "Within 7 days, courier pickup and a free micro-adjustment."],
            ].map(([n, title, body]) => (
              <Box key={n} sx={{ p: 3, bgcolor: "#fff", borderRadius: 2 }}>
                <Typography sx={{ color: couture.secondary, fontFamily: '"Playfair Display", serif', fontSize: 28 }}>{n}</Typography>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>{body}</Typography>
              </Box>
            ))}
          </Box>
          <Stack direction="row" spacing={1.5} sx={{ mt: 3 }}>
            <Button variant="contained" onClick={() => setGuide(true)}>View 18-point guide</Button>
            <Button component={RouterLink} to="/design" sx={{ color: couture.primary }}>Courier a sample blouse</Button>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 7 }}>
        <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.2rem" } }}>Tailoring price & lead time ledger</Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>Lining and standard padding are included. Fabric sourcing is at cost plus a 10% curation fee.</Typography>
        <Box sx={{ overflowX: "auto", borderRadius: 2, border: `1px solid ${couture.outlineVariant}` }}>
          <Box component="table" sx={{ width: "100%", borderCollapse: "collapse", minWidth: 760, "& th, & td": { p: 1.5, textAlign: "left", borderBottom: `1px solid ${couture.outlineVariant}`, fontSize: 14 }, "& th": { bgcolor: couture.surfaceHigh, color: couture.primary } }}>
            <thead>
              <tr>
                <th>Garment</th>
                <th>Fabric</th>
                <th>Finishing</th>
                <th>Turnaround</th>
                <th>Base</th>
              </tr>
            </thead>
            <tbody>
              {ledger.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell) => <td key={cell}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </Box>
        </Box>

        <Box sx={{ mt: 5, display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" }, gap: 3 }}>
          <Box sx={{ p: 3, borderRadius: 2, bgcolor: couture.surfaceContainer }}>
            <Typography variant="h4">Estimate your custom stitching</Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>A transparent fee before you message the designer.</Typography>
            <Typography sx={{ fontWeight: 700, mb: 1 }}>1. Garment</Typography>
            <RadioGroup value={base} onChange={(e) => setBase(e.target.value)}>
              {bases.map((item) => (
                <FormControlLabel key={item.id} value={item.id} control={<Radio sx={{ color: couture.primary, "&.Mui-checked": { color: couture.primary } }} />} label={`${item.label} (${inr(item.price)})`} />
              ))}
            </RadioGroup>
            <Typography sx={{ fontWeight: 700, mt: 2, mb: 1 }}>2. Craft add-ons</Typography>
            {addons.map((item) => (
              <FormControlLabel key={item.id} control={<Checkbox checked={picked.includes(item.id)} onChange={() => toggle(item.id)} sx={{ color: couture.primary, "&.Mui-checked": { color: couture.primary } }} />} label={`${item.label} (+${inr(item.price)})`} />
            ))}
          </Box>
          <Box sx={{ p: 3, borderRadius: 2, bgcolor: couture.primary, color: "#fff", alignSelf: "start" }}>
            <Typography sx={{ letterSpacing: "0.14em", fontSize: 12, textTransform: "uppercase", color: couture.secondaryFixedDim }}>Tailoring estimate</Typography>
            <Typography sx={{ fontFamily: '"Playfair Display", serif', fontSize: 42, mt: 1 }}>{inr(estimate)}</Typography>
            <Typography sx={{ opacity: 0.8 }}>+ GST · lining, video fitting, and 7-day guarantee included</Typography>
            <Button sx={{ mt: 3, bgcolor: couture.secondaryFixedDim, color: couture.onSecondaryFixed, "&:hover": { bgcolor: couture.secondaryFixed } }} variant="contained" onClick={() => openWhatsApp(`Stitching estimate request\nGarment: ${bases.find((item) => item.id === base).label}\nAdd-ons: ${picked.join(", ") || "None"}\nEstimate: ${inr(estimate)} + GST`)}>
              Lock estimate on WhatsApp
            </Button>
          </Box>
        </Box>

        <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.2rem" }, mt: 7, mb: 2 }}>Frequently asked questions</Typography>
        {faqs.map(([q, a]) => (
          <Accordion key={q} disableGutters elevation={0} sx={{ bgcolor: couture.surfaceContainer, mb: 1, "&:before": { display: "none" } }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontWeight: 600 }}>{q}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" sx={{ color: couture.onSurface }}>{a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>

      <Dialog open={guide} onClose={() => setGuide(false)} fullWidth maxWidth="sm">
        <DialogContent sx={{ p: 3 }}>
          <Typography variant="overline">Atelier blueprint</Typography>
          <Typography variant="h4" sx={{ mb: 1 }}>18-point measurement ledger</Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1 }}>
            {points.map((point, index) => (
              <Typography key={point} variant="body2" sx={{ color: couture.onSurface }}>{index + 1}. {point}</Typography>
            ))}
          </Box>
          <Button sx={{ mt: 2 }} variant="contained" onClick={() => setGuide(false)}>Got it</Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
