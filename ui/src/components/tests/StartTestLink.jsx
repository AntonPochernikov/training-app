import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class StartTestLink extends Component {
  handleClick = id => () => {
    this.props.getCurrentTestId({ testId: id });
  }

  render() {
    const { tests, type } = this.props;
    return tests.map(({ id }) => (
      <div className="test" key={id}>
        <Link to={`/tests-${type}`}
          onClick={this.handleClick(id)}
        >
          Начать тест
        </Link>
      </div>
    ));
  }
}
