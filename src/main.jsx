import React from "react";
import ReactDOM from "react-dom/client";
import { ArmyProvider } from "./Army.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ArmyProvider>
    <App />
  </ArmyProvider>
);
