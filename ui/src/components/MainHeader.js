import { connect } from 'react-redux';
import * as actionCreators from '../actions/index.js';
import MainHeader from './MainHeader.jsx';

const mapStateToProps = () => ({});

export default connect(mapStateToProps, actionCreators)(MainHeader);
