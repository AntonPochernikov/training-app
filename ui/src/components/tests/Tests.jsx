import React from 'react';
import { Card, Container } from 'react-bootstrap';
import StartTestLink from './StartTestLink.jsx';
import './Tests.css';

export default class Tests extends React.Component {
  handleClick = id => () => {
    this.props.getCurrentTestId({ testId: id });
  };

  renderCards() {
    const { testTasks, getCurrentTestId } = this.props;
    return testTasks.map(({ type, tests }) => (
      <Card key={type} style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Тема: {type}</Card.Title>
          <Card.Text>
            Описание
          </Card.Text>
          <StartTestLink
            getCurrentTestId={getCurrentTestId}
            tests={tests}
            type={type}
          />
        </Card.Body>
      </Card>
    ));
  }

  render() {
    return (
      <Container>
        <div className="tests-content">
          <div className="heading">
            <h2 className="heading-main">Тестирование знаний</h2>
            <b>На этой странице вы можете протестировать свои знания Javascript, выбрав один из тестов.</b>
          </div>
          <div className="cards">
            {this.renderCards()}
          </div>
        </div>
      </Container>
    );
  }
}
