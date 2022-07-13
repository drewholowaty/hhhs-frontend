import React from "react";
import { Link } from "react-router-dom";

// export const IntroButton = ({ label, to }) => (
//     <Link
//       className="flex justify-center w-36 py-4 px-5 m-8 font-medium rounded-full text-white bg-primary hover:bg-primary_light"
//       to={to}
//     >
//       {label}
//     </Link>
//   );
  
// export const TextButton = ({ label, to }) => (
// <Link className="flex font-medium text-secondary mx-5" to={to}>
//     {label}
// </Link>
// );

export const MenuButton = ({ label, to, src}) => (
    <Link
      className="flex flex-col justify-center w-32 h-32 p-5 font-semibold rounded-lg text-black text-center bg-primaryOrange hover:bg-primaryOrange_light drop-shadow-lg"
      to={to}
    >
        <img
            className=""
            src={src}
          />
      {label}
    </Link>
);
