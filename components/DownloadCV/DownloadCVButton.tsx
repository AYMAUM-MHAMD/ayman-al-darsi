import React from "react";
import "./DownloadCVButton.css";

export default function DownloadCVButton() {
  return (
    <a
      href="./Blue Simple Professional CV Resume.pdf"
      download
      style={{ textDecoration: "none" }}
    >
      <div className="downloadcv-container">
        <img
          src="/downloadcv.svg"
          alt="Download CV"
          style={{ width: "50%", height: "50%" }}
        />
      </div>
    </a>
  );
}
