import React, { Fragment } from 'react';
import { Row, Card } from 'react-bootstrap';

export default class HomePage extends React.Component {
  createCard = () => {
    const { exercises } = this.props;
    return exercises.map(({ complexity }) => (
      <Card key={complexity} style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{complexity} </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
              описание
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    ));
  }

  render() {
    return (
      <Fragment>
        <Row>
          {this.createCard()}
        </Row>
      </Fragment>
    );
  }
}
