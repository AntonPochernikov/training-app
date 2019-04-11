import React from 'react';
import MonacoEditor from 'react-monaco-editor';
// import {
// Button,
// Container,
//   Row,
//   Col,
// } from 'react-bootstrap';
import './Sandbox.css';

export default class Sandbox extends React.Component {
  handleCodeChange = (newValue) => {
    this.props.changeCode({ value: newValue });
  }

  render() {
    const { code, currentTask } = this.props;
    console.log(currentTask);
    const { description } = currentTask;
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
            {description}
          </div>
          <div className='test-output'>
            Вывод тестов
          </div>
        </div>
      </div>
    );
  }
}
