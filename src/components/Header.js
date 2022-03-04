
import React from 'react';
import Container from 'react-bootstrap/Container';
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import InstaIcon from '../assets/instagram-icon.jpeg'
import KickStartIcon from '../assets/kickstarter-icon.png'
import LinkedInIcon from '../assets/linkedin-icon.png'

import '../App.scss';

export function Header() {
  return (
    <div style={{height:'86px'}}>
    <Navbar bg="light" expand="lg" fixed="top">
    <Container>
    <Navbar.Brand href="#home">Rosalie Ross </Navbar.Brand>
    <a href='https://www.linkedin.com/in/rosalieross//'> 
    <img src={LinkedInIcon} alt='linkedin' style={{width: '35px'}}/>
    </a>   
 <a href='https://www.kickstarter.com/projects/1444231543/dont-let-ice-creams-be-dreams/description'>
    <img src={KickStartIcon} alt='kickstarter'style={{width: '35px'}}/>
    </a>
    <a href='https://www.instagram.com/icecreamdreamsca/'> 
    <img src={InstaIcon} alt='instagram' style={{width: '35px'}}/>
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
        <LinkContainer to="/GalleryWall">
        <Nav.Link >Gallery Wall</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
    </Container>
</Navbar>
</div >
  );
};

