import { createSelector } from 'reselect';

const uiSelector = state => state.ui;

export const getSnackbarState = createSelector(uiSelector, ui => ui.snackbar);

