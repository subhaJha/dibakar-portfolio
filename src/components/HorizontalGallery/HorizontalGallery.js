import React from 'react';
import Marquee from 'react-marquee-slider';
import times from 'lodash/times';
import './HorizontalGallery.css';

const HorizontalGallery = () => {
  const brands = [
    { id: 1, src: 'https://via.placeholder.com/150x80?text=Brand+1' },
    { id: 2, src: 'https://via.placeholder.com/150x80?text=Brand+2' },
    { id: 3, src: 'https://via.placeholder.com/150x80?text=Brand+3' },
    { id: 4, src: 'https://via.placeholder.com/150x80?text=Brand+4' },
    { id: 5, src: 'https://via.placeholder.com/150x80?text=Brand+5' },
    { id: 6, src: 'https://via.placeholder.com/150x80?text=Brand+6' },
  ];

  return (
    <div className="brand-promotion-container">
      <h2 className="text-center">recent works
      </h2>
      <Marquee velocity={25} minScale={0.7} resetAfterTries={5}>
        {times(brands.length, Number).map((index) => (
          <div key={brands[index].id} className="brand-logo">
            <img src={brands[index].src} alt={`Brand ${brands[index].id}`} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};
export default HorizontalGallery;
