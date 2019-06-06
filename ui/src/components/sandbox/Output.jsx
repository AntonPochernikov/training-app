import React from 'react';
import {
  Tooltip,
  OverlayTrigger,
  Tabs,
  Tab,
}
  from 'react-bootstrap';
import './Sandbox.css';
import 'mocha/mocha.css';

const renderTooltipTest = (
  <Tooltip>Проверить правильность решения с помощью тестов </Tooltip>
);

export default class Output extends React.Component {
  handleSelectTab = (key) => {
    this.props.getCurrentOutputTab({ outputTab: key });
  };

  handleTestButton = () => {
    this.props.clearTestOutput();
    this.props.testSolution();
    this.props.getCurrentOutputTab({ outputTab: 'test' });
  }

  render() {
    const {
      currentTask: {
        name,
        complexity,
        description,
      },
      currentOutputTab,
    } = this.props;
    return (
      <div className="interface-box">
        <p className="exercise-name">{name}</p>
        <p className="exercise-complexity">Уровень: {complexity}</p>
        <div className="exercise-description">{description}</div>
        <div className="output">
          <Tabs activeKey={currentOutputTab} onSelect={this.handleSelectTab} id="controlled-tab">
            <Tab eventKey="test" title="Тест">
              <div className="test-output">
                <div id="mocha"/>
              </div>
            </Tab>
            <Tab eventKey="result" title="Результат">
              выполнение
            </Tab>
          </Tabs>
        </div>
        <OverlayTrigger placement="right" overlay={renderTooltipTest}>
          <button className="btn-sandbox-test" onClick={this.handleTestButton}>Проверить</button>
        </OverlayTrigger>
      </div>
    );
  }
}
