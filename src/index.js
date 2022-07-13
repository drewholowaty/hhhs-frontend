import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import App from "./App";
import RegistryHomeScreen from "./routes/registry/registryHomeScreen";
// import HomeScreen from "./routes/app/HomeScreen";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="registry" element={<RegistryHomeScreen />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
