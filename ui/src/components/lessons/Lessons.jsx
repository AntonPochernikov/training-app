import React from 'react';
import ListLessons from './ListLessons.js';
import './Lessons.css';

export default class Lessons extends React.Component {
  renderLessons() {
    const {
      lessons,
    } = this.props;

    return lessons.map(((item, index) => <ListLessons
      key={index}
      lesson={item}
    />
    ));
  }

  render() {
    return (
      <div className="lessons-content">
        <h2 className="heading">Учебник Javascript</h2>
        <div className="textbook-content">
          {this.renderLessons()}
        </div>
      </div>
    );
  }
}
