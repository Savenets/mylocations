export const LocationActionTypes = {
  showLocationsModal: 'MODAL:LOCATIONS::SHOW',
  hideLocationsModal: 'MODAL:LOCATIONS::HIDE',
  createNewLocation: 'NEW:LOCATION::CREATE',
  locationEdit: 'LOCATION::EDIT',
  removeLocation: 'NEW:LOCATION::REMOVE',
};

export default {
  showLocationsModal: () => ({ type: LocationActionTypes.showLocationsModal }),
  hideLocationsModal: () => ({ type: LocationActionTypes.hideLocationsModal }),
  createNewLocation: newLocation => ({ type: LocationActionTypes.createNewLocation, payload: newLocation }),
  locationEdit: location => ({ type: LocationActionTypes.locationEdit, payload: location }),
  removeLocation: id => ({ type: LocationActionTypes.removeLocation, payload: id }),
};
