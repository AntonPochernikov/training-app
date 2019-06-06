import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import Sandbox from './Sandbox.jsx';
import * as select from '../../selectors';

const mapStateToProps = state => ({
  code: state.app.training.code,
  currentTask: select.getCurrentTask(state),
  testStatus: state.app.training.testSolution,
  isFirst: select.isFirst(state),
  isLast: select.isLast(state),
  currentOutputTab: state.app.training.currentOutputTab,
});

export default connect(mapStateToProps, actionCreators)(Sandbox);
