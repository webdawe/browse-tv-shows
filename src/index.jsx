import "./global.css";
// Import some react tools
import ReactDOM from "react-dom/client";
// Import our first component : App
import { App } from "./App";
import { StrictMode } from "react";
// Target the root div
const rootDiv = document.getElementById("root");

// Transform the root div into a react node
const reactRoot = ReactDOM.createRoot(rootDiv);

// Inject our App component into the react node
reactRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
);
