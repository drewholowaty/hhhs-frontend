import React from 'react';
import { Link, Outlet } from "react-router-dom";

export const IntroButton = ({ label, to }) => (
    <Link
      className="flex justify-center w-36 py-4 px-5 m-8 font-medium rounded-full text-white bg-primary hover:bg-primary_light"
      to={to}
    >
      {label}
    </Link>
  );
  