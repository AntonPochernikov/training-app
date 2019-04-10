import React from 'react';
import MonacoEditor from 'react-monaco-editor';
// import {
// Button,
// Container,
//   Row,
//   Col,
// } from 'react-bootstrap';
import './Sandbox.css';
import './mocha.min.css';

export default class Sandbox extends React.Component {
  handleCodeChange = (newValue) => {
    this.props.changeCode({ value: newValue });
  }

  render() {
    const { code } = this.props;
    return (
      <div className='workspace'>
        <div className='sandbox'>
          <MonacoEditor
            language='javascript'
            theme='vs-light'
            onChange={this.handleCodeChange}
            value={code}
          />
        </div>
        {/* <Button variant="primary" className="btn-sandbox" size="sm">Отправить решение</Button> */}
        <div className='interface-box'>
          <div className='exercise-description'>
            Описание задачи
          </div>
          <div className='test-output'>
            Вывод тестов
          </div>
        </div>
      </div>
    );
  }
}
