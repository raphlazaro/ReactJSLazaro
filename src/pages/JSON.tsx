// JSON.tsx
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/JSON.css'; // Import the CSS file

interface User {
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
}

export default function JSON() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <Container className="json-container">
        <h3 className="h3-json">USERS LIST</h3>
        <Row className="json-row">
          {users.map((user) => (
            <Col key={user.id} md={4} className="json-col">
              <Card className="json-card">
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Subtitle className="json-mb-2">ID: {user.id}</Card.Subtitle>
                  <Card.Text>
                    <strong>Username:</strong> {user.username}<br />
                    <strong>Email:</strong> {user.email}<br />
                    <strong>Street:</strong> {user.address.street}<br />
                    <strong>Suite:</strong> {user.address.suite}<br />
                    <strong>City:</strong> {user.address.city}<br />
                    <strong>Zip Code:</strong> {user.address.zipcode}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
}
