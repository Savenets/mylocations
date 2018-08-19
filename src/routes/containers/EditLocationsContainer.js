import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { reduxForm, formValueSelector } from 'redux-form';
import LocationActions from '../../actions/locations';
import UiActions from '../../actions/ui';
import { isLocationsModalOpenSelector, getLocations } from '../../selectors/locations';
import { getCategories } from '../../selectors/categories';
import AddLocationModalForm from '../../components/AddLocationModalForm';

const LocationsModalFormName = 'EditLocationsModalFormName';
const formSelector = formValueSelector(LocationsModalFormName);

const mapStateToProps = createStructuredSelector({
  categories: getCategories,
  isDialogOpened: isLocationsModalOpenSelector,
  locations: getLocations,
  locationName: state => formSelector(state, 'locationName'),
  locationAddress: state => formSelector(state, 'locationAddress'),
  locationDetails: state => formSelector(state, 'locationDetails'),
  selectedCategories: state => formSelector(state, 'categories'),
});

const mapDispatchToProps = dispatch => ({
  removeLocationHandler: id => dispatch(LocationActions.removeLocation(id)),
  editLocationHandler: location => dispatch(LocationActions.locationEdit(location)),
  showSuccessSnackbar: () => dispatch(UiActions.showSuccessSnackbar('Your location is updated!')),
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
      id: ownProps.location.id,
    };
    dispatchProps.editLocationHandler(newLocation);
    if (typeof ownProps.handleCloseModal === 'function') {
      ownProps.handleCloseModal();
    }
    dispatchProps.showSuccessSnackbar();
  },
  initialValues: {
    ...ownProps.location,
  },
});

const EditlocationsModalContainer = reduxForm({
  form: LocationsModalFormName,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
})(AddLocationModalForm);

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(EditlocationsModalContainer);
