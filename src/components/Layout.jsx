import { useState } from "react";
import { Link as RouterLink, NavLink, Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import PaletteIcon from "@mui/icons-material/Palette";
import PhoneIcon from "@mui/icons-material/Phone";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VerifiedIcon from "@mui/icons-material/Verified";
import { couture } from "../theme";
import { nav, site, waLink } from "../site";

const guarantees = [
  {
    icon: <VerifiedIcon />,
    title: "Bespoke Fit Guarantee",
    body: "Personalized master tailor fittings, neckline adjustments, and dual-layer seam allowances for life-long silhouette adaptability.",
  },
  {
    icon: <PaletteIcon />,
    title: "Curated Pure Textiles",
    body: "Handloom Banarasi brocades, raw silks, Chanderi, and organzas sourced from weaver clusters with authentic Zardozi and Aari work.",
  },
  {
    icon: <LocalShippingIcon />,
    title: "Doorstep Pickup & Courier",
    body: "Complimentary doorstep measurements across the city, with secured pan-India and global insured bridal courier.",
  },
];

export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <AppBar position="fixed" elevation={0} sx={{ bgcolor: "transparent", color: "text.primary" }}>
        <Box sx={{ bgcolor: couture.primary, color: couture.onPrimary, py: 0.75, px: 2 }}>
          <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
            <AutoAwesomeIcon sx={{ fontSize: 14, color: couture.secondaryFixedDim }} />
            <Typography sx={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", textAlign: "center" }}>
              Custom tailoring slots open for wedding & festive season · Doorstep fabric pickup · Direct WhatsApp with {site.founder}
            </Typography>
            <AutoAwesomeIcon sx={{ fontSize: 14, color: couture.secondaryFixedDim, display: { xs: "none", sm: "block" } }} />
          </Stack>
        </Box>
        <Toolbar
          sx={{
            minHeight: "72px !important",
            bgcolor: "rgba(255,248,246,0.92)",
            backdropFilter: "blur(16px)",
            borderBottom: `1px solid ${couture.outlineVariant}`,
            gap: 2,
          }}
        >
          <Box component={RouterLink} to="/" sx={{ display: "flex", alignItems: "center", gap: 1.25, textDecoration: "none", color: "inherit", mr: 1 }}>
            <Box component="img" src="/brand-logo.jpg" alt="Designer Vastra logo" sx={{ width: 46, height: 46, borderRadius: "50%", objectFit: "cover" }} />
            <Box>
              <Typography sx={{ fontFamily: '"Playfair Display", serif', fontSize: 16, letterSpacing: "0.12em", color: couture.primary, lineHeight: 1 }}>
                {site.wordmark}
              </Typography>
              <Typography sx={{ fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: couture.secondary, fontWeight: 700, mt: 0.4 }}>
                {site.tagline}
              </Typography>
            </Box>
          </Box>

          <Stack direction="row" spacing={2.5} sx={{ display: { xs: "none", lg: "flex" }, flex: 1 }}>
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === "/"} style={{ textDecoration: "none" }}>
                {({ isActive }) => (
                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: isActive ? 700 : 600,
                      letterSpacing: "0.04em",
                      color: isActive ? couture.primary : couture.onSurfaceVariant,
                      borderBottom: isActive ? `2px solid ${couture.secondaryFixedDim}` : "2px solid transparent",
                      pb: 0.4,
                    }}
                  >
                    {item.label}
                  </Typography>
                )}
              </NavLink>
            ))}
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center" sx={{ ml: "auto" }}>
            <Button
              component="a"
              href={waLink(`Hi ${site.founder}, I would like to consult on a custom outfit.`)}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<ChatIcon sx={{ color: couture.secondary }} />}
              sx={{
                display: { xs: "none", sm: "inline-flex" },
                bgcolor: couture.surfaceContainer,
                color: couture.onSurface,
                "&:hover": { bgcolor: couture.surfaceHigh },
              }}
            >
              Chat on WhatsApp
            </Button>
            <Button
              component={RouterLink}
              to="/design"
              variant="contained"
              startIcon={<CalendarMonthIcon sx={{ color: couture.secondaryFixed }} />}
              sx={{ display: { xs: "none", md: "inline-flex" } }}
            >
              Book Stitching Slot
            </Button>
            <IconButton onClick={() => setOpen(true)} sx={{ display: { lg: "none" } }} aria-label="Open menu">
              <MenuIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 300, p: 2 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
            <Typography sx={{ fontFamily: '"Playfair Display", serif', color: couture.primary }}>{site.brand}</Typography>
            <IconButton onClick={() => setOpen(false)} aria-label="Close menu">
              <CloseIcon />
            </IconButton>
          </Stack>
          <Stack spacing={1}>
            {nav.map((item) => (
              <Button key={item.to} component={RouterLink} to={item.to} onClick={() => setOpen(false)} sx={{ justifyContent: "flex-start", color: couture.primary }}>
                {item.label}
              </Button>
            ))}
            <Button component={RouterLink} to="/design" variant="contained" onClick={() => setOpen(false)}>
              Book Stitching Slot
            </Button>
          </Stack>
        </Box>
      </Drawer>

      <Box component="main" sx={{ pt: { xs: "112px", sm: "116px" } }}>
        <Outlet />
      </Box>

      <Box component="footer" sx={{ mt: 8, bgcolor: couture.surfaceLow }}>
        <Box sx={{ bgcolor: "rgba(241,230,228,0.7)", py: 4 }}>
          <Container maxWidth="lg">
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, gap: 3 }}>
              {guarantees.map((item) => (
                <Stack key={item.title} direction="row" spacing={1.5}>
                  <Box sx={{ color: couture.secondary, mt: 0.3 }}>{item.icon}</Box>
                  <Box>
                    <Typography variant="h5" sx={{ mb: 0.5 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2">{item.body}</Typography>
                  </Box>
                </Stack>
              ))}
            </Box>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.4fr 1fr 1fr 1fr" }, gap: 4 }}>
            <Box>
              <Typography sx={{ fontFamily: '"Playfair Display", serif', fontSize: 22, letterSpacing: "0.08em", color: couture.primary }}>
                {site.wordmark}
              </Typography>
              <Typography sx={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: couture.secondary, fontWeight: 700 }}>
                Handcrafted Ethnic Silhouettes
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, maxWidth: 360, color: couture.onSurfaceVariant }}>
                An independent Indian fashion atelier honoring heirloom embroidery, precision bridal tailoring, and poetic ethnic drapecraft.
              </Typography>
              <Stack spacing={1} sx={{ mt: 2 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <StorefrontIcon sx={{ fontSize: 18, color: couture.secondary }} />
                  <Typography variant="body2">{site.address}</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <PhoneIcon sx={{ fontSize: 18, color: couture.secondary }} />
                  <Typography variant="body2">{site.phoneDisplay} · Direct studio line</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <EmailOutlinedIcon sx={{ fontSize: 18, color: couture.secondary }} />
                  <Typography variant="body2">{site.email}</Typography>
                </Stack>
              </Stack>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ mb: 1.5 }}>
                Stitching Services
              </Typography>
              <Stack spacing={0.8}>
                {["Bridal Blouses (Aari & Zardozi)", "Custom Lehengas & Can-can", "Designer Kurti Sets & Shararas", "Heirloom Alterations & Upcycling"].map((label) => (
                  <Typography key={label} component={RouterLink} to="/services" variant="body2" sx={{ color: couture.onSurfaceVariant, textDecoration: "none", "&:hover": { color: couture.primary } }}>
                    {label}
                  </Typography>
                ))}
              </Stack>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ mb: 1.5 }}>
                Atelier & Process
              </Typography>
              <Stack spacing={0.8}>
                {[
                  ["Our story", "/"],
                  ["Couture lookbook", "/creations"],
                  ["Design your outfit", "/design"],
                  ["Pricing ledger", "/services"],
                ].map(([label, to]) => (
                  <Typography key={label} component={RouterLink} to={to} variant="body2" sx={{ color: couture.onSurfaceVariant, textDecoration: "none", "&:hover": { color: couture.primary } }}>
                    {label}
                  </Typography>
                ))}
              </Stack>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ mb: 1.5 }}>
                Direct Connect
              </Typography>
              <Stack spacing={1}>
                <Stack direction="row" spacing={1} component="a" href={site.instagram} target="_blank" rel="noopener noreferrer" sx={{ color: couture.onSurfaceVariant, textDecoration: "none" }}>
                  <InstagramIcon sx={{ fontSize: 18, color: couture.secondary }} />
                  <Typography variant="body2">{site.instagramHandle}</Typography>
                </Stack>
                <Stack direction="row" spacing={1} component="a" href={waLink("Hello Designer Vastra")} target="_blank" rel="noopener noreferrer" sx={{ color: couture.onSurfaceVariant, textDecoration: "none" }}>
                  <ChatIcon sx={{ fontSize: 18, color: couture.secondary }} />
                  <Typography variant="body2">WhatsApp {site.phoneDisplay}</Typography>
                </Stack>
              </Stack>
              <Box sx={{ mt: 2, p: 1.5, borderRadius: 2, bgcolor: couture.surfaceContainer }}>
                <Typography variant="body2">Bridal orders need 3–4 weeks. Express festive slots are confirmed on designer WhatsApp.</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
        <Box sx={{ bgcolor: couture.surfaceContainer, py: 1.5 }}>
          <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "space-between", gap: 2, flexWrap: "wrap" }}>
            <Typography variant="body2">© {new Date().getFullYear()} Designer Vastra. All handcrafted rights reserved.</Typography>
            <Typography variant="body2">Pure Zari · Master crafted in India</Typography>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
