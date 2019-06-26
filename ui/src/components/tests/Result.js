import { connect } from 'react-redux';
import Result from './Result.jsx';
import * as select from '../../selectors';
import * as actionCreators from '../../actions';


const mapStateToProps = state => ({
  countResult: select.countResult(state),
  getQuestions: select.getQuestions(state),
  getCurrentTest: select.getCurrentTest(state),
});

export default connect(mapStateToProps, actionCreators)(Result);
