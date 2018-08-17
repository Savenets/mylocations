import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getCurrentPath } from '../selectors/router';
import Navigation from '../components/Navigation';

const mapStateToProps = createStructuredSelector({
  currentRoute: getCurrentPath,
});

export default connect(mapStateToProps)(Navigation);
