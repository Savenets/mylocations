import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as router } from 'react-router-redux';

import categories from './categories';
import locations from './locations';
import ui from './ui';

export default combineReducers({
  router,
  form,
  categories,
  locations,
  ui,
});
