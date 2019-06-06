import { connect } from 'react-redux';

import * as actionCreators from '../actions';
import MainRouter from './MainRouter.jsx';

const mapStateToProps = state => ({
  currentTaskId: state.app.training.currentTaskId,
  currentTestId: state.app.tests.currentTestId,
  modal: state.app.common.modal,
});

export default connect(mapStateToProps, actionCreators)(MainRouter);
