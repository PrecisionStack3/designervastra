import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ChatIcon from "@mui/icons-material/Chat";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import StarIcon from "@mui/icons-material/Star";
import { couture } from "../theme";
import { media } from "../media";
import { openWhatsApp, site } from "../site";

const credentials = [
  ["NIFT Graduate", "Master pattern drafts"],
  ["Handmade Aari", "Zardozi & cutwork"],
  ["100% Fit Guarantee", "Dual seam margins"],
  ["Pan-India & Global", "Tracked door courier"],
];

const metrics = [
  ["1-on-1", "Design session", "Direct with Vasudha"],
  ["18+", "Fit points", "Zero bust gapping"],
  ["50+", "Pure weavers", "Chanderi, Katan, Tussar"],
  ["100%", "Live updates", "WhatsApp progress clips"],
];

const creations = [
  { title: "The Royal Ruby Bridal Blouse", tag: "Bridal blouse edition", note: "42 hours stitching", price: "Starting ₹4,800 + fabric", body: "Heavy Aari & Zardozi neckline, deep back dori with handmade latkans, internal padded cups and a side zip.", img: media.home[5] },
  { title: "Gulab Meenakari Lehenga", tag: "Occasion lehenga set", note: "6.5m mega flare", price: "₹18,500 all incl.", body: "Mulberry raw silk, dual layered horsehair can-can, antique gota border and a sheer organza veil.", img: media.home[6] },
  { title: "Emerald Chanderi Angrakha", tag: "Festive kurti set", note: "Pure handloom", price: "₹7,200 complete set", body: "Hand-block print with antique gold zari stitch lines, pearl potli buttons, and raw silk straight pants.", img: media.home[7] },
  { title: "Ivory & Gold Corset Blouse", tag: "Cocktail & reception", note: "Boning structure", price: "Starting ₹3,900 + fabric", body: "Sweetheart neck with pearl drops, interior flexible boning, and a concealed side closure.", img: media.home[8] },
];

const compare = [
  ["Fit & sizing", "Standardized S/M/L, then costly alterations", "18-point precise body draft"],
  ["Textiles & lining", "Polyester art silk and itchy synthetic linings", "Pure mul cotton lining and pure silks"],
  ["Neckline & sleeve", "Fixed designs, no modest or deep adjustments", "100% custom neckline and sleeve cut"],
  ["Artisan connection", "Impersonal salesperson, anonymous factory", "Direct access to the NIFT designer"],
  ["Alteration lifespan", "Overlocked edges with zero excess fabric", "2.5 to 3 inches dual seam allowance"],
];

const steps = [
  ["01", "Share references", "Send Pinterest boards, family sarees to upcycle, or your event colour theme on WhatsApp.", "WhatsApp intake within 2 hours"],
  ["02", "Video / studio fitting", "Visit the atelier or join a 15-minute call where Vasudha maps 18 checkpoints.", "Doorstep tape courier available"],
  ["03", "Fabric & zari sampling", "Review videos of real textile drapes and Aari tracing stencils before the needle hits cloth.", "WIP videos sent on WhatsApp"],
  ["04", "Doorstep trial", "Delivered in muslin garment bags. A quarter-inch tweak, if needed, is collected free.", "100% fit guarantee"],
];

const reviews = [
  { quote: "Finding a designer who understands heavy-bust fitting without awkward underarm creases has been a 10-year struggle. Vasudha customized my bridal blouse over a WhatsApp video call. It hugged my shoulders like second skin.", name: "Dr. Nandita Verma", meta: "Bridal velvet blouse · Mumbai", initials: "NV" },
  { quote: "I inherited my grandmother’s 45-year-old Banarasi brocade and was terrified of handing it to a neighbourhood masterji. Vasudha treated the vintage cloth with reverence and crafted an angrakha jacket that turned heads.", name: "Shreya Mukherjee", meta: "Heirloom saree upcycling · Kolkata", initials: "SM" },
  { quote: "Living in Singapore, remote Indian stitching was always stressful. Vasudha sent regular videos of the karchob-frame embroidery. It shipped in 14 days and needed zero alterations.", name: "Pooja Kulkarni", meta: "Custom sangeet lehenga · Singapore", initials: "PK" },
];

function Stars() {
  return (
    <Stack direction="row" spacing={0.2} sx={{ color: couture.secondary }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} sx={{ fontSize: 16 }} />
      ))}
    </Stack>
  );
}

export default function HomePage() {
  return (
    <>
      <Box sx={{ bgcolor: couture.surfaceLow, py: { xs: 6, md: 9 }, position: "relative", overflow: "hidden" }}>
        <Box sx={{ position: "absolute", right: -80, top: -80, width: 360, height: 360, borderRadius: "50%", bgcolor: "rgba(253,186,95,0.25)", filter: "blur(40px)" }} />
        <Container maxWidth="lg" sx={{ position: "relative" }}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1.15fr 0.85fr" }, gap: 5, alignItems: "center" }}>
            <Box>
              <Typography variant="overline">Couture atelier · Direct from the designer</Typography>
              <Typography variant="h1" sx={{ fontSize: { xs: "2.4rem", md: "3.4rem" }, mt: 1 }}>
                Bespoke Indian wear, stitched to your exact silhouette
              </Typography>
              <Typography sx={{ mt: 2, maxWidth: 560, color: couture.onSurfaceVariant, fontSize: "1.05rem" }}>
                Festive outfits, custom bridal blouses, and heirloom lehengas in pure artisanal textiles, tailored by fashion graduate {site.founder}.
              </Typography>
              <Stack direction="row" spacing={1.5} sx={{ mt: 3 }} flexWrap="wrap" useFlexGap>
                <Button component={RouterLink} to="/creations" variant="contained" endIcon={<ArrowDownwardIcon />}>
                  Explore recent stitches
                </Button>
                <Button variant="outlined" startIcon={<ChatIcon />} onClick={() => openWhatsApp(`Hi ${site.founder}, I would like a consultation.`)} sx={{ borderColor: couture.outlineVariant, color: couture.primary }}>
                  Consult via WhatsApp
                </Button>
              </Stack>
              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1.5, mt: 4, maxWidth: 480 }}>
                {credentials.map(([title, sub]) => (
                  <Box key={title} sx={{ p: 1.5, borderRadius: 2, bgcolor: "rgba(255,255,255,0.7)" }}>
                    <Typography sx={{ fontWeight: 700, fontSize: 13, color: couture.primary }}>{title}</Typography>
                    <Typography variant="body2">{sub}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box sx={{ position: "relative" }}>
              <Box component="img" src={media.home[0]} alt="Ruby velvet bridal blouse with gold zardozi" sx={{ width: "100%", height: { xs: 380, md: 520 }, objectFit: "cover", borderRadius: 2 }} />
              <Box sx={{ position: "absolute", left: 16, bottom: 16, right: 16, color: "#fff" }}>
                <Typography sx={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: couture.secondaryFixedDim }}>First stitch spotlight</Typography>
                <Typography sx={{ fontFamily: '"Playfair Display", serif', fontSize: 24 }}>The Gulabi Zardozi Choli</Typography>
                <Typography sx={{ fontSize: 13, opacity: 0.9 }}>Pure mulberry velvet · 64 hours of hand needlework</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 9 } }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" }, gap: 5, alignItems: "center" }}>
          <Box sx={{ display: "grid", gridTemplateColumns: "1.3fr 0.7fr", gap: 1.5 }}>
            <Box component="img" src={media.home[2]} alt="Vasudha at the atelier mannequin" sx={{ width: "100%", height: 420, objectFit: "cover", borderRadius: 2, gridRow: "span 2" }} />
            <Box component="img" src={media.home[1]} alt="Banarasi katan silk swatch" sx={{ width: "100%", height: 200, objectFit: "cover", borderRadius: 2 }} />
            <Box component="img" src={media.home[4]} alt="Aari needlework on a karchob frame" sx={{ width: "100%", height: 200, objectFit: "cover", borderRadius: 2 }} />
          </Box>
          <Box id="designer">
            <Typography variant="overline">Behind every single seam</Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" }, mt: 1 }}>
              Meet {site.founder} — founder and fashion designer, {site.brand}
            </Typography>
            <Typography sx={{ mt: 2, color: couture.onSurfaceVariant }}>
              After graduating with honours in Fashion and Apparel Design from NIFT, New Delhi, I noticed a gap: ready-to-wear forced women into rigid sizes, while luxury studios charged couture markups with no connection to the maker.
            </Typography>
            <Typography sx={{ mt: 1.5, color: couture.onSurfaceVariant }}>
              When you commission a garment here, you speak directly to the designer who cuts your pattern. From Banarasi katan sourced with weavers to neckline depths that flatter your collarbones, every piece is treated as a bespoke heirloom.
            </Typography>
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1.5, mt: 3 }}>
              {metrics.map(([n, label, sub]) => (
                <Box key={label} sx={{ p: 1.5, borderRadius: 2, bgcolor: couture.surfaceContainer }}>
                  <Typography sx={{ fontFamily: '"Playfair Display", serif', fontSize: 28, color: couture.primary }}>{n}</Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: 13 }}>{label}</Typography>
                  <Typography variant="body2">{sub}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>

      <Box sx={{ bgcolor: couture.surfaceLow, py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ sm: "end" }} sx={{ mb: 3 }}>
            <Box>
              <Typography variant="overline">The debut collection · First stitches</Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.3rem" } }}>Handcrafted creations fresh off the atelier</Typography>
            </Box>
            <Typography variant="body2">Custom lead time: 12–18 days pan-India</Typography>
          </Stack>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, 1fr)" }, gap: 2 }}>
            {creations.map((item) => (
              <Box key={item.title} sx={{ bgcolor: "#fff", borderRadius: 2, overflow: "hidden" }}>
                <Box component="img" src={item.img} alt={item.title} sx={{ width: "100%", height: 240, objectFit: "cover" }} />
                <Box sx={{ p: 2 }}>
                  <Typography variant="body2" sx={{ color: couture.secondary, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", fontSize: 10 }}>{item.tag}</Typography>
                  <Typography variant="h5" sx={{ mt: 0.5 }}>{item.title}</Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>{item.body}</Typography>
                  <Typography sx={{ mt: 1.5, fontWeight: 700, color: couture.primary, fontSize: 14 }}>{item.price}</Typography>
                  <Typography variant="body2">{item.note}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <Box sx={{ mt: 3, p: 3, borderRadius: 2, bgcolor: couture.primary, color: "#fff", display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center", justifyContent: "space-between" }}>
            <Box>
              <Typography sx={{ fontFamily: '"Playfair Display", serif', fontSize: 22 }}>Need a custom silhouette designed from scratch?</Typography>
              <Typography sx={{ opacity: 0.85, mt: 0.5 }}>Send a Pinterest screenshot. {site.founder} sketches it into a wearable pattern.</Typography>
            </Box>
            <Button component={RouterLink} to="/design" variant="contained" startIcon={<PhotoLibraryIcon />} sx={{ bgcolor: couture.secondaryFixedDim, color: couture.onSecondaryFixed, "&:hover": { bgcolor: couture.secondaryFixed } }}>
              Send a reference
            </Button>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Typography variant="overline">Anatomy of bespoke tailoring</Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.3rem" }, mb: 3 }}>Why {site.founder}’s stitches fit differently</Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, gap: 2 }}>
          {[
            ["Zero gapping", "Front sweetheart and deep backs sit flush without bunching."],
            ["2.5\" inset seams", "Generous inner margins for effortless weight alterations anytime."],
            ["Guided video fitting", "Live step-by-step measurement over a WhatsApp video call."],
          ].map(([title, body]) => (
            <Box key={title} sx={{ p: 3, borderRadius: 2, bgcolor: couture.surfaceContainer }}>
              <Typography variant="h5">{title}</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>{body}</Typography>
            </Box>
          ))}
        </Box>

        <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.2rem" }, mt: 8, mb: 1 }}>
          Why choose an independent couturier
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>Commercial ethnic stores cut for mannequin averages. This is what custom crafting changes.</Typography>
        <Box sx={{ overflowX: "auto", borderRadius: 2, border: `1px solid ${couture.outlineVariant}` }}>
          <Box component="table" sx={{ width: "100%", borderCollapse: "collapse", minWidth: 640, "& th, & td": { p: 1.75, textAlign: "left", borderBottom: `1px solid ${couture.outlineVariant}`, fontSize: 14 }, "& th": { bgcolor: couture.surfaceHigh, color: couture.primary } }}>
            <thead>
              <tr>
                <th>Tailoring pillar</th>
                <th>Off-the-rack stores</th>
                <th>With {site.brand}</th>
              </tr>
            </thead>
            <tbody>
              {compare.map((row) => (
                <tr key={row[0]}>
                  <td style={{ fontWeight: 600 }}>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>
                    <Stack direction="row" spacing={0.75} alignItems="center">
                      <CheckCircleIcon sx={{ fontSize: 18, color: couture.secondary }} />
                      <span>{row[2]}</span>
                    </Stack>
                  </td>
                </tr>
              ))}
            </tbody>
          </Box>
        </Box>
      </Container>

      <Box sx={{ bgcolor: couture.surfaceLow, py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography variant="overline">The atelier journey</Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.3rem" }, mb: 3 }}>How your bespoke outfit comes to life</Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, 1fr)" }, gap: 2 }}>
            {steps.map(([n, title, body, note]) => (
              <Box key={n} sx={{ p: 2.5, borderRadius: 2, bgcolor: "#fff" }}>
                <Typography sx={{ fontFamily: '"Playfair Display", serif', color: couture.secondary, fontSize: 28 }}>{n}</Typography>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>{body}</Typography>
                <Typography sx={{ mt: 1.5, fontSize: 12, fontWeight: 700, color: couture.primary }}>{note}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Typography variant="overline">Real brides · Real fits</Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.3rem" } }}>Words from first atelier patrons</Typography>
        <Typography variant="body2" sx={{ mb: 3 }}>5.0 rated across 48+ bespoke stitches</Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, gap: 2 }}>
          {reviews.map((review) => (
            <Box key={review.name} sx={{ p: 3, borderRadius: 2, bgcolor: couture.surfaceContainer, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 2 }}>
              <Box>
                <Stars />
                <Typography sx={{ mt: 1.5, fontStyle: "italic" }}>“{review.quote}”</Typography>
              </Box>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Box sx={{ width: 40, height: 40, borderRadius: "50%", bgcolor: couture.primary, color: "#fff", display: "grid", placeItems: "center", fontSize: 13, fontWeight: 700 }}>{review.initials}</Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, color: couture.primary, fontSize: 14 }}>{review.name}</Typography>
                  <Typography variant="body2">{review.meta}</Typography>
                </Box>
              </Stack>
            </Box>
          ))}
        </Box>

        <Box sx={{ mt: 5, p: { xs: 3, md: 5 }, borderRadius: 2, background: `linear-gradient(120deg, ${couture.primary}, ${couture.primaryContainer} 55%, ${couture.tertiary})`, color: "#fff" }}>
          <Typography sx={{ fontFamily: '"Playfair Display", serif', fontSize: { xs: 28, md: 36 } }}>Have a dream silhouette or saree in mind? Let’s craft it together.</Typography>
          <Typography sx={{ mt: 1, maxWidth: 640, opacity: 0.88 }}>No enquiry is too small. Designer {site.founder} replies personally within two hours.</Typography>
          <Stack spacing={0.75} sx={{ my: 2 }}>
            {["Snap a picture of your saree or fabric", "Tell us your event date and city", "Receive two neck sketches and an estimate"].map((line) => (
              <Stack key={line} direction="row" spacing={1} alignItems="center">
                <CheckCircleIcon sx={{ fontSize: 18, color: couture.secondaryFixedDim }} />
                <Typography>{line}</Typography>
              </Stack>
            ))}
          </Stack>
          <Button onClick={() => openWhatsApp(`Hi ${site.founder}, I have a fabric photo and an event date to share.`)} variant="contained" startIcon={<ChatIcon />} sx={{ bgcolor: couture.secondaryFixedDim, color: couture.onSecondaryFixed, "&:hover": { bgcolor: couture.secondaryFixed } }}>
            Send WhatsApp message ({site.phoneDisplay})
          </Button>
        </Box>
      </Container>
    </>
  );
}
