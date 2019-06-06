import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import MainHeader from './MainHeader.jsx';

const mapStateToProps = state => ({
  login: state.app.user.loginSuccess,
  formFields: state.app.user.formFields,
});

export default connect(mapStateToProps, actionCreators)(MainHeader);
