import { Link, Outlet } from "react-router-dom";
import "./input.css";
import {IntroButton} from "./components/buttons";

function App() {
  return (
    <div className="flex flex-col items-center py-12 px-4">
      <div className="container flex justify-center flex-col mt-10 mb-20">
        <img
          className="mx-auto h-28 w-auto"
          src="https://hhhs-app-resources.s3.us-east-2.amazonaws.com/hhhs_logo.png"
          alt="Logo"
        />
      </div>  
      <IntroButton label="Login" to="intro/login/LoginScreen"></IntroButton>
      <IntroButton label="Sign Up" to="intro/IntroScreen"></IntroButton>
      <IntroButton label="Guest" to="intro/IntroScreen"></IntroButton>
      
    </div>
  );
}

export default App;
