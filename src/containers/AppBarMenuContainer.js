import { connect } from 'react-redux';
import CategoryActions from '../actions/categories';
import LocationActions from '../actions/locations';
import AppBarMenu from '../components/Header/AppBarMenu';

const mapDispatchToProps = dispatch => ({
  handleOpenCreateCategoryModal: () => dispatch(CategoryActions.showCreateModal()),
  handleOpenCreateLocationsModal: () => dispatch(LocationActions.showLocationsModal()),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  handleOpenCreateCategoryModal: () => {
    dispatchProps.handleOpenCreateCategoryModal();
    if (typeof ownProps.handleCloseMenu === 'function') {
      ownProps.handleCloseMenu();
    }
  },
  handleOpenCreateLocationsModal: () => {
    dispatchProps.handleOpenCreateLocationsModal();
    if (typeof ownProps.handleCloseMenu === 'function') {
      ownProps.handleCloseMenu();
    }
  },
});

export default connect(null, mapDispatchToProps, mergeProps)(AppBarMenu);
