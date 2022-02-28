
import React from 'react';
import Container from 'react-bootstrap/Container';
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

import '../App.scss';

export function Header() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
    <Container>
    <Navbar.Brand href="#home">Rosalie Ross </Navbar.Brand>
    <a href='https://www.linkedin.com/in/rosalieross//'> 
    <img src='src/assets/linkedin-icon.png' alt='instagram' style={{width: '35px'}}/>
    </a>   
 <a href='https://www.kickstarter.com/projects/1444231543/dont-let-ice-creams-be-dreams/description'>
    <img src='src/assets/kickstarter-icon.png' alt='kickstarter'style={{width: '35px'}}/>
    </a>
    <a href='https://www.instagram.com/icecreamdreamsca/'> 
    <img src='src/assets/instagram-icon.jpeg' alt='instagram' style={{width: '35px'}}/>
    </a>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <LinkContainer to="/">
        <Nav.Link >Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/IceCream">
        <Nav.Link >Ice Cream Development</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
    </Container>
</Navbar>
  );
};

