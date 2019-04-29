import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import Tests from './Tests.jsx';
import * as select from '../../selectors';

const mapStateToProps = state => ({
  tests: select.getType(state),
});

export default connect(mapStateToProps, actionCreators)(Tests);
