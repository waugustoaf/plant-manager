import React from "react";
import { ThemeProvider } from "styled-components/native";

const theme = {
  colors: {
    green: "#32B768",
    green_dark: "#2B7A4B",
    green_light: "#DAF2E4",

    heading: "#52665A",
    body_dark: "#738078",
    body_light: "#AAB2AD",

    background: "#FFFFFF",
    shape: "#F0F0F0",
    white: "#FFFFFF",
    gray: "#CFCFCF",

    blue: "#3D7199",
    blue_light: "#EBF6FF",

    red: "#E83F5B",
  },
};

const Theme: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
