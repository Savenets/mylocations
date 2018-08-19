import { UiActionTypes } from '../actions/ui';
import messageTypes from '../constants/messageTypes';

const initialState = {
  snackbar: {
    message: '',
    messageType: messageTypes.primary,
    isOpen: false,
  },
};

const updatedSnackbarState = (state, message, messageType, isOpen) => ({
  ...state,
  snackbar: {
    message: message ? message : '',
    messageType: messageType ? messageType : messageTypes.primary,
    isOpen: !!isOpen,
  },
});

export default (state = initialState, action) => {

  switch (action.type) {

    case UiActionTypes.hideSnackbar: {
      return { ...state, snackbar: { ...state.snackbar, isOpen: false } };
    }

    case UiActionTypes.showSuccessSnackbar: {
      return updatedSnackbarState(state, action.payload.message, messageTypes.success, true);
    }

    case UiActionTypes.showErrorSnackbar: {
      return updatedSnackbarState(state, action.payload.message, messageTypes.fail, true);
    }

    default: {
      return state;
    }
  }
};
