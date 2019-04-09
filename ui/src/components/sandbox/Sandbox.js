import { connect } from 'react-redux';
import * as actionCreators from '../../actions/index.js';
import Sandbox from './Sandbox.jsx';

const mapStateToProps = state => ({
  code: state.training.code,
});

export default connect(mapStateToProps, actionCreators)(Sandbox);
