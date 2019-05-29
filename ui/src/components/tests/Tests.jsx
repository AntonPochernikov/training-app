import React from 'react';
import { Card, Container } from 'react-bootstrap';
import StartTestLink from './StartTestLink.jsx';
import './Tests.css';

export default class Tests extends React.Component {
  handleClick = id => () => {
    this.props.getCurrentTestId({ testId: id });
  };

  renderCards() {
    const { testTasks, getCurrentTestId, getCurrentQuestionId } = this.props;

    return testTasks.map(({ type, tests }) => (
      <Card className = "card-test" key={type}>
        <Card.Body>
          <Card.Title>Тема: {type}</Card.Title>
          <Card.Text>
            Описание
          </Card.Text>
          <StartTestLink
            getCurrentTestId={getCurrentTestId}
            getCurrentQuestionId={getCurrentQuestionId}
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
