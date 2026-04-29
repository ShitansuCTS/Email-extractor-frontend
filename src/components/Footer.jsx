import React from "react";
import "./Footer.css";

function Footer() {
  const version = "v1.0.0"; // you can later make this dynamic

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Center */}
        <div className="footer-center">
          <span>Version: {version}</span>
        </div>

        {/* Right Side */}
        <div className="footer-right">
          <span>
            Powered by
            <a href="https://crushaderstech.com/" className="class-footer-link">
              {" "}
              <strong> Crushaders Tech</strong>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
