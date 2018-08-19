import { createSelector } from 'reselect';
import { get } from 'lodash';

const locationsSelector = state => state.locations;

export const getLocations = createSelector(locationsSelector, categories => get(categories, 'locations'));
export const isLocationsModalOpenSelector = createSelector(locationsSelector, isLocationModalOpen => get(isLocationModalOpen, 'isLocationModalOpen'));
