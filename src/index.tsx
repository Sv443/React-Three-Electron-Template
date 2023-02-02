import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { WebGLRenderer } from "three";
import { App } from "./App";
import { AppDecorator } from "./components/AppDecorator";
import { createTheme } from "./theme";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <AppDecorator {...{ createTheme }}>
      <App />
    </AppDecorator>
  </StrictMode>
);

const renderer = new WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
window.addEventListener("resize", () =>
  renderer.setSize(window.innerWidth, window.innerHeight)
);
