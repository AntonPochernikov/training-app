import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import Navigation from './Navigation.jsx';
import * as select from '../../selectors';

const mapStateToProps = state => ({
  isFirstParagraph: select.isFirstParagraph(state),
  isLastParagraph: select.isLastParagraph(state),
  isFirstLesson: select.isFirstLesson(state),
  isLastLesson: select.isLastLesson(state),
});

export default connect(mapStateToProps, actionCreators)(Navigation);
