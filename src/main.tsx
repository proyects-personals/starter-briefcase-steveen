import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { CONNECTION_CONFIG } from "@/app/domain";
import "@assets/i18n";
import {
  initAnalytics,
  LoadingProvider,
  ThemeProvider,
  TranslateProvider,
} from "@application";
import { RoutesMain } from "@presentation";

import "./style.css";

const container = document.getElementById("root");

/**
 * @description
 * Valida la existencia del contenedor raíz en el DOM.
 * @throws {Error} Si el elemento con ID 'root' no existe, impidiendo el renderizado.
 */
if (!container) {
  throw new Error("Root container not found");
}

/**
 * @description
 * Inicializa los servicios de análisis (Analytics) únicamente en el entorno de producción.
 * Se verifica contra la configuración global del dominio.
 */
if (CONNECTION_CONFIG.ENVIRONMENT.PROD === "true") {
  initAnalytics();
}

/**
 * Punto de Entrada Principal de la Aplicación.
 * @description
 * Inicializa el renderizado de React y establece los proveedores globales:
 * 1. **Navegación:** `BrowserRouter` para el manejo de rutas.
 * 2. **Estado Global:** Capas de carga (`Loading`), Idiomas (`Translate`) y Estilos (`Theme`).
 * 3. **Internacionalización:** Importación de la configuración base de i18n.
 * @module Main
 * @version 1.0.0
 */
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
