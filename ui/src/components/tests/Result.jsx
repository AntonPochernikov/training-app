import React, { Component } from 'react';

export default class Result extends Component {
  render() {
    const { countResult, getQuestions } = this.props;
    return (
      <div className="result">
        <p> Вы ответили на { countResult } вопросов из {getQuestions.length} </p>
      </div>
    );
  }
}
