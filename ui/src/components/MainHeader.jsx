import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Navbar,
  Nav,
  Image,
  Container,
} from 'react-bootstrap';
import logo from '../images/logo.png';
import './MainHeader.css';

const Header = () => (
  <header className='header'>
    <Container>
      <Navbar>
        <Navbar.Brand>
          <Link to="/home">
            <Image className="logo" src={logo} />
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto" as="ul">
          <Nav.Item as="li">
            <NavLink
              className='navigation__link'
              activeClassName='navigation__link--active'
              to="/home"
            >
              Домой
            </NavLink>
          </Nav.Item>
          <Nav.Item as="li">
            <NavLink
              className='navigation__link'
              activeClassName='navigation__link--active'
              to="/sandbox"
            >
              Песочница
            </NavLink>
          </Nav.Item>
        </Nav>
      </Navbar>
    </Container>
  </header>
);

export default Header;
