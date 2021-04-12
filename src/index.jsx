// Imports
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, theme, CSSReset } from "@chakra-ui/react";
// main component
import App from "./App.jsx";
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CSSReset />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
