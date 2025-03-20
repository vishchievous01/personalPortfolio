import React, { useState } from "react";
import laptopPicture from "./assets/images/laptop.jpg";
import Skills from "./Skills";

function AboutMe({ skillSet }) {
  const [showSkills, setShowSkills] = useState(false);

  return (
    <div
      className="py-5"
      id="aboutme"
      style={{ backgroundColor: "#1a1a1a", minHeight: "78vh", width: "100vw" }}
    >
      {/* Centered Heading */}
      <div className="text-center">
        <h1 className="text-white fw-light">About Me</h1>
      </div>

      <div className="container mt-5">
        <div className="row align-items-center">
          {/* Button Section - Left Side */}
          <div className="col-md-2 text-center">
            <button
              className="border-dark dark:border-dark-2 border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white dark:text-white hover:bg-gray-4 dark:hover:bg-dark-3 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5"
              onClick={() => setShowSkills(!showSkills)}
              style={{
                transition: "all 0.3s ease-in-out",
                transform: showSkills ? "scale(1.1)" : "scale(1)",
              }}
            >
              {showSkills ? "Hide Skills" : "Show Skills"}
            </button>
          </div>

          {/* Text Section - Center */}
          <div className="col-md-6 text-white text-md-start text-center">
            <p className="fs-5 fw-light lh-base">
              A passionate Full Stack Developer specializing in Python, Django,
              and React. With strong foundations in backend and frontend
              technologies, I love building dynamic, user-friendly applications
              that deliver seamless experiences. Whether it's crafting scalable
              web solutions or optimizing performance, I'm always eager to learn
              and innovate. Let's build something amazing together!
            </p>
          </div>

          {/* Image Section - Right Side */}
          <div className="col-md-4 text-center">
            <img
              src={laptopPicture}
              alt="aboutme-laptop"
              className="img-fluid rounded shadow"
              style={{
                maxWidth: "490px",
                filter: "grayscale(25%)",
                transition: "transform 0.6s ease-out, opacity 0.6s ease-out",
              }}
            />
          </div>
        </div>

        {/* Skills Section with Smooth Transition */}
        <div
          className="skills-container mt-4"
          style={{
            maxHeight: showSkills ? "600px" : "0px",
            opacity: showSkills ? "1" : "0",
            overflow: "hidden",
            transition: "max-height 0.6s ease-out, opacity 0.6s ease-out",
          }}
        >
          {showSkills && <Skills skillSet={skillSet} />}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
