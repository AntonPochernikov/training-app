import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import ListLessons from './ListLessons.jsx';

const mapStateToProps = state => ({
  topic: state.app.lessons.topic,
});

export default connect(mapStateToProps, actionCreators)(ListLessons);
