import React, { Suspense, lazy } from 'react';
import {
  Spinner,
  Tooltip,
  OverlayTrigger,
}
  from 'react-bootstrap';
import Navigation from './Navigation.jsx';
import Output from './Output.jsx';
import './Sandbox.css';
import 'mocha/mocha.css';

const { mocha } = window;

const MonacoEditor = lazy(() => import('react-monaco-editor'));

const SandboxPreloader = () => (
  <div className="sandbox-spinner">
    <Spinner animation="border" variant="secondary" />
  </div>
);
const renderTooltipResult = (
  <Tooltip>Показать результат выполнения функции</Tooltip>
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

  handleRunButton = () => {
    this.props.changeCurrentOutputTab({ outputTab: 'result' });
  }

  handleCodeChange = (newValue) => {
    this.props.changeCode({ value: newValue });
  }

  render() {
    const {
      code,
      currentTask,
      changeCurrentOutputTab,
      testSolution,
      currentOutputTab,
      getPrevTask,
      getNextTask,
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
          <OverlayTrigger placement="right" overlay={renderTooltipResult}>
            <button className= "btn-sandbox-run" onClick={this.handleRunButton}>Выполнить</button>
          </OverlayTrigger>
        </div>
        <Output
          // mocha={mocha}
          clearTestOutput={this.clearTestOutput}
          currentTask= {currentTask}
          changeCurrentOutputTab={changeCurrentOutputTab}
          testSolution={testSolution}
          currentOutputTab={currentOutputTab}
        />
        <Navigation
          clearTestOutput={this.clearTestOutput}
          getPrevTask={getPrevTask}
          getNextTask={getNextTask}
          isFirst = {isFirst}
          isLast = {isLast}
        />
      </div>
    );
  }
}
