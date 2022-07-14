import React from "react";

import { OrangePillButton, TextButton } from "../../../../components/buttons";
import { SingleLineTextInput} from "../../../../components/input";

function SignUpStudentOrDentistScreen() {
  return (
    <div className=" bg-primaryLightGrey h-screen ">
      <div className="flex flex-col items-center">
        <div className="flex justify-center">
          <h1>Are you a currently a student or a dentist?</h1>
        </div>
        <TextButton label="Back" to="/login/signUp"></TextButton>
        <OrangePillButton label="Student" to="student"></OrangePillButton>
        <OrangePillButton label="Dentist" to="dentist"></OrangePillButton>
      </div>
    </div>
  );
}

export default SignUpStudentOrDentistScreen;