import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import Login from './Login.jsx';

const mapStateToProps = state => ({
  email: state.app.user.formFields.email,
  password: state.app.user.formFields.password,
});


export default connect(mapStateToProps, actionCreators)(Login);
