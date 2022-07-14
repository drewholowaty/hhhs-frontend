import React from "react";

import { OrangePillButton, TextButton } from "../../../../components/buttons";
import { SingleLineTextInput} from "../../../../components/input";

function SignUpStudentScreen() {
  return (
    <div className=" bg-primaryLightGrey h-screen ">
      <div className="flex flex-col items-center">
        <TextButton label="Back" to="/login/signUp/studentOrDentist"></TextButton>
        <SingleLineTextInput id="email" type="email" placeholder="email" ></SingleLineTextInput>
        <SingleLineTextInput id="phoneNumber" type="text" placeholder="phone number" ></SingleLineTextInput>
        <SingleLineTextInput id="country" type="text" placeholder="country" ></SingleLineTextInput>
        <SingleLineTextInput id="school" type="text" placeholder="school name" ></SingleLineTextInput>
        <SingleLineTextInput id="gradDate" type="text" placeholder="expected graduation date" ></SingleLineTextInput>
        <OrangePillButton label="Create Account" to="/"></OrangePillButton>
      </div>
    </div>
  );
}

export default SignUpStudentScreen;