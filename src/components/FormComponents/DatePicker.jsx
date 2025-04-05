import React, { useState } from "react";
import "./DatePicker.css"; // Import CSS

const DatePickerInput = ({ label }) => {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div className="date-picker-container">
      <label className="date-picker-label">
        {selectedDate ? `Selected Date: ${selectedDate}` : label}
      </label>
      <input
        type="date"
        className="date-picker-input"
        value={selectedDate}
        onChange={(event) => setSelectedDate(event.target.value)}
      />
    </div>
  );
};

export default DatePickerInput;



