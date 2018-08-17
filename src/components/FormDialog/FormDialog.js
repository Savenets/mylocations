import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const FormDialog = ({ dialogTitle, isDialogOpened, handleDialogClose, children }) => {

  return (
    <Dialog
      open={isDialogOpened}
      onClose={handleDialogClose}
      aria-labelledby="form-dialog-title"
      fullWidth
    >
      <DialogTitle>{dialogTitle}</DialogTitle>
      <DialogContent>
        { children }
      </DialogContent>
    </Dialog>
  );
};

FormDialog.defaultProps = {
  isDialogOpened: false,
};

FormDialog.propTypes = {
  isDialogOpened: PropTypes.bool,
  handleDialogClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  dialogTitle: PropTypes.string.isRequired,
};

export default FormDialog;
