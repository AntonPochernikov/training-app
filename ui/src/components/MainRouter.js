import { connect } from 'react-redux';
import * as actionCreators from '../actions/index.js';
import MainRouter from './MainRouter.jsx';

const mapStateToProps = () => ({});

export default connect(mapStateToProps, actionCreators)(MainRouter);
