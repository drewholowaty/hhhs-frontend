import React from 'react';
import { Link, Outlet } from "react-router-dom";

export const SingleLineTextInput = ({ id, type, placeholder}) => (
    <input
        class="appearance-none border rounded w-80 py-2 px-3 m-3 text-black bg-gray-100 leading-tight"
        id={id}
        type={type} 
        placeholder={placeholder}
    >
    </input>
  );