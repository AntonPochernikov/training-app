import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import Lessons from './Lessons.jsx';

const mapStateToProps = state => ({
  lessons: state.app.lessons.lessons,
  topic: state.app.lessons.topic,
});

export default connect(mapStateToProps, actionCreators)(Lessons);
