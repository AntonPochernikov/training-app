import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import './Sandbox.css';

const Sandbox = () => (
  <div className='sandbox'>
    <MonacoEditor
      language="javascript"
      theme="vs-dark"
    />
  </div>
);

export default Sandbox;
