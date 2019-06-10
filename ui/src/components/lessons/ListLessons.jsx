import React, { Component } from 'react';
import { ListGroup, Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class ListLessons extends Component {
  toggle = () => {
    this.props.toggle(this.props.chapter);
  }

  render() {
    const {
      paragraphs,
      chapter,
      name,
    } = this.props;
    return <div onClick={this.toggle}>
      <ListGroup.Item>
        <p >Глава {chapter}. {name}</p>
        {paragraphs.map(({ id, name: pname }) => (
          <div className="paragraphs" key={id}>
            <Collapse in={this.props.isOpen}><Link className="paragraph__link" to="#" >
              {id} {pname}
            </Link></Collapse>
          </div>
        ))
        }
      </ListGroup.Item> </div>;
  }
}
