import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import MainHeader from './MainHeader.jsx';

const mapStateToProps = state => ({
  login: state.user.loginSuccess,
  formFields: state.user.formFields,
});

export default connect(mapStateToProps, actionCreators)(MainHeader);
