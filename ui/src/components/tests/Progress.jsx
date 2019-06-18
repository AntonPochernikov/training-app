import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Progress = (props) => {
  const {
    id,
    getQuestions,
  } = props;
  return (
    <div className="progress_bar">
      <ProgressBar animated now={id} max={getQuestions.length}/>
    </div>
  );
};
export default (Progress);
