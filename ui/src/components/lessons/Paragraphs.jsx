import React from 'react';
import './Lessons.css';

export default class Paragraphs extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    const { paragraph: { id, name } } = this.props;
    return (
      <div className="paragraphs-content">
        <div className="heading">
          <h2 className ="heading-main">{ id } {name}</h2>
        </div>
      </div>
    );
  }
}
