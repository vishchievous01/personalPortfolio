import React from "react";

function Skills({ skillSet }) {
  return (
    <div
      className="py-5 container-fluid text-center"
      id="skills"
      style={{ backgroundColor: "#1a1a1a", minHeight: "100vh" }}
    >
      <h1 className="text-white fw-light mb-4">Skills</h1>
      <div className="container">
        <div className="row justify-content-center" style={{ padding: "10px" }}>
          {skillSet.map((s, index) => (
            <div key={index} className="col-md-4 col-sm-6 col-12 mb-4">
              <div
                className="card shadow-sm border-0 p-3 text-center position-relative"
                style={{
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "12px",
                }}
              >
                {/* Skill Name */}
                <h5 className="fw-bold">{s.name}</h5>

                {/* Percentage Badge */}
                <span
                  className="badge bg-success position-absolute"
                  style={{
                    top: "10px",
                    right: "10px",
                    fontSize: "14px",
                    padding: "6px 10px",
                    borderRadius: "8px",
                  }}
                >
                  {s.percentage}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
