import React from "react";

import { OrangePillButton, TextButton } from "../../../../components/buttons";
import { SingleLineTextInput} from "../../../../components/input";

function SignUpDentistScreen() {
  return (
    <div className=" bg-primaryLightGrey h-screen ">
      <div className="flex flex-col items-center">
        <TextButton label="Back" to="/login/signUp/studentOrDentist"></TextButton>
        <SingleLineTextInput id="email" type="email" placeholder="email" ></SingleLineTextInput>
        <SingleLineTextInput id="phoneNumber" type="text" placeholder="phone number" ></SingleLineTextInput>
        <SingleLineTextInput id="country" type="text" placeholder="country" ></SingleLineTextInput>
        <SingleLineTextInput id="practiceName" type="text" placeholder="practice name" ></SingleLineTextInput>
        <SingleLineTextInput id="practiceAddress" type="text" placeholder="practice address" ></SingleLineTextInput>
        <SingleLineTextInput id="dentalLicenseNumber" type="text" placeholder="dental license number" ></SingleLineTextInput>
        <SingleLineTextInput id="school" type="text" placeholder="alma mater" ></SingleLineTextInput>
        <SingleLineTextInput id="yearsExperience" type="text" placeholder="years of experience" ></SingleLineTextInput>
        <OrangePillButton label="Create Account" to="/"></OrangePillButton>
      </div>
    </div>
  );
}

export default SignUpDentistScreen;