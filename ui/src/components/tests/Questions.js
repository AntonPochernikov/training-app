import { connect } from 'react-redux';
import Questions from './Questions.jsx';
import * as select from '../../selectors';
import * as actionCreators from '../../actions';


const mapStateToProps = state => ({
  currentTest: select.getCurrentTest(state),
  currentQuestion: select.getCurrentQuestion(state),
  isCorrectChooseOne: select.compareChooseOneAnswer(state),
  isCorrectWriteAnswer: select.compareWriteAnswer(state),
  isCorrectMultiply: select.compareMultiplyAnswer(state),
  isLastQuestion: select.isLastQuestion(state),
  isFinish: select.isFinish(state),
});

export default connect(mapStateToProps, actionCreators)(Questions);
