import React from 'react';
import PropTypes from 'prop-types';
import MuiSnackbar from 'material-ui/Snackbar';

import messageTypes from '../../constants/messageTypes';
import styles from './Snackbar.css';

const bodyStyle = {
  backgroundColor: 'transparent',
  lineHeight: 'initial',
  padding: '10px 24px',
  height: 'auto',
  zIndex: 9999,
};

const contentStyle = {
  textAlign: 'center',
};

const Snackbar = ({ handleSnackbarClose, snackbarUiState, ...rest }) => {
  const className = styles[snackbarUiState.messageType];

  return (
    <MuiSnackbar
      className={className}
      bodyStyle={bodyStyle}
      contentStyle={contentStyle}
      message={snackbarUiState.message}
      open={snackbarUiState.isOpen}
      onRequestClose={handleSnackbarClose}
      {...rest}
    />
  );
};

Snackbar.defaultProps = {
  snackbarUiState: {
    isOpen: false,
    message: '',
    messageType: 'primary',
  },
};

Snackbar.propTypes = {
  snackbarUiState: PropTypes.shape({
    isOpen: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    messageType: PropTypes.oneOf([
      messageTypes.primary,
      messageTypes.success,
      messageTypes.fail,
    ]),
  }),
  handleSnackbarClose: PropTypes.func.isRequired,
};

export default Snackbar;
