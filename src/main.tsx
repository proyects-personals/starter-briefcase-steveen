import ReactDOM from "react-dom/client";

import { App } from "@presentation";
import "./style.css";

const rootElement = document.getElementById("app");

if (!rootElement) {
  throw new Error("No se encontró el elemento #app");
}

ReactDOM.createRoot(rootElement).render(<App />);
