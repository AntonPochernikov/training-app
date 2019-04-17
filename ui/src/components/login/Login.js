import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import Login from './Login.jsx';

const mapStateToProps = state => ({
  showModal: state.training.showModal,
});

export default connect(mapStateToProps, actionCreators)(Login);
