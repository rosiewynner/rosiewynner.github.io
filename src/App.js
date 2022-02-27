import React, { Component } from 'react';
import logo from './logo.svg';
import {Navbar, Nav} from 'react-bootstrap';
import '../public/favicon.ico';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Rosalie Ross</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Projects</Nav.Link>

      </Nav>
    </Navbar.Collapse>
</Navbar>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;