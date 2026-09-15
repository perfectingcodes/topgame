import { StrictMode } from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

const container = document.getElementById("root")!;
const tree = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Prerendered pages ship real markup, so hydrate them; `pnpm dev` serves an
// empty shell and needs a fresh client render instead.
if (container.hasChildNodes()) {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}
