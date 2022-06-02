import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import IntroScreen from "./routes/intro/IntroScreen";


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="intro/IntroScreen" element={<IntroScreen />} />
    </Routes>
  </BrowserRouter>
);

