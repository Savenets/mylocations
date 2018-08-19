import { LocationActionTypes } from '../actions/locations';

import { AppActionTypes } from '../actions/app';

const initialState = {
  isLocationModalOpen: false,
  locations: [],
};

export default function missionReducer(state = initialState, action) {
  switch (action.type) {
    case AppActionTypes.eraseReducers: {
      return {
        ...state,
      };
    }

    case LocationActionTypes.showLocationsModal: {
      return {
        ...state,
        isLocationModalOpen: true,
      };
    }

    case LocationActionTypes.hideLocationsModal: {
      return {
        ...state,
        isLocationModalOpen: false,
      };
    }

    case LocationActionTypes.createNewLocation: {
      return {
        ...state,
        locations: [...state.locations, action.payload],
      };
    }

    case LocationActionTypes.locationEdit: {
      return {
        ...state,
        locations: state.locations.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        }),
      };
    }

    case LocationActionTypes.removeLocation: {
      return {
        ...state,
        locations: state.locations.filter(item => item.id !== action.payload),
      };
    }

    default:
      return state;
  }
}
