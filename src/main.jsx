import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { MantineProvider } from "@mantine/core";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider theme={{colorScheme:'dark', colors: {dark: ["#0E0B16"]}}} withNormalizeCSS>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
