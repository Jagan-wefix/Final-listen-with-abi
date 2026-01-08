import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Headphones } from 'lucide-react';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const closeNav = () => setExpanded(false);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="navbar-custom" expanded={expanded} onToggle={(next) => setExpanded(next)}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-custom" onClick={closeNav}>
          <Headphones size={28} className="me-2" />
          Listen with Abi Podcast
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom" onClick={closeNav}>
              Home
            </Nav.Link>
            
            <Nav.Link as={Link} to="/spotify-fire" className="nav-link-custom" onClick={closeNav}>
              Spotify Fire
            </Nav.Link>
            <Nav.Link as={Link} to="/thoughts" className="nav-link-custom" onClick={closeNav}>
              Thoughts
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-custom" onClick={closeNav}>
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;