import React from "react";
import ReactDOM from "react-dom/client";
import { CookiesProvider } from "react-cookie";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App.jsx";

import "./index.css";
import { theme } from "./Common/ColorTheme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
        <App />
      </CookiesProvider>
    </ThemeProvider>
  </React.StrictMode>
);
