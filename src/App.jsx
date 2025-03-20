import { useState } from "react";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import Aboutme from "./Aboutme";
import Social from "./Social";
import Services from "./Services";

export const services = [
  {
    title: "Full-Stack Web Development",
    description: " Building Web Applications With Django And React.",
    image: "src/assets/images/icons/coding.png",
  },
  {
    title: "API Development",
    description: "Creating REST APIs Using Django REST Framework.",
    image: "src/assets/images/icons/cloud-api.png",
  },
  {
    title: "Frontend Development",
    description: "Designing & Building Modern UIs.",
    image: "src/assets/images/icons/front-end-programming.png",
  },
  {
    title: "Backend Development",
    description:
      "Handling Databases, Authentication, And Server Logic with Django.",
    image: "src/assets/images/icons/backend-coding.png",
  },
  {
    title: "Database Design & Management",
    description: "Working with SQLite, MySQL, or MongoDB",
    image: "src/assets/images/icons/database.png",
  },
  {
    title: "Deployment & Hosting",
    description: "Deploying Apps On Cloud",
    image: "src/assets/images/icons/deployment.png",
  },
  {
    title: "UI/UX Improvements",
    description: "Enhancing Web Design And User Experience.",
    image: "src/assets/images/icons/user-interface.png",
  },
  {
    title: "Third-Party Integrations",
    description: "Payment Gateways, Authentication",
    image: "src/assets/images/icons/management.png",
  },
  {
    title: "Bug Fixing & Optimization",
    description: "Debugging And Improving Performance.",
    image: "src/assets/images/icons/bug.png",
  },
  {
    title: "Freelance",
    description: "Helping Businesses With Their Web Solutions.",
    image: "src/assets/images/icons/freelancer.png",
  },
];

function App() {
  const skillSet = [
    { name: "HTML", percentage: "90%" },
    { name: "CSS", percentage: "80%" },
    { name: "JavaScript", percentage: "70%" },
    { name: "Python", percentage: "90%" },
    { name: "Django", percentage: "9s0%" },
    { name: "React", percentage: "80%" },
    { name: "Bootstrap", percentage: "80%" },
    { name: "Git", percentage: "90%" },
    { name: "GitHub", percentage: "80%" },
    { name: "SQLite", percentage: "70%" },
    { name: "REST APIs", percentage: "70%" },
  ];

  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Aboutme skillSet={skillSet}></Aboutme>
      <Services skillSet={skillSet}></Services>
      <Social></Social>
    </div>
  );
}

export default App;
