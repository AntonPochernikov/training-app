import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Navbar,
  Nav,
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
            <img className="logo" src={logo} width='48' height='48' />
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto" as="ul">
          <Nav.Item as="li">
            <NavLink
              className='navigation__link'
              activeClassName='navigation__link--active'
              to="/exercises"
            >
              Упражнения
            </NavLink>
          </Nav.Item>
          <Nav.Item as="li">
            <NavLink
              className='navigation__link'
              activeClassName='navigation__link--active'
              to="/tests"
            >
              Тесты
            </NavLink>
          </Nav.Item>
          <Nav.Item as="li">
            <NavLink
              className='navigation__link'
              activeClassName='navigation__link--active'
              to="/lessons"
            >
              Учебник
            </NavLink>
          </Nav.Item>
        </Nav>
      </Navbar>
    </Container>
  </header>
);

export default Header;
