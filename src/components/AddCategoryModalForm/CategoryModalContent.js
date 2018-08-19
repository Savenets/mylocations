import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import { ValidationErrorMessages as validation } from '../../helpers/validation';
import { actionButtons } from './CategoryModalContent.css';

const FormDialog = ({ handleCreateCategory, handleCloseModal, valid }) => {

  const buttonStyle = {
    margin: '0 4px',
  };

  return (
    <form id="addCategory">
      <Field
        id="addNewCategory"
        name="categoryName"
        floatingLabelText="Enter Category Name"
        component={TextField}
        type="text"
        validate={[validation.required]}
        fullWidth
      />
      <div className={actionButtons}>
        <Button disabled={!valid} style={buttonStyle} variant="contained" onClick={handleCreateCategory} color="primary">Create</Button>
        <Button style={buttonStyle} variant="contained" onClick={handleCloseModal} color="primary">Cancel</Button>
      </div>
    </form>
  );
};

FormDialog.defaultProps = {
  handleCreateCategory: ()=>{},
  handleCloseModal: ()=>{},
};

FormDialog.propTypes = {
  handleCreateCategory: PropTypes.func,
  handleCloseModal: PropTypes.func,
  valid: PropTypes.bool.isRequired,
};

export default FormDialog;
