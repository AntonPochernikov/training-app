import { connect } from 'react-redux';
import * as actionCreators from '../../actions/index.js';
import HomePage from './HomePage.jsx';
import getComplexity from '../../selectors/index.js';

const mapStateToProps = state => ({
  exercises: getComplexity(state),
});

export default connect(mapStateToProps, actionCreators)(HomePage);
