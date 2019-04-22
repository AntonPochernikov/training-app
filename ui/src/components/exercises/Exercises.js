import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import Exercises from './Exercises.jsx';
import * as select from '../../selectors';

const mapStateToProps = state => ({
  exercises: select.getTaskByComplexity(state),
});

export default connect(mapStateToProps, actionCreators)(Exercises);
