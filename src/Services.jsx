import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion } from "framer-motion";
import { services } from "./App";

const ServiceCard = ({ title, description, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="col-md-4 col-sm-6 col-12 mb-3">
      <div
        className="card shadow-sm border-0 p-4 position-relative"
        style={{
          backgroundColor: "#f8f9fa",
          borderRadius: "10px",
          minHeight: "50px", // Increased height
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "Segoe UI, Roboto, Helvetica, Arial, sans-serif",
          transition: "all 0.3s ease-in-out",
          position: "relative",
        }}
      >
        {/* Image, Title, and Button - Proper Flex Layout */}
        <div style={{ display: "flex", alignItems: "center", width: "100%", position: "relative" }}>
          <img
            src={image}
            alt={title}
            style={{
              width: "50px",
              height: "50px",
              objectFit: "contain",
              flexShrink: 0,
              marginRight: "10px",
            }}
          />
          <h6 className="fw-semibold mb-0" style={{ fontSize: "15px", color: "#333", margin: 0, flexGrow: 1 }}>
            {title}
          </h6>

          {/* Button is visible and positioned correctly */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 border-0 bg-success"
            style={{
              cursor: "pointer",
              fontSize: "11px",
              background: "none",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              right: "0px",
            }}
          >
            {isOpen ? <FaMinus /> : <FaPlus />}
          </button>
        </div>

        {/* Expandable Description */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ overflow: "hidden", marginTop: isOpen ? "6px" : "0" }}
        >
          <p className="text-gray-700 mb-0" style={{ fontSize: "14px", color: "#555", marginTop: "8px" }}>
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};



const ServicesList = () => {
  return (
    <div className="py-5 container-fluid text-center" id="services" style={{ backgroundColor: "#1a1a1a", minHeight: "100vh" }}>
      <h1 className="text-white fw-light mb-4 py-1" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}>
        Services
      </h1>
      <div className="container">
        <div className="row justify-content-center">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} image={service.image} />
          ))}
        </div>
      </div>
    </div>
  );
};


export default ServicesList;
