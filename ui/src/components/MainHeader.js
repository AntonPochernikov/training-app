import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import MainHeader from './MainHeader.jsx';

const mapStateToProps = state => ({
  login: state.user.login.loginSuccess,
  formFields: state.user.login.formFields,
});

export default connect(mapStateToProps, actionCreators)(MainHeader);
