import React, { useRef, useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="navbar bg-body-tertiary fixed-top px-3">
      <div className="container-fluid d-flex justify-content-between align-items-center py-2">
        {/* Name Centered */}
        <div className="flex-grow-1 text-center">
          <a className="navbar-brand m-0" href="index.html">
            <h6 className="fw-light mb-0" style={{ fontSize: "22px" }}>
              Vishnu Narayanan
            </h6>
          </a>
        </div>

        {/* Navigation Items - Right to Left Slide */}
        <div
          ref={menuRef}
          className={`menu-items d-flex align-items-center ${
            menuOpen ? "show" : ""
          }`}
        >
          <a className="nav-link mx-2" href="index.html">
            Home
          </a>
          <a className="nav-link mx-2" href="#">
            Works
          </a>
          <a className="nav-link mx-2" href="#">  
            Experience
          </a>
          <a className="nav-link mx-2" href="#">
            Downloads
          </a>
        </div>

        {/* Toggle Button - Smaller Icon & "X" When Open */}
        <button
          className="navbar-toggler small-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <span style={{ fontSize: "23px", fontWeight: "bold" }}>X</span>
          ) : (
            <span className="navbar-toggler-icon small-icon"></span>
          )}
        </button>
      </div>

      {/* CSS for Animation & Styling */}
      <style>
        {`
          .menu-items {
            position: absolute;
            right: 70px;
            top: 30%;
            transform: translateY(-50%);
            display: flex;
            gap: 15px;
            opacity: 0;
            transform: translateX(50px);
            transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
          }
          
          .menu-items.show {
            opacity: 1;
            transform: translateX(0);
          }

          .nav-link {
            font-size: 15px;
            font-weight: 300; /* Lighter font */
            color: black;
            text-decoration: none;
            padding: 6px 0; /* Adjusted padding for compact navbar */
            transition: color 0.3s;
          }

          .nav-link:hover {
            color:rgb(66, 66, 66);
          }

          .navbar-toggler {
            border: none;
            background: none;
            outline: none;
            padding: 4px;
          }

          .small-toggler {
            padding: 3px;
          }

          .small-icon {
            width: 22px;
            height: 22px;
          }

          .navbar {
            min-height: 50px; /* Reduced navbar height */
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;
