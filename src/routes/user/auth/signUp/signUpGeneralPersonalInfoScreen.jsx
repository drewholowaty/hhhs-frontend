import React from "react";

import { OrangePillButton, TextButton } from "../../../../components/buttons";
import { SingleLineTextInput} from "../../../../components/input";

function SignUpGeneralPersonalInfoScreen() {
  return (
    <div className=" bg-primaryLightGrey h-screen ">
      <div className="flex flex-col items-center">
        <div className="flex justify-center">
          <h1>Sign up to connect with other dentists!</h1>
        </div>
        <TextButton label="Cancel" to="/login"></TextButton>
        <SingleLineTextInput id="first name" type="text" placeholder="first name" ></SingleLineTextInput>
        <SingleLineTextInput id="last name" type="text" placeholder="last name" ></SingleLineTextInput>
        <SingleLineTextInput id="username" type="text" placeholder="username" ></SingleLineTextInput>
        <SingleLineTextInput id="password" type="password" placeholder="password" ></SingleLineTextInput>
        <OrangePillButton label="Next" to="studentOrDentist"></OrangePillButton>
      </div>
    </div>
  );
}

export default SignUpGeneralPersonalInfoScreen;