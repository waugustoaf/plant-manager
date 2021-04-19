import { StatusBar } from "expo-status-bar";
import React from "react";
import Welcome from "./src/pages/Welcome";
import Theme from "./src/styles/theme";

export default function App() {
  return (
    <Theme>
      <Welcome />
      <StatusBar backgroundColor="#32B768" />
    </Theme>
  );
}
