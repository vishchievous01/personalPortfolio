import React from "react";
import "./TimelinePreview.css";

const projects = [
  {
    title: "Portfolio Website",
    date: "March 2025",
    description:
      "A personal portfolio built using React and custom CSS to showcase my skills, projects, and contact details.",
    tech: ["React", "CSS", "Framer Motion"],
  },
  {
    title: "Task Manager API",
    date: "Feb 2025",
    description:
      "A RESTful API with Django for managing daily tasks, including authentication and CRUD operations.",
    tech: ["Django", "DRF", "JWT Auth"],
  },
  {
    title: "Blog Platform",
    date: "Jan 2025",
    description:
      "A full-stack blog platform where users can read and write posts. Features include markdown support and comment system.",
    tech: ["React", "Django", "SQLite"],
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
        overflow: "hidden",
        position: "relative",
      }}
    >
      <h1
        className="text-white fw-light mb-4 py-1"
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
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{project.title}</h3>
              <p className="timeline-date">{project.date}</p>
              <p>{project.description}</p>
              <div className="timeline-tags">
                {project.tech.map((tag, idx) => (
                  <span key={idx} className="timeline-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelinePreview;
