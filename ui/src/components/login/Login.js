import { connect } from 'react-redux';
import * as actionCreators from '../../actions/index.js';
import Login from './Login.jsx';

const mapStateToProps = state => ({
  showModal: state.user.showModal,
});

export default connect(mapStateToProps, actionCreators)(Login);
