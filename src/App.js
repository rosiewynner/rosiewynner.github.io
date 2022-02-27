import React from 'react';
import Container from 'react-bootstrap/Container';
import {Navbar, Nav} from 'react-bootstrap'
import {HomePage} from './pages/HomePage'
import {IceCream} from './pages/IceCream'
import { Routes, Route } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'

import './App.scss';

export function App() {
  return (

        <div className="app">
              <Navbar bg="light" expand="lg" fixed="top">
    <Container>
    <Navbar.Brand href="#home">Rosalie Ross</Navbar.Brand>
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
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/IceCream" element={<IceCream />} />
          </Routes>
        </div>
  );
};

