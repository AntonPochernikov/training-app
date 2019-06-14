import React, { Component } from 'react';
import { ListGroup, Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ListLessons.css';

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

  handleClickParagraph = id => () => {
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

    return (
      <div onClick={this.toggleTopic}>
        <ListGroup.Item>
          <p className="chapter">{chapter} {name}</p>
          <Collapse className="paragraphs" in={this.isOpen()}>
            <div>
             {paragraphs.map(({
               id,
               number,
               name: pname,
               linkName,
             }) => (
                <Link key={id}
                  onClick={this.handleClickParagraph(id)}
                >
                  {number} {pname}
                </Link>
              ))
              }
            </div>
          </Collapse>
        </ListGroup.Item>
      </div>
    );
  }
}
