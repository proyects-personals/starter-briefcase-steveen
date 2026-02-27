import React from "react";
import ReactDOM from "react-dom/client";

import "@assets/i18n";
import { ThemeProvider, TranslateProvider } from "@application";
import { App } from "@presentation";
import "./style.css";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container not found");
}

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <TranslateProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </TranslateProvider>
  </React.StrictMode>,
);
