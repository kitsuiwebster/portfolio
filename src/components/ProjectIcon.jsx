import React from 'react';
import '../assets/scss/components/ProjectIcon.scss';

const ProjectIcon = ({ src, alt, name }) => {
  return (
    <div className="project-icon">
      <img src={src} alt={alt} className="project-icon-image" />
    </div>
  );
};


export default ProjectIcon;
