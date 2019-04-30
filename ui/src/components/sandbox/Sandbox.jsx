import React, { Suspense, lazy } from 'react';
import { Spinner } from 'react-bootstrap';
import './Sandbox.css';
import 'mocha/mocha.css';

const { mocha } = window;

const MonacoEditor = lazy(() => import('react-monaco-editor'));

const SandboxPreloader = () => (
  <div className='sandbox-spinner'>
    <Spinner animation='border' variant="secondary" />
  </div>
);

export default class Sandbox extends React.Component {
  handleTestButton = () => {
    document.getElementById('mocha').innerHTML = '';
    mocha.suite.suites = [];
    this.props.testSolution();
  }

  handleCodeChange = (newValue) => {
    this.props.changeCode({ value: newValue });
  }

  handleNextTask = id => () => {
    console.log(id + 1);
    if (id + 1) this.props.getCurrentTaskId({ taskId: id + 1 });
  }

  render() {
    const {
      code,
      currentTask: {
        id,
        name,
        complexity,
        description,
      },
      testStatus: {
        failedQuantity,
        state: status,
      },
    } = this.props;
    console.log(failedQuantity);
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
          <p className='exercise-name'>{name}</p>
          <p className='exercise-complexity'>Уровень: {complexity}</p>
          <div className='exercise-description'>{description}</div>
          <div className='test-output'>
            <div id='mocha' />
          </div>
          <button className="btn-sandbox" onClick={this.handleTestButton}>Проверить</button>
        </div>
        <div className="container-navigation">
          <button className="btn-back" >Назад</button>
          {
            failedQuantity === null &&
            status !== 'initial' &&
            <button className="btn-next" onClick={this.handleNextTask(id)}>Далее</button>
          }
        </div>
      </div>
    );
  }
}
