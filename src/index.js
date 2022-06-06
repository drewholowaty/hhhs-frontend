import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import LoginScreen from "./routes/intro/login/LoginScreen";
import HomeScreen from "./routes/app/HomeScreen";


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="intro/login/LoginScreen" element={<LoginScreen />} />
      <Route path="app/HomeScreen" element={<HomeScreen />} />
    </Routes>
  </BrowserRouter>
);

