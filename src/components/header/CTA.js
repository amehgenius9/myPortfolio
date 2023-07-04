import React from 'react';
import CV from '../../assets//Victor Ameh CV.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Beep Me
      </a>
    </div>
  );
};

export default CTA;
