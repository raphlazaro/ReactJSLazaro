// JSON.tsx
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import JsonCard from '../components/JsonCard';
import '../styles/JSON.css';

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
      <div className="json-container">
        <h3 className="json-desc">USERS LIST</h3>
        <Row className="json-row">
          {users.map((user) => (
            <Col key={user.id} md={4} className="json-col">
              <JsonCard user={user} />
            </Col>
          ))}
        </Row>
        </div>
    </Layout>
  );
}
