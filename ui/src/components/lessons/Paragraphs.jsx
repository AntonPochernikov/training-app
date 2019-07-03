import React from 'react';
import ReactMarkdown from 'react-markdown';
import './Lessons.css';
import Navigation from './Navigation.js';

export default class Paragraphs extends React.Component {
  render() {
    const {
      paragraph: {
        id,
        number,
        name,
        text,
      },
    } = this.props;
    return (
      <div className="paragraphs-content">
        <div className="heading">
          <h2 className="heading-main">{number} {name}</h2>
          <ReactMarkdown className= "paragraph-text" source={text} />
        </div>
        <Navigation
          id={id}
        />
      </div>
    );
  }
}
