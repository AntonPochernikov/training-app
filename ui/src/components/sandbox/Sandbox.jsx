import React, { Suspense, lazy } from 'react';
import { Spinner } from 'react-bootstrap';
// import {
// Button,
// Container,
//   Row,
//   Col,
// } from 'react-bootstrap';
import './Sandbox.css';
import './mocha.min.css';

const MonacoEditor = lazy(() => import('react-monaco-editor'));

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
          <Suspense fallback={
            <div className='sandbox-spinner'>
              <Spinner animation='border' variant="secondary" />
            </div>
          }>
            <MonacoEditor
              language='javascript'
              theme='vs-light'
              onChange={this.handleCodeChange}
              value={code}
            /></Suspense>
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
