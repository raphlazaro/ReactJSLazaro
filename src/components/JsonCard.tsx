import React from 'react';
import { Card } from 'react-bootstrap';

interface UserCardProps {
  user: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
    };
  };
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Card className="json-card">
      <Card.Body className="json-card-body">
        <Card.Title className="json-card-title">{user.name}</Card.Title>
        <Card.Subtitle className="json-mb-2">ID: {user.id}</Card.Subtitle>
        <Card.Text className="json-contents">
          <strong>Username: </strong> {user.username}<br />
          <strong>Email: </strong> {user.email}<br />
          <strong>Street: </strong> {user.address.street}<br />
          <strong>Suite: </strong> {user.address.suite}<br />
          <strong>City: </strong> {user.address.city}<br />
          <strong>Zip Code: </strong> {user.address.zipcode}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
