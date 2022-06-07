import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import React from "react";
import LoginScreen from "./routes/intro/login/LoginScreen";
import HomeScreen from "./routes/app/HomeScreen";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="intro/login/LoginScreen" element={<LoginScreen />} />
        <Route path="app/HomeScreen" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

