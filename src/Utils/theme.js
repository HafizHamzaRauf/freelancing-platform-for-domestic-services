// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#333", // Change this to your desired primary color
    },
    secondary: {
      main: "#3498db", // Change this to your desired secondary color
    },
    tertiary: {
      main: "#F0F8FF",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif", // Change this to your desired font
  },
});

export default theme;
