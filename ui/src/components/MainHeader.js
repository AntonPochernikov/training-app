import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import MainHeader from './MainHeader.jsx';

const mapStateToProps = state => ({
  login: state.training.loginSuccess,
  formFields: state.training.formFields,
});

export default connect(mapStateToProps, actionCreators)(MainHeader);
