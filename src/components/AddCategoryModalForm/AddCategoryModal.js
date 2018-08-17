import React from 'react';
import PropTypes from 'prop-types';
import FormDialog from '../../components/FormDialog';
import CategoryModalContent from './CategoryModalContent';

const AddCategoryModal = ({ isDialogOpened, handleCloseModal, handleCreateCategory }) => {

  return (
    <FormDialog
      dialogTitle="Create new category"
      isDialogOpened={isDialogOpened}
      handleDialogClose={handleCloseModal}
    >
      <CategoryModalContent
        handleCreateCategory={handleCreateCategory}
        handleCloseModal={handleCloseModal}
      />
    </FormDialog>
  );
};

AddCategoryModal.defaultProps = {
  handleCloseModal: ()=>{},
};

AddCategoryModal.propTypes = {
  isDialogOpened: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func,
  handleCreateCategory: PropTypes.func.isRequired,
};

export default AddCategoryModal;
