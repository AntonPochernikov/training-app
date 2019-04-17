import { connect } from 'react-redux';

import * as actionCreators from '../actions';
import MainRouter from './MainRouter.jsx';

const mapStateToProps = state => ({
  currentTask: state.training.currentTask,
  modal: state.training.modal,
});

export default connect(mapStateToProps, actionCreators)(MainRouter);
