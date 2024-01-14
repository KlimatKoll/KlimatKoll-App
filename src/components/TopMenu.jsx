import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

/* Komponent för navigationssystemet i appen */
const TopMenu = () => {
  const scrollToSection = (className) => {
    const elements = document.getElementsByClassName(className);

    if (elements.length > 0) {
      elements[0].scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  /* Renderar en navigationsmeny, som möjliggör scrollning till en sektion vid klick på en av menyns objekt */
    return (
        <Navbar bg="white" data-bs-theme="light" sticky="top" className="w-100 justify-content-center">
          <div class="logo"></div> {/* Logotypen renderas */}
        <Container>
          <Nav className="me-auto w-100 justify-content-center">
            <Nav.Link onClick={() => scrollToSection('fossileFuelsHeader')}>Koldioxidnivåer</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('globalTemperaturesHeader')}>Globala temperaturer</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('glaciarerHeader')}>Glaciärer</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('SjonivaerHeader')}>Havsnivåer</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('paverkanHeader')}>Hur det påverkar äldre</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('atgarderHeader')}>Åtgärder</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    );
}

export default TopMenu;
