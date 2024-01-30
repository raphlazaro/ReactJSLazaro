// Hobbies.tsx

import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import Layout from '../components/Layout';
import '../styles/Hobbies.css';

export default function Hobbies() {
  return (
    <Layout>
      <div className="hobbies-container">
        <Carousel className="mb-4">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../images/museums.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../images/digital.png"
              alt="Second SLide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../images/games.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>

        <h2 className="hobbies-txt">HOBBIES</h2>
        <p className="hobbies-paragraph">The following information that you will see in this page are my hobbies, which consists of online games, digital editing, rig building and going out with friends.</p>
        <div className="hobbies-card-container">
          <HobbiesFlippingCard title="ONLINE GAMES" content="I play online games such as Dota 2, Honkai Star Rail, and Tekken 8" />
          <HobbiesFlippingCard title="DIGITAL EDITING" content="I use Adobe Photoshop and Illustrator for editing." />
          <HobbiesFlippingCard title="RIG BUILDING" content="I create custom builds and laptop adjustments." />
          <HobbiesFlippingCard title="GOING OUT WITH FRIENDS" content="I like going to different coffee shops, finding new places to chill out, and visit museums that are far from the metro." />
        </div>
      </div>
    </Layout>
  );
}

interface FlippingCardProps {
  title: string;
  content: string;
}

const HobbiesFlippingCard: React.FC<FlippingCardProps> = ({ title, content }) => {
  return (
    <Card className="hobbies-flip-card">
      <div className="hobbies-flip-card-inner">
        <div className="hobbies-flip-card-front">
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
        </div>
        <div className="hobbies-flip-card-back">
          <Card.Body>
            <Card.Text>{content}</Card.Text>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};
