import React, { useState } from "react";
import { FaImage } from "react-icons/fa"; // Import image icon
import "./ImageUpload.css";

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  // Manually trigger file input when clicking the box
  const handleClick = () => {
    document.getElementById("file-upload").click();
  };

  return (
    <div className="upload-container">
      <label className="upload-label">Upload Image</label>
      <div className="upload-box" onClick={handleClick}>
        <label htmlFor="file-upload" className="upload-area">
          {selectedImage ? (
            <img src={selectedImage} alt="Uploaded" className="preview-image" />
          ) : (
            <FaImage className="upload-icon" />
          )}
        </label>
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          onChange={handleImageChange}
          onFocus={() => console.log("Input is focused!")} // Debugging
        />
      </div>
    </div>
  );
};

export default ImageUpload;
