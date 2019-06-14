import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ListTasks.css';

export default class ListTasks extends Component {
  handleClick = id => () => {
    this.props.getCurrentTaskId({ taskId: id });
  }

  render() {
    const { tasks } = this.props;

    return tasks.map(({ id, name }) => (
      <div className="task" key={id}>
        <ListGroup.Item onClick={this.handleClick(id)}>
          <Link className="task__link" to="/sandbox" >
            {name}
          </Link>
        </ListGroup.Item>
      </div>
    ));
  }
}
