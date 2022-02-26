import React from 'react';
import './projects.css'

const ProjectCard = ({
    projectName,
    projectDescription,
    imageUrl,
    videoUrl,
    projectUrl
}) => {
  return (
    <div className="project-card">
      <div className="image-container">
      <div className='project-browser'>
            <div className='project-circle'></div>
            <div className='project-circle'></div>
            <div className='project-circle'></div>
        </div>
        <a
          href={projectUrl}
          target="_blank"
          rel="noreferrer"
          className="image-project-link"
        >
          <img src={imageUrl} alt="projectImg" className="project-img" />
        </a>
      </div>
      <div className="project-details">
        <p
          className="h3 project-heading"
        >
          {projectName}
        </p>
        <p className="project-info" >
          {projectDescription}{"  "}
          <a
            href={projectUrl}
            target="_blank"
            rel="noreferrer"
            className="project-link btn btn-link"
          >
            Visit project url
          </a>
        </p>
      </div>
    </div>
  );
}

export default ProjectCard