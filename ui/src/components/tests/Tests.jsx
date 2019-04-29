import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import './Tests.css';

export default class Tests extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  renderCards() {
    return <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Тема: </Card.Title>
        <Card.Text>
             Описание
        </Card.Text>
        <Button variant="primary">Начать тест</Button>
      </Card.Body>
    </Card>;
  }

  render() {
    return (
      <Container>
        <div className='tests-content'>
          <div className='heading'>
            <h2 className ='heading-main'>Тестирование знаний</h2>
            <b>На этой странице вы можете протестировать свои знания Javascript, выбрав один из тестов.</b>
          </div>
          <div className='cards'>
            {this.renderCards()}
          </div>
        </div>
      </Container>
    );
  }
}
