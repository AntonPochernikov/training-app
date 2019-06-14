import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import Paragraphs from './Paragraphs.jsx';
import * as select from '../../selectors';

const mapStateToProps = state => ({
  paragraph: select.getCurrentParagraph(state),
  isFirstParagraph: select.isFirstParagraph(state),
  isLastParagraph: select.isLastParagraph(state),
  currentLessonId: state.app.lessons.currentLessonId,
  isFirstLesson: select.isFirstLesson(state),
  isLastLesson: select.isLastLesson(state),
});

export default connect(mapStateToProps, actionCreators)(Paragraphs);
