import { connect } from 'react-redux';
import Tests from './Tests.jsx';
import * as select from '../../selectors';
import * as actionCreators from '../../actions';

const mapStateToProps = state => ({
  testTasks: select.getTestsByType(state),
});

export default connect(mapStateToProps, actionCreators)(Tests);
