import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Navbar,
  Nav,
  Container,
} from 'react-bootstrap';
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
            <Nav>
              <a href='/' onClick={handleLoginLink}>Войти</a>
              {/* <Nav.Item as="li">
                <NavLink
                  className='navigation__link'
                  activeClassName='navigation__link--active'
                  to="/login"
                >
                  Войти
                </NavLink>
              </Nav.Item> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
