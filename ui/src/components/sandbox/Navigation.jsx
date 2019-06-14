import React from 'react';
import './Sandbox.css';

export default class Navigation extends React.Component {
  handleNextButton = () => {
    this.props.clearTestOutput();
    this.props.getNextTask();
  }

  handlePrevButton = () => {
    this.props.clearTestOutput();
    this.props.getPrevTask();
  }

  render() {
    const {
      isFirst,
      isLast,
    } = this.props;

    return (
      <div className="container-navigation">
        <button
          className="btn-back"
          disabled={isFirst}
          onClick={this.handlePrevButton}
        >
            Назад
        </button>
        <button
          className="btn-next"
          disabled={isLast}
          onClick={this.handleNextButton}
        >
            Далее
        </button>
      </div>
    );
  }
}
