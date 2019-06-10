import React from 'react';
import ListLessons from './ListLessons.jsx';
import './Lessons.css';

export default class Lessons extends React.Component {
  toggle = (item) => { // название функции такое себе, лучше поменять
    const { collapse } = this.props;
    this.props.showHideParagraphs({ lesson: (collapse !== item ? item : null) });
  }

  renderLessons() {
    const { lessons, collapse } = this.props;

    return lessons.map(({ name, chapter, paragraphs }) => <ListLessons
    // лучше передать в компонент сразу весь объект, а не его поля(name, chapter, paragraphs)
      key={name}
      isOpen={collapse === chapter} // желательно как-то вынести логику сравнения
      toggle={this.toggle}
      paragraphs={paragraphs}
      name ={name}
      chapter={chapter}
    />);
  }

  render() {
    return (
      <div className="lessons-content">
        <div className="heading">
          <h2 className="heading-main">Учебник Javascript</h2>
          <b>На этой странице вы можете почитать про Javascript</b>
        </div>
        <div className="textbook-content">
          {this.renderLessons()}
        </div>
      </div>
    );
  }
}
