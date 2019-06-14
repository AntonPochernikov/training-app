import React, { Component } from 'react';
import { ListGroup, Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class ListLessons extends Component {
  toggleTopic = () => {
    const { lesson: { id: lessonId }, topic } = this.props;
    this.props.selectTopic({ id: (topic !== lessonId ? lessonId : null) });
    this.props.getCurrentLessonId({ lessonId });
  }

  isOpen() {
    const { lesson: { id: lessonId }, topic } = this.props;
    return (topic === lessonId);
  }

  handleClick = id => () => {
    this.props.getCurrentParagraphId({ paragraphId: id });
  };

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
        {paragraphs.map(({
          id,
          number,
          name: pname,
          linkName,
        }) => (
        {paragraphs.map(({ id, name: pname, linkName }) => (
          <div className="paragraphs" key={id}>
            <Collapse in={this.isOpen()}>
              <Link
                onClick={this.handleClick(id)}
                className="paragraph__link" to={`/lessons-${linkName}`}
              >
                {number} {pname}
              </Link>
            </Collapse>
          </div>
        ))
        }
      </ListGroup.Item>
    </div>;
  }
}
