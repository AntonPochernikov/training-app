import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import './Tests.css';

export default class Tests extends React.Component {
  renderCards() {
    const { testTasks } = this.props;
    return testTasks.map(({ type }) => (
      <Card key={type} style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Тема: {type}</Card.Title>
          <Card.Text>
             Описание
          </Card.Text>
          <Button variant="primary">Начать тест</Button>
        </Card.Body>
      </Card>
    ));
  }

  render() {
    return (
      <Container>
        <div className="tests-content">
          <div className="heading">
            <h2 className ="heading-main">Тестирование знаний</h2>
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
