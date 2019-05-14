import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import Login from './Login.jsx';

// передать email, password
const mapStateToProps = () => ({});


export default connect(mapStateToProps, actionCreators)(Login);
