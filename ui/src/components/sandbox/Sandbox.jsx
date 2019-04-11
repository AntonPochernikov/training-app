import React, { Suspense, lazy } from 'react';
import { Spinner } from 'react-bootstrap';
import './Sandbox.css';
import './mocha.min.css';

const MonacoEditor = lazy(() => import('react-monaco-editor'));

const SandboxPreloader = () => (
  <div className='sandbox-spinner'>
    <Spinner animation='border' variant="secondary" />
  </div>
);

export default class Sandbox extends React.Component {
  handleCodeChange = (newValue) => {
    this.props.changeCode({ value: newValue });
  }

  render() {
    const { code, currentTask: { description } } = this.props;
    return (
      <div className='workspace'>
        <div className='sandbox'>
          <Suspense fallback={<SandboxPreloader />}>
            <MonacoEditor
              language='javascript'
              theme='vs-light'
              onChange={this.handleCodeChange}
              value={code}
            />
          </Suspense>
        </div>
        {/* <Button variant="primary" className="btn-sandbox" size="sm">Отправить решение</Button> */}
        <div className='interface-box'>
          <div className='exercise-description'>{description}</div>
          <div className='test-output'>
            <p>Вывод тестов</p>
            <div id='mocha' />
          </div>
        </div>
      </div>
    );
  }
}
