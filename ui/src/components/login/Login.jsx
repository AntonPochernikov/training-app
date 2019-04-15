import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './Login.css';

class Login extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    console.log(this.props);
    return (
      <div className='login-modal-overlay'>
        <div className='login-modal-wrapper'>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Вход</Modal.Title>
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
          </Modal.Dialog>;
        </div>
      </div>
    );
  }
}
export default Login;
