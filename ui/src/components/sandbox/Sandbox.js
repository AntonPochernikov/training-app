import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import Sandbox from './Sandbox.jsx';
import * as select from '../../selectors';

const mapStateToProps = state => ({
  code: state.training.code,
  currentTask: select.getCurrentTask(state),
  testStatus: state.training.testSolution,
  firstElement: select.getFirstElement(state),
  lastElement: select.getLastElement(state),
});

export default connect(mapStateToProps, actionCreators)(Sandbox);
