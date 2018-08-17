import React from 'react';
import PropTypes from 'prop-types';
import FormDialog from '../../components/FormDialog';
import LocationsModalContent from './LocationsModalContent';

const AddLocationModal = ({ isDialogOpened, handleCloseModal, handleCreateCategory }) => {

  return (
    <FormDialog
      dialogTitle="Create new Location"
      isDialogOpened={isDialogOpened}
      handleDialogClose={handleCloseModal}
    >
      <LocationsModalContent
        handleCreateCategory={handleCreateCategory}
        handleCloseModal={handleCloseModal}
      />
    </FormDialog>
  );
};

AddLocationModal.defaultProps = {
  handleCloseModal: ()=>{},
};

AddLocationModal.propTypes = {
  isDialogOpened: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func,
  handleCreateCategory: PropTypes.func.isRequired,
};

export default AddLocationModal;
