import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getSnackbarState } from '../selectors/ui';
import UiActions from '../actions/ui';
import Snackbar from '../components/Snackbar';

const mapStateToProps = createStructuredSelector({
  snackbarUiState: getSnackbarState,
});

const mapDispatchToProps = {
  handleSnackbarClose: UiActions.hideSnackbar,
};

export default connect(mapStateToProps, mapDispatchToProps)(Snackbar);
