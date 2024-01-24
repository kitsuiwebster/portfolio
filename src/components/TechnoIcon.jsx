import React from 'react';
import '../assets/scss/components/TechnoIcon.scss';

const TechnoIcon = ({ src, alt, name }) => {
  return (
    <div className="techno-icon">
      <img src={src} alt={alt} className="techno-icon-image" />
      <p className="techno-icon-name">{name}</p>
    </div>
  );
};

export default TechnoIcon;
