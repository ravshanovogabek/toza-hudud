import React, { useState } from 'react';
import './modernSlider.css'; // Import CSS file for styling

// Import images from src/assets/images
import mikeImage from '../../assets/images/tozalik.jpg';
import samiteImage from '../../assets/images/spider.jpg';
import hashiImage from '../../assets/images/iva.jpg';
import kaityImage from '../../assets/images/diploma.jpg';
import laurenImage from '../../assets/images/orig.jpg';
import ryanImage from '../../assets/images/height.jpg';
import dakesImage from '../../assets/images/hasharot.jpg';

const teamMembers = [
  { name: 'Toza', role: 'Hudud', image: mikeImage },
  { name: 'Toza', role: 'Hudud', image: samiteImage },
  { name: 'Toza', role: 'Hudud', image: hashiImage },
  { name: 'Toza', role: 'Hudud', image: kaityImage },
  { name: 'Toza', role: 'Hudud', image: laurenImage },
  { name: 'Toza', role: 'Hudud', image: ryanImage },
  { name: 'Toza', role: 'Hudud', image: dakesImage },
];

const ModernSlider = () => {
  const [activeIndex, setActiveIndex] = useState(3); // Center card is initially active

  return (
    <div className="slider-container">
      {teamMembers.map((member, index) => {
        const distanceFromCenter = Math.abs(activeIndex - index);
        const scale = 1 - distanceFromCenter * 0.1; // Cards shrink as they move away from the center
        const isCentered = index === activeIndex;
        const translateX = (index - activeIndex) * 20; // Spacing between cards

        return (
          <div
            key={index}
            className={`slider-card ${isCentered ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
            style={{
              backgroundImage: `url(${member.image})`,
              transform: `scale(${scale}) translateX(${translateX}px) translateY(${isCentered ? '-10px' : '0'})`,
              filter: isCentered ? 'none' : 'grayscale(100%)',
              zIndex: 10 - distanceFromCenter, // Center card is on top
            }}
          >
            <div className="card-content">
              <h3>{member.name.toUpperCase()}</h3>
              {isCentered && <p>{member.role.toUpperCase()}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ModernSlider;
