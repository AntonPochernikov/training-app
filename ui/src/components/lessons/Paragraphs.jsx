import React from 'react';
import './Lessons.css';
import Navigation from './Navigation.js';

export default class Paragraphs extends React.Component {
  render() {
    const {
      paragraph: { id, number, name },
    } = this.props;
    return (
      <div className="paragraphs-content">
        <div className="heading">
          <h2 className="heading-main">{number} {name}</h2>
        </div>
        <Navigation
          id={id}
        />
      </div>
    );
  }
}
