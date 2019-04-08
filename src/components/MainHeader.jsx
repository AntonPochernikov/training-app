import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Image } from 'react-bootstrap';
import logo from '../images/logo.png';

import './MainHeader.css';

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand>
      <Link to="/home">
        <Image className="image" src={logo} />
      </Link>
    </Navbar.Brand>
    <Nav className="mr-auto" as="ul">
      <Nav.Item as="li">
        <Link className="link" to="/home" >Домой</Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link className="link" to="/sandbox">Песочница</Link>
      </Nav.Item>
    </Nav>
  </Navbar>
);

export default Header;
