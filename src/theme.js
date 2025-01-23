import { createTheme } from "@mui/material/styles";
import { grey, teal } from "@mui/material/colors";
import "@fontsource/poppins";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0F4C5C",
    },
    secondary: {
      main: "#43C59E",
    },
    background: {
      default: "#F9F9F9",
      paper: "#FFFFFF",
    },
    text: {
      primary: grey[800],
      secondary: grey[600],
    },
  },
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
    h1: {
      fontSize: "50pt",
      fontWeight: "Black",
      color: "#0F4C5C",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
      color: "#0F4C5C",
    },
    h3: {
      fontSize: "20pt",
      fontWeight: "Medium",
      color: "#0F4C5C",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      color: grey[800],
    },
    button: {
      fontSize: "1rem",
      fontWeight: 500,
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "10px 20px",
          boxShadow: "none",
        },
        contained: {
          backgroundColor: "#0F4C5C",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: teal[700],
          },
        },
        outlined: {
          borderColor: "#43C59E",
          color: "#43C59E",
          "&:hover": {
            borderColor: teal[700],
            backgroundColor: "rgba(67, 197, 158, 0.1)",
          },
        },
      },
    },
  },
});

export default theme;
