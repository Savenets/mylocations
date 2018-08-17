import { applyMiddleware, compose, createStore } from 'redux';
import persistState from 'redux-localstorage';
import _ from 'lodash';

export default (initialState = {}, additionalMiddlewares = []) => {

  const reducers = require('../reducers').default;

  const PATHS = [
    'categories',
  ];

  const slicer = paths => state => _.zipObjectDeep( paths, _.at( state, paths ) );

  const enhancers = [
    persistState( PATHS, { key: 'redux-storage', slicer } ),
  ];

  const middleware = [
    ...additionalMiddlewares,
  ];

  let composeEnhancers = compose;

  if (process.env.NODE_ENV === 'development') {
    const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if (typeof composeWithDevToolsExtension === 'function') {
      composeEnhancers = composeWithDevToolsExtension;
    }
  }

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers,
    ),
  );

  if (module.hot) {
    module.hot.accept(reducers, () => {
      store.replaceReducer(reducers);
    });
  }

  return store;
};
