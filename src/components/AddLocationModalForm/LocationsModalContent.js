import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
//import { ValidationErrorMessages as validation } from '../../helpers/validation';
import { actionButtons } from './LocationModalContent.css';

const LocationsModalContent = ({ handleCreateCategory, handleCloseModal }) => {

  const buttonStyle = {
    margin: '0 4px',
  };

  return (
    <form id="addLocation">
      <Field
        id="addNewLocations"
        name="locationName"
        floatingLabelText="What's the name of the location?"
        component={TextField}
        type="text"
        fullWidth
      />
      <div>
        <Field
          id="locationAddress"
          name="locationAddress"
          floatingLabelText="What's the adress of the location?"
          component={TextField}
          type="text"
          fullWidth
        />
        <Field
          id="locationCoordinate"
          name="locationCoordinate"
          floatingLabelText="What's the location's coordinates?"
          component={TextField}
          type="text"
          fullWidth
        />
      </div>
      <div className={actionButtons}>
        <Button style={buttonStyle} variant="contained" onClick={handleCreateCategory} color="primary">Create</Button>
        <Button style={buttonStyle} variant="contained" onClick={handleCloseModal} color="primary">Cancel</Button>
      </div>
    </form>
  );
};

LocationsModalContent.defaultProps = {
  handleCreateCategory: ()=>{},
  handleCloseModal: ()=>{},
};

LocationsModalContent.propTypes = {
  handleCreateCategory: PropTypes.func,
  handleCloseModal: PropTypes.func,
};

export default LocationsModalContent;
