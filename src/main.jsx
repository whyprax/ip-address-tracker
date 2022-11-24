import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { IpProvider } from "./context/IpData.context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <IpProvider>
      <App />
    </IpProvider>
  </React.StrictMode>
);
