import React from 'react';
import { Carousel } from 'react-bootstrap';

interface HobbiesCarouselProps {
  images: string[];
}

const HobbiesCarousel: React.FC<HobbiesCarouselProps> = ({ images }) => {
  return (
    <Carousel className="mb-4">
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HobbiesCarousel;
