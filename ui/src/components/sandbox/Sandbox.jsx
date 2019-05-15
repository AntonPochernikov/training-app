import React, { Suspense, lazy } from 'react';
import { Spinner } from 'react-bootstrap';
import './Sandbox.css';
import 'mocha/mocha.css';

const { mocha } = window;

const MonacoEditor = lazy(() => import('react-monaco-editor'));

const SandboxPreloader = () => (
  <div className="sandbox-spinner">
    <Spinner animation="border" variant="secondary" />
  </div>
);

export default class Sandbox extends React.Component {
  constructor(props) {
    super(props);
    this.monaco = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('resize', this.adjustEditor);
  }

  componentWillUnmount() {
    document.removeEventListener('resize', this.adjustEditor);
  }

  adjustEditor = () => {
    this.monaco.current.editor.layout();
  }

  clearTestOutput = () => {
    document.getElementById('mocha').innerHTML = '';
    mocha.suite.suites = [];
  };

  handleTestButton = () => {
    this.clearTestOutput();
    this.props.testSolution();
  }

  handleCodeChange = (newValue) => {
    this.props.changeCode({ value: newValue });
  }

  handleNextButton = () => {
    this.clearTestOutput();
    this.props.clearCode();
    this.props.getNextTask();
  }

  handlePrevButton = () => {
    this.clearTestOutput();
    this.props.clearCode();
    this.props.getPrevTask();
  }

  render() {
    const {
      code,
      currentTask: {
        name,
        complexity,
        description,
      },
      isFirst,
      isLast,
    } = this.props;
    return (
      <div className="workspace">
        <div className="sandbox">
          <Suspense fallback={<SandboxPreloader />}>
            <MonacoEditor
              ref={this.monaco}
              language="javascript"
              theme="vs-light"
              onChange={this.handleCodeChange}
              value={code}
            />
          </Suspense>
        </div>
        {/* <Button variant="primary" className="btn-sandbox" size="sm">Отправить решение</Button> */}
        <div className="interface-box">
          <p className="exercise-name">{name}</p>
          <p className="exercise-complexity">Уровень: {complexity}</p>
          <div className="exercise-description">{description}</div>
          <div className="test-output">
            <div id="mocha"/>
          </div>
          <button className="btn-sandbox" onClick={this.handleTestButton}>Проверить</button>
        </div>
        <div className="container-navigation">
          <button
            className="btn-back"
            disabled={isFirst}
            onClick={this.handlePrevButton}
          >
            Назад
          </button>
          <button
            className="btn-next"
            disabled={isLast}
            onClick={this.handleNextButton}
          >
            Далее
          </button>
        </div>
      </div>
    );
  }
}
