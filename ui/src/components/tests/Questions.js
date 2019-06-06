import { connect } from 'react-redux';
import Questions from './Questions.jsx';
import * as select from '../../selectors';
import * as actionCreators from '../../actions';


const mapStateToProps = state => ({
  currentTest: select.getCurrentTest(state),
  currentQuestion: select.getCurrentQuestion(state),
});

export default connect(mapStateToProps, actionCreators)(Questions);
