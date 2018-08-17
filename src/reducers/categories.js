import { CategoryActionTypes } from '../actions/categories';
import { AppActionTypes } from '../actions/app';

const initialState = {
  isCreateModalOpen: false,
  categories: [],
};

export default function missionReducer(state = initialState, action) {
  switch (action.type) {
    case AppActionTypes.eraseReducers: {
      return {
        ...state,
      };
    }
    case CategoryActionTypes.showCreateModal: {
      return {
        ...state,
        isCreateModalOpen: true,
      };
    }
    case CategoryActionTypes.hideCreateModal: {
      return {
        ...state,
        isCreateModalOpen: false,
      };
    }
    case CategoryActionTypes.createNewCategory: {
      return {
        ...state,
       categories: [...state.categories, action.payload],
      };
    }
    case CategoryActionTypes.removeCategory: {
      return {
        ...state,
        categories: state.categories.filter(item => item.id !== action.payload),
      };
    }
    default:
      return state;
  }
}
