import { createSelector } from 'reselect';

const routerSelector = state => state.router;

export const getCurrentPath = createSelector(routerSelector, router => router.location.pathname);
