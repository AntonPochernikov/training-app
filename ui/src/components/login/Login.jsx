import React, { Fragment } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './Login.css';

// ждём email, password
// лучше сделать класс
const Login = ({ email, password, ...actions }) => {
  const handleOverlayClick = (e) => {
    e.preventDefault();
    actions.hideModal();
  };

  const handleCloseButtonClick = (e) => {
    e.preventDefault();
    actions.hideModal();
  };

  const handleEmailChange = (e) => {
    actions.changeEmail({ email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    actions.changePassword({ password: e.target.value });
  };

  const handleAddUser = () => {
    // сделать request, реализовать success в thunk`e логина
    actions.loginSuccess({ name: true });
  };

  return (
    <Fragment>
      <Modal.Dialog className="login-modal-wrapper">
        <Modal.Header>
          <Modal.Title>Вход</Modal.Title>
          <button type= "reset" className="modal-button__close" onClick={handleCloseButtonClick}>
            ×
          </button>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Эл. почта</Form.Label>
              <Form.Control
                type="email"
                placeholder="Введите email"
                onChange={handleEmailChange}
                value={email}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                type="password"
                placeholder="Введите пароль"
                onChange={handlePasswordChange}
                value={password}
              />
            </Form.Group>
            <Button variant="primary" type="button" onClick={handleAddUser}>
              Войти
            </Button>
          </Form>
        </Modal.Body>
      </Modal.Dialog>
      <div className="login-modal-overlay" onClick={handleOverlayClick} />
    </Fragment>
  );
};

export default Login;
