import React, { Fragment } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './Login.css';

export default class Login extends React.Component {
   handleOverlayClick = (e) => {
     e.preventDefault();
     this.props.hideModal();
   };

   handleCloseButtonClick = (e) => {
     e.preventDefault();
     this.props.hideModal();
   };

   handleEmailChange = (e) => {
     this.props.changeEmail({ email: e.target.value });
   };

   handlePasswordChange = (e) => {
     this.props.changePassword({ password: e.target.value });
   };

   handleAddUser = () => {
     // сделать request, реализовать success в thunk`e логина
     this.props.loginSuccess({ name: true });
   };

   render() {
     const { email, password } = this.props;
     return (
       <Fragment>
         <Modal.Dialog className="login-modal-wrapper">
           <Modal.Header>
             <Modal.Title>Вход</Modal.Title>
             <button type= "reset" className="modal-button__close" onClick={this.handleCloseButtonClick}>
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
                   onChange={this.handleEmailChange}
                   value={email}
                 />
               </Form.Group>

               <Form.Group controlId="formBasicPassword">
                 <Form.Label>Пароль</Form.Label>
                 <Form.Control
                   type="password"
                   placeholder="Введите пароль"
                   onChange={this.handlePasswordChange}
                   value={password}
                 />
               </Form.Group>
               <Button variant="primary" type="button" onClick={this.handleAddUser}>
              Войти
               </Button>
             </Form>
           </Modal.Body>
         </Modal.Dialog>
         <div className="login-modal-overlay" onClick={this.handleOverlayClick} />
       </Fragment>
     );
   }
}
