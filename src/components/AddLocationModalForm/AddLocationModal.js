import React from 'react';
import PropTypes from 'prop-types';
import FormDialog from '../../components/FormDialog';
import LocationsModalContent from './LocationsModalContent';

const AddLocationModal = ({ isDialogOpened, handleCloseModal, handleCreateLocation, categories, dialogTitle, buttonActionText, ...rest }) => {

  return (
    <FormDialog
      dialogTitle={dialogTitle}
      isDialogOpened={isDialogOpened}
      handleDialogClose={handleCloseModal}
    >
      <LocationsModalContent
        handleCreateLocation={handleCreateLocation}
        handleCloseModal={handleCloseModal}
        categories={categories}
        buttonActionText={buttonActionText}
        {...rest}
      />
    </FormDialog>
  );
};

AddLocationModal.defaultProps = {
  handleCloseModal: ()=>{},
  dialogTitle: "Create new Location",
  categories: [],
  buttonActionText: 'Create',
};

AddLocationModal.propTypes = {
  isDialogOpened: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func,
  handleCreateLocation: PropTypes.func.isRequired,
  categories: PropTypes.array,
  dialogTitle: PropTypes.string,
  buttonActionText: PropTypes.string,
};

export default AddLocationModal;
