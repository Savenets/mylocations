import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import { ValidationErrorMessages as validation } from '../../helpers/validation';
import ChooseCategorySelectField from '../../components/ChooseCategorySelectField';
import { actionButtons, locationsName, formAddressLocations } from './LocationModalContent.css';

const LocationsModalContent = ({ handleCreateLocation, handleCloseModal, categories, formId, buttonActionText, valid }) => {

  const buttonStyle = {
    margin: '0 4px',
  };

  return (
    <form id={formId}>
      <Field
        id="addNewLocations"
        name="locationName"
        className={locationsName}
        floatingLabelText="What's the name of the location?"
        component={TextField}
        validate={[validation.required]}
        type="text"
        fullWidth
      />
      <div className={formAddressLocations}>
        <Field
          id="locationAddress"
          name="locationAddress"
          floatingLabelText="What's the address of the location?"
          component={TextField}
          validate={[validation.required]}
          className={locationsName}
          type="text"
          fullWidth
        />
        <Field
          id="locationDetails"
          name="locationDetails"
          floatingLabelText="Add additional information"
          component={TextField}
          validate={[validation.required]}
          className={locationsName}
          type="text"
          fullWidth
        />
      </div>
      <ChooseCategorySelectField
        id="categories"
        name="categories"
        label="Choose category(ies)"
        autoWidth
        categories={categories}
      />
      <div className={actionButtons}>
        <Button disabled={!valid} style={buttonStyle} variant="contained" onClick={handleCreateLocation} color="primary">{buttonActionText}</Button>
        <Button style={buttonStyle} variant="contained" onClick={handleCloseModal} color="primary">Cancel</Button>
      </div>
    </form>
  );
};

LocationsModalContent.defaultProps = {
  handleCreateLocation: ()=>{},
  handleCloseModal: ()=>{},
  categories: [],
  formId: 'locations',
};

LocationsModalContent.propTypes = {
  handleCreateLocation: PropTypes.func,
  handleCloseModal: PropTypes.func,
  categories: PropTypes.array,
  formId: PropTypes.string,
  valid: PropTypes.bool.isRequired,
  buttonActionText: PropTypes.string.isRequired,
};

export default LocationsModalContent;
