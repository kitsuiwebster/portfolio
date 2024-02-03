import React from 'react';
import '../assets/scss/components/TechnoIcon.scss';

const TechnoIcon = ({ src, alt, name, star1, star2, star3, star4, star5 }) => {
  return (
    <div className="techno-icon">
      <img src={src} alt={alt} className="techno-icon-image" />
      <p className="techno-icon-name">{name}</p>
      <div className='techno-icon-star-container'>
        <img loading="lazy" src={star1} alt="rating star" className="techno-icon-star" />
        <img loading="lazy" src={star2} alt="rating star" className="techno-icon-star" />
        <img loading="lazy" src={star3} alt="rating star" className="techno-icon-star" />
        <img loading="lazy" src={star4} alt="rating star" className="techno-icon-star" />
        <img loading="lazy" src={star5} alt="rating star" className="techno-icon-star" />
      </div>
    </div>
  );
};


export default TechnoIcon;
