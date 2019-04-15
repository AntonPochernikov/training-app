import { connect } from 'react-redux';
import * as actionCreators from '../../actions/index.js';
import Exercises from './Exercises.jsx';
import * as select from '../../selectors/index.js';

const mapStateToProps = state => ({
  exercises: select.getComplexity(state),
});

export default connect(mapStateToProps, actionCreators)(Exercises);
