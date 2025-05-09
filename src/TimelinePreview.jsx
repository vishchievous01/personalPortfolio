import React from "react";
import "./TimelinePreview.css";

const projects = [
  {
    title: "Bigmart E-Commerce",
    date: "May 2024",
    description:
      "Online store named BigMart was developed to provide a stunning shopping experience for internet users and has a wide range of features that are meant both for customers and admins.",
    tech: ["HTML", "CSS", "JavScript", "Python", "Django"],
  },
  {
    title: "CarWorld - Online Car Dealership Store",
    date: "June 2024",
    description:
      "CarWorld is an open marketplace for automobile which facilitates transaction by directly linking buyers and sellers. It also provides features that makes listing a vehicle as easy as possible for the users. ",
  },
  {
    title: "QuikSocial - Social Networking Site",
    date: "July 2024",
    description:
      "QuikSocial is a simple social site that allows people to post statuses, comments, and even friend other people.",
  },
];

const TimelinePreview = () => {
  return (
    <div
      className=" timeline-container align-items-center justify-content-center text-white"
      id="home"
      style={{
        minHeight: "92vh",
        width: "100vw",
        backgroundColor: "#1a1a1a",
        paddingTop: "70px",
        margin: 0,
        marginTop: "-90px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <h1
        className="text-white fw-light mb-4 py-2"
        style={{
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        }}
      >
        Works
      </h1>
      <div className="timeline-line">
        {projects.map((project, index) => (
          <div key={index} className="timeline-item">
            {/* <div className="timeline-dot" /> */}
            <div className="timeline-content">
              <div className=" d-flex justify-content-center ">
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                <h3>{project.title}</h3>
              </a>
              <p className="timeline-date">{project.date}</p>
              </div>
              <p>{project.description}</p>
              <div className="timeline-tags">
                {/* {project.tech.map((tag, idx) => (
                  <span key={idx} className="timeline-tag">
                    {tag}
                  </span>
                ))} */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelinePreview;
