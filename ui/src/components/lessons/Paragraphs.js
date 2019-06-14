import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import Paragraphs from './Paragraphs.jsx';
import * as select from '../../selectors';

const mapStateToProps = state => ({
  paragraph: select.getCurrentParagraph(state),
});

export default connect(mapStateToProps, actionCreators)(Paragraphs);
