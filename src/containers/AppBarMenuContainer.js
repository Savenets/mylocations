import { connect } from 'react-redux';
import CategoryActions from '../actions/categories';
import AppBarMenu from '../components/Header/AppBarMenu';

const mapDispatchToProps = dispatch => ({
  handleOpenCreateCategoryModal: () => dispatch(CategoryActions.showCreateModal()),
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
});

export default connect(null, mapDispatchToProps, mergeProps)(AppBarMenu);
