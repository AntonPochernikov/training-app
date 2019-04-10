import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './HomePage.css';

export default class HomePage extends React.Component {
  renderCards() {
    const { exercises } = this.props;
    return exercises.map(({ complexity }) => (
      <Card key={complexity} style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{complexity} </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>описание</Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
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
            <h5>Выберите подходящий режим:</h5>
          </div>
          <div className='cards'>
            {this.renderCards()}
          </div>
        </div>
      </Container>
    );
  }
}
