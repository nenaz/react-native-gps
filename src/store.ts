import { createStore, applyMiddleware, compose } from 'redux';
// import { compact } from 'lodash';
import thunk from 'redux-thunk';
import { reducers } from './reducers';
import { logger } from './utils/logger';

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk, logger),
    // ...compact([window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()]),
  )
);
