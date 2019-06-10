import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import Lessons from './Lessons.jsx';

const mapStateToProps = state => ({
  lessons: state.app.lessons.lessons,
  collapse: state.app.lessons.collapse,
});

export default connect(mapStateToProps, actionCreators)(Lessons);
