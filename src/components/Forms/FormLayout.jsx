import React from "react";
import "./FormLayout.css";

const FormLayout = () => {
  return (
    <div className="form-page">
      <h1 className="form-title">Form Layout</h1>
      
      <div className="form-container">
        {/* Contact Form */}
        <div className="form-box">
          <h2>Contact Form</h2>
          <form>
            <div className="input-group">
              <div className="input-box">
                <label>First name</label>
                <input type="text" placeholder="Enter your first name" />
              </div>
              <div className="input-box">
                <label>Last name</label>
                <input type="text" placeholder="Enter your last name" />
              </div>
            </div>
            
            <div className="input-box">
              <label>Email <span className="required">*</span></label>
              <input type="email" placeholder="Enter your email address" />
            </div>
            
            <div className="input-box">
              <label>Seat Number</label>
              <input type="Number" placeholder="Enter Seat Number" />
            </div>

            <div className="input-box">
              <label>Message</label>
              <textarea placeholder="Type your message"></textarea>
            </div>

            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="form-box">
          <h2>Sign In Form</h2>
          <form>
            <div className="input-box">
              <label>Email</label>
              <input type="email" placeholder="Enter your email address" />
            </div>

            <div className="input-box">
              <label>Password</label>
              <input type="password" placeholder="Enter password" />
            </div>

            <div className="checkbox-group">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
              <a href="#" className="forgot-link">Forgot password?</a>
            </div>

            <button type="submit" className="btn-submit">Sign In</button>
          </form>
        </div>

        {/* Sign Up Form */}
        <div className="form-box">
          <h2>Sign Up Form</h2>
          <form>
            <div className="input-box">
              <label>Name</label>
              <input type="text" placeholder="Enter your full name" />
            </div>

            <div className="input-box">
              <label>Email</label>
              <input type="email" placeholder="Enter your email address" />
            </div>

            <div className="input-box">
              <label>Password</label>
              <input type="password" placeholder="Enter password" />
            </div>

            <div className="input-box">
              <label>Re-type Password</label>
              <input type="password" placeholder="Re-enter password" />
            </div>

            <button type="submit" className="btn-submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormLayout
