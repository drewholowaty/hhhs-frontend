import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import App from "./App";
import RegistryHomeScreen from "./routes/registry/registryHomeScreen";
import CoursesHomeScreen from "./routes/courses/coursesHomeScreen";
import EducationHomeScreen from "./routes/education/educationHomeScreen";
import EventsHomeScreen from "./routes/events/eventsHomeScreen";
import ShopHomeScreen from "./routes/shop/shopHomeScreen";
import CommunityHomeScreen from "./routes/community/communityHomeScreen";
import LoginHomeScreen from "./routes/user/auth/loginHomeScreen";
import LoginEnterCredentialsScreen from "./routes/user/auth/login/loginEnterCredentialsScreen";
import SignUpGeneralPersonalInfoScreen from "./routes/user/auth/signUp/signUpGeneralPersonalInfoScreen";
import SignUpStudentOrDentistScreen from "./routes/user/auth/signUp/signUpStudentOrDentistScreen";
import SignUpDentistScreen from "./routes/user/auth/signUp/signUpDentistScreen";
import SignUpStudentScreen from "./routes/user/auth/signUp/signUpStudentScreen";

// import HomeScreen from "./routes/app/HomeScreen";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="registry" element={<RegistryHomeScreen />} />
        <Route path="courses" element={<CoursesHomeScreen />} />
        <Route path="education" element={<EducationHomeScreen />} />
        <Route path="events" element={<EventsHomeScreen />} />
        <Route path="shop" element={<ShopHomeScreen />} />
        <Route path="community" element={<CommunityHomeScreen />} />
        <Route path="login" element={<LoginHomeScreen />} />
        <Route path="login/enterCredentials" element={<LoginEnterCredentialsScreen />} />
        <Route path="login/signUp" element={<SignUpGeneralPersonalInfoScreen />} />
        <Route path="login/signUp/studentOrDentist" element={<SignUpStudentOrDentistScreen />} />
        <Route path="login/signUp/studentOrDentist/dentist" element={<SignUpDentistScreen />} />
        <Route path="login/signUp/studentOrDentist/student" element={<SignUpStudentScreen />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
