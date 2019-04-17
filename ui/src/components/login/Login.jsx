import React, { Fragment } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './Login.css';

const Login = (props) => {
  const handleOverlayClick = (e) => {
    e.preventDefault();
    props.hideModal();
  };
  const handleCloseButtonClick = (e) => {
    e.preventDefault();
    props.hideModal();
  };

  return (
    <Fragment>
      <Modal.Dialog className='login-modal-wrapper'>
        <Modal.Header>
          <Modal.Title>Вход</Modal.Title>
          <button type= 'reset' className='modal-button__close' onClick={handleCloseButtonClick}>
            ×
          </button>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Эл. почта</Form.Label>
              <Form.Control type="email" placeholder="Введите email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" placeholder="Введите пароль" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Войти
            </Button>
          </Form>
        </Modal.Body>
      </Modal.Dialog>
      <div className='login-modal-overlay' onClick={handleOverlayClick}>
      </div>
    </Fragment>
  );
};

export default Login;
