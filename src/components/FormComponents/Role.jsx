import React from "react";
import "./Role.css"; // Import CSS

const RoleDropdown = ({ label, options, onChange }) => {
  return (
    <div className="dropdown-container">
      <label className="dropdown-label">{label}</label>
      <select className="dropdown-select" onChange={onChange} defaultValue="">
        <option value="" disabled>Select an Option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RoleDropdown;