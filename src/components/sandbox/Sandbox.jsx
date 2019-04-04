import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import './Sandbox.css';

export default class Sandbox extends React.Component {
  handleCodeChange = (newValue) => {
    this.props.changeCode({ code: newValue });
  }

  render() {
    const { code } = this.props;
    return (
      <div className='sandbox'>
        <MonacoEditor
          language="javascript"
          theme="vs-dark"
          onChange={this.handleCodeChange}
          value={code}
        />
      </div>
    );
  }
}
