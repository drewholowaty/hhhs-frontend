import React from "react";

import "./input.css";

import { MenuButton, GreyPillButton } from "./components/buttons";

function App() {
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
        <div className=" flex flex-row gap-8 mb-8 mt-4">
          <MenuButton label="Education" to="education" src="https://hhhs-app-resources.s3.us-east-2.amazonaws.com/homePageIcons/youtube.png" css="scale-90"></MenuButton>
          <MenuButton label="Events" to="events" src="https://hhhs-app-resources.s3.us-east-2.amazonaws.com/homePageIcons/plan.png" css=" scale-90"></MenuButton>
        </div>
        <div className=" flex flex-row gap-8 mb-8">
          <MenuButton label="Registry" to="registry" src="https://hhhs-app-resources.s3.us-east-2.amazonaws.com/homePageIcons/contact-book.png" css=" scale-90"></MenuButton>
          <MenuButton label="Community" to="community" src="https://hhhs-app-resources.s3.us-east-2.amazonaws.com/homePageIcons/conversation.png" css=" scale-90"></MenuButton>
        </div>
        <div className=" flex flex-row gap-8 mb-5 sm:mb-8">
          <MenuButton label="Courses" to="courses" src="https://hhhs-app-resources.s3.us-east-2.amazonaws.com/homePageIcons/mortarboard.png" css=" "></MenuButton>
          <MenuButton label="Shop" to="shop" src="https://hhhs-app-resources.s3.us-east-2.amazonaws.com/homePageIcons/shopping-cart.png" css=" scale-90"></MenuButton>
        </div>
        <div className="flex justify-end w-full pr-8 sm:w-1/4">
          <GreyPillButton label="Login" to="login"></GreyPillButton>
        </div>
          
      </div>
    </div>
  );
}

export default App;
