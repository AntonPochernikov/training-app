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

  const handleEmailChange = (e) => {
    props.changeEmail({ email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    props.changePassword({ password: e.target.value });
  };

  const handleAddUser = () => {
    props.loginSuccess({ name: true });
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
              <Form.Control type="email"
                placeholder="Введите email"
                onChange={handleEmailChange}
                value={props.email}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password"
                placeholder="Введите пароль"
                onChange={handlePasswordChange}
                value={props.password}/>
            </Form.Group>
            <Button variant="primary" type="button" onClick={handleAddUser}>
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
