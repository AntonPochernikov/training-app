import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import Sandbox from './Sandbox.jsx';
import * as select from '../../selectors';

const mapStateToProps = state => ({
  code: state.training.code,
  currentTask: select.getTask(state),
});

export default connect(mapStateToProps, actionCreators)(Sandbox);
