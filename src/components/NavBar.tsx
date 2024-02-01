import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import '../styles/NavBar.css';

const NavbarComponent = () => {
  const currentPath = window.location.pathname;
  return (
    <Navbar expand="lg" className="navbar-bg-body-tertiary">
      <Container className="navbar-container">
        <Navbar.Brand href="/"><img
                className="logo"
                src="../images/sars.png" />
                </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="links">
            <Nav.Link href="/" className={currentPath === '/' ? 'navbar-active' : ''}>
             HOME
            </Nav.Link>
            <Nav.Link href="/hobbies" className={currentPath === '/hobbies' ? 'navbar-active' : ''}>
              HOBBIES
            </Nav.Link>
            <Nav.Link href="/calc" className={currentPath === '/calc' ? 'navbar-active' : ''}>
              CALCULATOR
            </Nav.Link>
            <Nav.Link href="/json" className={currentPath === '/json' ? 'navbar-active' : ''}>
              JSON
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
