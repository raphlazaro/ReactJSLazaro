import React from 'react';
import { Carousel } from 'react-bootstrap';

interface HomeCarouselProps {
  images: string[];
}

const HomeCarousel: React.FC<HomeCarouselProps> = ({ images }) => {
  return (
    <Carousel className="home-carousel mb-4">
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HomeCarousel;
