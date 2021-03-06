import React from "react";

export const SingleLineTextInput = ({
  id,
  type,
  placeholder,
  onChange,
  value,
}) => (
  <input
    className="appearance-none border rounded w-80 py-2 px-3 m-3 text-black bg-gray-100 leading-tight"
    id={id}
    type={type}
    placeholder={placeholder}
    onChange={onChange}
  ></input>
);
