import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Progress = (props) => {
  const {
    id,
    getQuestions,
  } = props;
  const progressNow = id - 1;
  const progressMax = getQuestions.length;

  return (
    <div className="progress_bar">
      <ProgressBar animated now={progressNow} max={progressMax}
        label={`${progressNow}/${progressMax}`}/>
    </div>
  );
};
export default (Progress);
