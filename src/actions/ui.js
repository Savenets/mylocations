export const UiActionTypes = {
  showSuccessSnackbar: 'SNACKBAR:SUCCESS::SHOW',
  showErrorSnackbar: 'SNACKBAR:ERROR::SHOW',
  hideSnackbar: 'SNACKBAR::HIDE',
};

export default {
  hideSnackbar: () => ({ type: UiActionTypes.hideSnackbar }),
  showErrorSnackbar: errorMessage => ({ type: UiActionTypes.showErrorSnackbar, payload: { message: errorMessage } }),
  showSuccessSnackbar: successMessage => ({ type: UiActionTypes.showSuccessSnackbar, payload: { message: successMessage } }),
};
