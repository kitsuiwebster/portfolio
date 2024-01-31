import React from 'react';
import '../assets/scss/components/ProjectIcon.scss';

const ProjectIcon = ({ src, alt }) => {
  const shouldRenderIcon = src;

  return (
    <div className="project-icon">
      {shouldRenderIcon && <img src={src} alt={alt} className="project-icon-image" />}
    </div>
  );
};

export default ProjectIcon;
