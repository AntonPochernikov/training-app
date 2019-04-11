
import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ListTasks.css';

export default class ListTasks extends Component {
  handleClick = (id) => {
    this.props.getCurrentTask(id);
  }

  render() {
    const { tasks } = this.props;
    return tasks.map(item => (
      <div className='task' key={item.id}>
        <Link className='link' to="/sandbox">
          <ListGroup.Item
            onClick={ () => this.handleClick(item.id)}
          >
            {item.name}
          </ListGroup.Item>
        </Link>
      </div>
    ));
  }
}
