import React from "react";

const InputGroup = ({ label, placeholder, className, name }) => {
  return (
    <div className={`flex flex-col gap-3 ${className && className}`}>
      <label htmlFor={name} className="text-xl font-semibold">
        {label}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        className="bg-white rounded-md text-base p-3 placeholder:text-[#1B1A1A]/60"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputGroup;
