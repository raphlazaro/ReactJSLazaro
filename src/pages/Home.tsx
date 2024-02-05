import React from 'react';
import Layout from '../components/Layout';
import Carousel from '../components/CarouselHome';
import '../styles/Home.css';



const Home: React.FC = () => {
  const carouselImages = [
    "../images/one.png",
    "../images/two.png",
    "../images/three.png",
    "../images/four.png",
  ];

  return (
    <Layout>
      <div className="home-moving-background">
        <div className="home-content">
          <div className="home-carousel-container">
            <Carousel images={carouselImages} />
          </div>
          <div className="home-txt-content">
          <h3 className="home-digital-transformation">DIGITAL TRANSFORMATION</h3>
          <div className="home-line"></div>
          <h1 className="home-raphael">Raphael Daniel Lazaro</h1>
          <div className="home-line"></div>
          <h2 className="home-reactjs-activity">ReactJS | TypeScript </h2>
          <h3 className="home-activity-description">This is a simple activity which consists of a homepage, calculator, hobbies, and a JSON file.</h3>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
