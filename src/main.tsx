import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "@assets/i18n";
import {
  LoadingProvider,
  ThemeProvider,
  TranslateProvider,
} from "@application";
import { RoutesMain } from "@presentation";
import "./style.css";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container not found");
}

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoadingProvider>
        <TranslateProvider>
          <ThemeProvider>
            <RoutesMain data-testid="app-router" />
          </ThemeProvider>
        </TranslateProvider>
      </LoadingProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
