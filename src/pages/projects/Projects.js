import React from "react";
import "./projects.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import { projectsData } from "../../assets/projectsData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  console.log(projectsData);

  return (
    <div className="main-container">
      <Header
        heading={"My Projects"}
        details={"Hey!, checkout my work below."}
      />

      <div className="project-wrapper">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.imageUrl}
            projectName={project.projectName}
            projectDescription={project.projectDescription}
            imageUrl={project.imageUrl}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>

      <Footer phrase="Checkout my" link="skills" toAddress="skills" />
    </div>
  );
};

export default Projects;
