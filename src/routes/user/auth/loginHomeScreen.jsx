import React from "react";

import { OrangePillButton } from "../../../components/buttons";

function LoginHomeScreen() {
  return (
    <div className=" bg-primaryLightGrey h-screen ">
      <div className="flex flex-col items-center">
        <div className="flex justify-center">
          <img
            className=" ml-14 mr-14 mt-4 mb-0 sm:scale-50 sm:mb-0 sm:mt-0"
            src="https://hhhs-app-resources.s3.us-east-2.amazonaws.com/digitalDentalHubLogo.png"
            alt="Logo"
          />
        </div>
        <OrangePillButton label="Login" to="enterCredentials"></OrangePillButton>
        <OrangePillButton label="Sign Up" to="signUp"></OrangePillButton>
      </div>
    </div>
  );
}

export default LoginHomeScreen;
