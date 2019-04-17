import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Navbar,
  Nav,
  Container,
} from 'react-bootstrap';

import routes from '../constants/routes.js';
import logo from '../images/logo.png';
import './MainHeader.css';

const Header = (props) => {
  const handleLoginLink = (e) => {
    e.preventDefault();
    props.showModal({ name: 'login' });
  };

  return (
    <header className='header'>
      <Container>
        <Navbar >
          <Navbar.Brand>
            <Link to="/home">
              <img className="logo" src={logo} width='48' height='48' />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" as="ul">
              {routes.map(({ name, route }) => (
                <Nav.Item key={name} as="li">
                  <NavLink
                    className='navigation__link'
                    to={route}
                  >
                    {name}
                  </NavLink>
                </Nav.Item>
              ))}
            </Nav>
            <Nav>
              <a className='navigation__link'
                href='/' onClick={handleLoginLink}
              >
                Войти
              </a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
