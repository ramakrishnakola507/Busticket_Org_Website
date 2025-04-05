import React from "react";
import { FaGlobe } from "react-icons/fa"; // Import world icon
import "./FormElements.css";

const FormElements = () => {
  return (
    <div className="form-container">
      <h2>Form Elements</h2>
      <div className="form-section">
        <div className="input-fields">
          <h3>Input Fields</h3>
          <input type="text" placeholder="Default Input" />
          <input type="text" placeholder="Active Input" className="active-input" />
          <input type="text" placeholder="Disabled label" disabled />
        </div>

        <div className="textarea-fields">
          <h3>Textarea Fields</h3>
          <textarea placeholder="Default textarea"></textarea>
          <textarea placeholder="Active textarea" className="active-textarea"></textarea>
          <textarea placeholder="Disabled textarea" disabled></textarea>
        </div>

        <div className="toggle-switch">
          <h3>Toggle switch input</h3>
          <input type="checkbox" className="toggle" />
        </div>

        <div className="date-picker">
          <h3>Time and date</h3>
          <input type="date" className="special-input" />
        </div>

        <div className="file-upload">
          <h3>File upload</h3>
          <input type="file" />
        </div>

        <div className="checkbox-radio">
          <h3>Checkbox and radio</h3>
          <input type="checkbox" /> Checkbox Text <br />
          <input type="radio" name="radio" /> Radio Text
        </div>

        <div className="select-input">
          <h3>Select input</h3>
          <div className="select-container">
            <FaGlobe className="select-icon" />
            <select className="special-input">
              <option>Select Country</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>India</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormElements;