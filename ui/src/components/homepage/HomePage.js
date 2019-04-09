import { connect } from 'react-redux';
import * as actionCreators from '../../actions/index.js';
import HomePage from './HomePage.jsx';
import * as select from '../../selectors/index.js';

const mapStateToProps = state => ({
  exercises: select.getComplexity(state),
});

export default connect(mapStateToProps, actionCreators)(HomePage);
