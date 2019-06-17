import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import Navigation from './Navigation.jsx';
import * as select from '../../selectors';

const mapStateToProps = state => ({
  isFirstParagraph: select.isFirstParagraph(state),
  isFirstLesson: select.isFirstLesson(state),
  isLastParagraph: select.isLastParagraph(state),
  isLastLessonParagraphs: select.isLastLessonParagraphs(state),
});

export default connect(mapStateToProps, actionCreators)(Navigation);
