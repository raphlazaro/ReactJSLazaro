import React from 'react';
import { Card } from 'react-bootstrap';

interface CardHobbiesProps {
  title: string;
  content: string;
}

const CardHobbies: React.FC<CardHobbiesProps> = ({ title, content }) => {
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

export default CardHobbies;
