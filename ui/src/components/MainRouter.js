import { connect } from 'react-redux';

import * as actionCreators from '../actions';
import MainRouter from './MainRouter.jsx';

const mapStateToProps = state => ({
  currentTaskId: state.training.currentTaskId,
  modal: state.common.modal,
});

export default connect(mapStateToProps, actionCreators)(MainRouter);
