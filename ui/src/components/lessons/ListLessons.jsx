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
    } = this.props; // сюда должен приходить наш объект с полями, здесь его можно будет деструктуризировать

    return <div onClick={this.toggle}>
      <ListGroup.Item>
        <p>Глава {chapter}. {name}</p> {/* что-то сделать с точкой. А то так не принято её ставить */}
        {paragraphs.map(({ id, name: pname }) => (
          <div className="paragraphs" key={id}>
            <Collapse in={this.props.isOpen}><Link className="paragraph__link" to="#" >
              {/* this.props лучше сделать выше, где name и дуругие. Плюс перенесни компонент линк на новую строку,
              а то я не сразу его заметил */}
              {id} {pname}
            </Link></Collapse>
          </div>
        ))
        }
      </ListGroup.Item> </div>;
  }
}
