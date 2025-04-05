import React, { useState } from "react";
import  "./password.css"; // Import CSS module
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Install: npm install react-icons

const PasswordInput = ({ label, placeholder,onChange, errorMessage }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="container">
      <label className="label">{label}</label>
      <div className="inputWrapper">
        <input onChange={onChange}
          type={isVisible ? "text" : "password"}
          placeholder={placeholder}
          className="input"
        />
        <span className="icon" onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
};

export default PasswordInput;
