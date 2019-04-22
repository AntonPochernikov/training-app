import React from 'react';
import { Card, Container, ListGroup } from 'react-bootstrap';
import ListTasks from './ListTasks.jsx';
import './Exercises.css';

export default class HomePage extends React.Component {
  renderCards() {
    const { exercises, getCurrentTaskId } = this.props;
    return exercises.map(({ complexity, tasks }) => (
      <Card key={complexity} style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Уровень: {complexity}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Описание уровня</Card.Subtitle>
          <ListGroup variant="flush">
            <ListTasks
              getCurrentTaskId={getCurrentTaskId}
              tasks={tasks} />
          </ListGroup>
        </Card.Body>
      </Card>
    ));
  }

  render() {
    return (
      <Container>
        <div className='homepage-content'>
          <div className='heading'>
            <h2 className ='heading-main'>Добро пожаловать в интерактивный задачник JavaScript</h2>
            <b>Выберите подходящий режим:</b>
          </div>
          <div className='cards'>
            {this.renderCards()}
          </div>
        </div>
      </Container>
    );
  }
}
