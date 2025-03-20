import React, { useState, useEffect } from "react";
import profilePicture from "./assets/images/vishnu.jpg";

function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate transformations based on scroll position
  const moveAmount = Math.min(scrollPosition * 0.3, 100); // Moves both elements outward
  const zoomEffect = 1 + Math.min(scrollPosition * 0.0008, 0.18); // More noticeable zoom effect
  const fadeOut = Math.max(1 - scrollPosition * 0.0025, 0); // Gradual fade out

  return (
    <div
      className="d-flex align-items-center justify-content-center text-white"
      id="home"
      style={{
        minHeight: "92vh",
        width: "100vw",
        backgroundColor: "#1a1a1a",
        paddingTop: "70px",
        margin: 0,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div className="container-fluid text-center">
        <div className="row align-items-center justify-content-center w-100 mx-0">
          {/* TEXT SECTION */}
          <div
            className="col-md-6 d-flex flex-column align-items-end"
            style={{
              transform: `translateX(-${moveAmount}px)`,
              opacity: fadeOut,
              transition: "transform 0.6s ease-out, opacity 0.6s ease-out",
              textAlign: "right",
            }}
          >
            <h1 className="mb-3 fw-light" style={{ fontSize: "4rem" }}>Hello,</h1>
            <h2 className="ms-3" style={{ fontSize: "3rem" }}>I'm</h2>
            <h1 className="display-2 text-uppercase fw-bold" style={{ fontSize: "5rem" }}>Vishnu</h1>
            <h3 className="mt-3" style={{ fontSize: "2.5rem" }}>A Full Stack Developer</h3>
            <h5 className="mt-2 text-muted" style={{ fontSize: "1.8rem" }}>
              <span style={{ color: "#fca311" }}>{"{"}</span>
              <span style={{ color: "#e63946" }}>Python</span>
              <span style={{ color: "white" }}> - </span>
              <span style={{ color: "#457b9d" }}>Django</span>
              <span style={{ color: "white" }}> - </span>
              <span style={{ color: "#48cae4" }}>React</span>
              <span style={{ color: "#fca311" }}>{"}"}</span>
            </h5>
          </div>

          {/* IMAGE SECTION */}
          <div
            className="col-md-6 d-flex justify-content-start"
            style={{
              transform: `translateX(${moveAmount}px) scale(${zoomEffect})`,
              opacity: fadeOut,
              transition: "transform 0.6s ease-out, opacity 0.6s ease-out",
            }}
          >
            <img
              src={profilePicture}
              className="img-fluid rounded shadow"
              alt="Vishnu"
              style={{
                maxWidth: "350px",
                borderRadius: "20px",
                transition: "transform 0.6s ease-out, opacity 0.6s ease-out",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
  