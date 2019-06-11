import React, { Component } from 'react';
import { ListGroup, Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class ListLessons extends Component {
  toggleTopic = () => {
    const { lesson: { id: lessonId }, topic } = this.props;
    this.props.selectTopic({ id: (topic !== lessonId ? lessonId : null) });
  }

  isOpen() {
    const { lesson: { id: lessonId }, topic } = this.props;
    return (topic === lessonId);
  }

  render() {
    const {
      lesson:
      {
        paragraphs,
        chapter,
        name,
      },
    } = this.props;
    return <div onClick={ this.toggleTopic}>
      <ListGroup.Item>
        <p>{chapter} {name}</p>
        {paragraphs.map(({ id, name: pname, linkName }) => (
          <div className="paragraphs" key={id}>
            <Collapse in={this.isOpen()}>
              <Link
                className="paragraph__link" to={`/lessons-${linkName}`}
              >
                {id} {pname}
              </Link>
            </Collapse>
          </div>
        ))
        }
      </ListGroup.Item>
    </div>;
  }
}
