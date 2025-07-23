import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './Otp.css';
import axios from "axios";
function Otp() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  const [timer, setTimer] = useState(110);
  const navigate = useNavigate();

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if ((e.key === "Backspace" || e.key === "Delete") && otp[index] === "") {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };


const handleSubmit = async () => {
  try {
    const response = await axios.post("http://localhost:5000/api/otp/verify", {
      otp: otp.join(""),
    });
    alert(response.data.message);
  } catch (error) {
    alert("Invalid OTP. Redirecting...");
    navigate("/404");
  }
};


  return (
    <div className="container">
      <div className="left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
          alt="Lock"
        />
        <div className="stars">* * * *</div>
      </div>
      <div className="right">
        <h2>Set New Password</h2>
        <p>Enter Your OTP, Check Your Mobile.</p>
        <div className="otp-box">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={data}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
            />
          ))}
        </div>
        <button className="submit-btn" onClick={handleSubmit}>
          Submit OTP
        </button>
        <div className="timer">{`0${Math.floor(timer / 60)}:${(timer % 60)
          .toString()
          .padStart(2, "0")}`}</div>
      </div>
    </div>
  );
}

export default Otp;
