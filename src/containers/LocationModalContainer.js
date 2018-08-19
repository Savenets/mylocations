import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { reduxForm, formValueSelector, reset } from 'redux-form';
import uniqid from 'uniqid';
import LocationActions from '../actions/locations';
import UiActions from '../actions/ui';
import { getCategories } from '../selectors/categories';
import { isLocationsModalOpenSelector } from '../selectors/locations';
import AddLocationModalForm from '../components/AddLocationModalForm';

const LocationsModalFormName = 'LocationsModalFormName';
const formSelector = formValueSelector(LocationsModalFormName);

const mapStateToProps = createStructuredSelector({
  isDialogOpened: isLocationsModalOpenSelector,
  categories: getCategories,
  locationName: state => formSelector(state, 'locationName'),
  locationAddress: state => formSelector(state, 'locationAddress'),
  locationDetails: state => formSelector(state, 'locationDetails'),
  selectedCategories: state => formSelector(state, 'categories'),
});

const mapDispatchToProps = dispatch => ({
  handleCreateLocation: location => dispatch(LocationActions.createNewLocation(location)),
  handleCloseModal: () => dispatch(LocationActions.hideLocationsModal()),
  resetForm: () => dispatch(reset(LocationsModalFormName)),
  showSuccessSnackbar: () => dispatch(UiActions.showSuccessSnackbar('New location is created!')),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  handleCreateLocation: () => {
    const { locationName, locationAddress, locationDetails, selectedCategories } = stateProps;
    const newLocation = {
      locationName: locationName,
      locationAddress: locationAddress,
      locationDetails: locationDetails,
      selectedCategories: selectedCategories,
      id: uniqid(),
    };
    dispatchProps.handleCreateLocation(newLocation);
    dispatchProps.resetForm();
    dispatchProps.handleCloseModal();
    dispatchProps.showSuccessSnackbar();
  },
  handleCloseModal: () => {
    dispatchProps.handleCloseModal();
    dispatchProps.resetForm();
  },
});

const locationsModalContainer = reduxForm({
  form: LocationsModalFormName,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
})(AddLocationModalForm);

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(locationsModalContainer);
