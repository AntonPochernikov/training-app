import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import Login from './Login.jsx';

const mapStateToProps = state => ({
  email: state.user.login.formFields.email,
  password: state.user.login.formFields.password,
});


export default connect(mapStateToProps, actionCreators)(Login);
