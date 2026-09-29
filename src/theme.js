import { createTheme } from "@mui/material/styles";

export const couture = {
  surface: "#fff8f6",
  surfaceLow: "#fdf1ef",
  surfaceContainer: "#f7ebe9",
  surfaceHigh: "#f1e6e4",
  surfaceHighest: "#ebe0de",
  primary: "#500311",
  primaryContainer: "#6e1b24",
  primaryFixed: "#ffdad9",
  primaryFixedDim: "#ffb3b4",
  onPrimary: "#ffffff",
  secondary: "#845400",
  secondaryFixed: "#ffddb6",
  secondaryFixedDim: "#fdba5f",
  onSecondaryFixed: "#2a1800",
  tertiary: "#4b0f00",
  onSurface: "#201a19",
  onSurfaceVariant: "#554242",
  outline: "#887272",
  outlineVariant: "#dbc0c0",
  error: "#ba1a1a",
};

const theme = createTheme({
  palette: {
    primary: {
      main: couture.primary,
      light: couture.primaryContainer,
      dark: "#40000a",
      contrastText: couture.onPrimary,
    },
    secondary: {
      main: couture.secondary,
      light: couture.secondaryFixedDim,
      dark: "#643f00",
      contrastText: "#ffffff",
    },
    error: { main: couture.error },
    background: {
      default: couture.surface,
      paper: "#ffffff",
    },
    text: {
      primary: couture.onSurface,
      secondary: couture.onSurfaceVariant,
    },
    divider: couture.outlineVariant,
  },
  shape: { borderRadius: 8 },
  typography: {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 600,
      fontSize: "3.5rem",
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
      color: couture.primary,
    },
    h2: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 500,
      fontSize: "2.5rem",
      lineHeight: 1.25,
      letterSpacing: "-0.01em",
      color: couture.primary,
    },
    h3: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 600,
      fontSize: "1.375rem",
      lineHeight: 1.35,
      color: couture.primary,
    },
    h4: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 500,
      fontSize: "1.75rem",
      lineHeight: 1.3,
      color: couture.primary,
    },
    h5: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 600,
      fontSize: "1.15rem",
      color: couture.primary,
    },
    h6: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontWeight: 700,
      fontSize: "0.72rem",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: couture.primary,
    },
    body1: { fontSize: "0.95rem", lineHeight: 1.65 },
    body2: { fontSize: "0.8125rem", lineHeight: 1.55, color: couture.onSurfaceVariant },
    button: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontWeight: 600,
      letterSpacing: "0.03em",
      textTransform: "none",
    },
    overline: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontWeight: 600,
      fontSize: "0.68rem",
      letterSpacing: "0.2em",
      color: couture.secondary,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: couture.surface,
          color: couture.onSurface,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8, boxShadow: "none", paddingInline: 18 },
        containedPrimary: {
          backgroundColor: couture.primary,
          "&:hover": { backgroundColor: couture.primaryContainer },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          borderRadius: 8,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { backgroundImage: "none" },
      },
    },
  },
});

export default theme;
