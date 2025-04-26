import React from "react";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notfound">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <button onClick={() => (window.location.href = "/")}>GO BACK HOME</button>
    </div>
  );
}

export default NotFound;
