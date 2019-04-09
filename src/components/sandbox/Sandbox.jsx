import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import './Sandbox.css';
import {
  Button,
  Container,
  Row,
  Col,
} from 'react-bootstrap';

export default class Sandbox extends React.Component {
  handleCodeChange = (newValue) => {
    this.props.changeCode({ value: newValue });
  }

  render() {
    const { code } = this.props;
    return (
      <Container>
        <Row>
          <Col>
            <div className='sandbox'>
              <MonacoEditor
                language="javascript"
                theme="vs-dark"
                onChange={this.handleCodeChange}
                value={code}
                height='400px'
              />
              <Button variant="primary" className="btn-sandbox" size="sm">Отправить решение</Button>
            </div>
          </Col>
          <Col>
            <Row>
              <Col className="sandbox-col1">текст задачи</Col>
            </Row>
            <Row>
              <Col className="sandbox-col2">тест</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
