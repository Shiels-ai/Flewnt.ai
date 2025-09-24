import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RecaptchaProvider } from "./contexts/RecaptchaContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecaptchaProvider siteKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || undefined}>
      <App />
    </RecaptchaProvider>
  </React.StrictMode>
);
