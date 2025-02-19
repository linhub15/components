import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("index.html missing element with `id='root'");
}

createRoot(root).render(<StrictMode>Vite app for storybook</StrictMode>);
