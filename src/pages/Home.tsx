import React from 'react';
import Layout from '../components/Layout';
import { Carousel } from 'react-bootstrap';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="home-moving-background">
        <div className="home-content">
          <Carousel className="home-carousel mb-4">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../images/one.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../images/two.png" 
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../images/three.png"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../images/four.png"
                alt="Fourth slide"
              />
            </Carousel.Item>
          </Carousel>
          <div className="home-txt-content">
          <h3 className="home-digital-transformation">DIGITAL TRANSFORMATION</h3>
          <div className="home-line"></div>
          <h1 className="home-raphael">Raphael Daniel Lazaro</h1>
          <div className="home-line"></div>
          <h2 className="home-reactjs-activity">ReactJS Activity #1</h2>
          <h3 className="home-activity-description">This is a simple activity which consists of a homepage, calculator, hobbies, and a JSON file.</h3>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
