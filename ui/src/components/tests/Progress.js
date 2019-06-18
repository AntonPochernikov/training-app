import { connect } from 'react-redux';
import Progress from './Progress.jsx';
import * as select from '../../selectors';
import * as actionCreators from '../../actions';


const mapStateToProps = state => ({
  getQuestions: select.getQuestions(state),
});

export default connect(mapStateToProps, actionCreators)(Progress);
