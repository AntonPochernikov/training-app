import React, { Component } from 'react';
import Gauge from 'react-svg-gauge';
import {
  Container,
  Row,
  Col,
  Table,
} from 'react-bootstrap';
import './Result.css';

export default class Result extends Component {
  handleClick = () => {
    this.props.history.push('/tests');
  };

  render() {
    const { countResult, getQuestions, getCurrentTest: { name } } = this.props;
    const valueToPersent = Math.round(countResult / getQuestions.length * 100);
    return (
      <>
      <div className="heading-result">
        <h2 className ="heading-main">Поздравляем!</h2>
        <b className="heading-second">Вы прошли тест: {`"${name}"`}</b>
      </div>
      <div className="result">
        <div className="title">Результат</div>
        <div className="result-content">
          <Container>
            <Row>
              <Col md="auto">
                <div className="gauge">
                  <Gauge value={valueToPersent}
                    width={220}
                    height={200}
                    max= {100}
                    label="Выполнено %"
                    color ={'green'}
                  />
                </div>
              </Col>
              <Col>
                <div className ="table-result">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Показатель</th>
                        <th>Значение</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Количество правильных ответов</td>
                        <td>{ countResult }</td>
                      </tr>
                      <tr>
                        <td>Количество вопросов</td>
                        <td>{getQuestions.length}</td>
                      </tr>
                      <tr>
                        <td>Процент</td>
                        <td >{valueToPersent}</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <button
                  type="button"
                  onClick={this.handleClick}
                >
                К тестам
                </button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      </>
    );
  }
}
