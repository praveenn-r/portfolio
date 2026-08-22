import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Apply the saved theme before React renders, so there's no flash of
// the wrong theme on load. Defaults to light if nothing is saved.
const savedTheme = localStorage.getItem("theme");
document.documentElement.setAttribute(
  "data-theme",
  savedTheme === "dark" ? "dark" : "light"
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
