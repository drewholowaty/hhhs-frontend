import React from "react";

import "./input.css";

import { MenuButton } from "./components/buttons";

function App() {
  return (
    <div className=" bg-primaryLightGrey h-screen ">
      <div className="flex flex-col items-center py-2 px-4 ">
          <img
            className=" sm:scale-50 m-14"
            src="https://hhhs-app-resources.s3.us-east-2.amazonaws.com/digitalDentalHubLogo.png"
            alt="Logo"
          />
        <MenuButton label="Courses" to="registry" src="https://hhhs-app-resources.s3.us-east-2.amazonaws.com/homePageIcons/mortarboard.png"></MenuButton>
      
      </div>
    </div>
  );
}

export default App;
