import React from "react";

function Footer() {
  return (
    <div
      className="text-items-center text-white" id="footer"
      style={{ backgroundColor: "#1a1a1a", padding: "20px 0" }}
    >
      <h6 className="mb-3">Made with ❤️ in India</h6>
      <div className="justify-content-center d-flex">
      <a href=""><p style={{color: "#828282"}}>VISHNU NARAYANAN</p></a>
      <p style={{ color: "#828282" }}> © all rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
