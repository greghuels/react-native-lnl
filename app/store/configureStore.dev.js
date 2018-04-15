/* eslint-disable global-require */

import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import StockApp from '../reducers';

const createDevStoreWithMiddleware = composeWithDevTools({})(applyMiddleware(thunk))(createStore);

export default function configureStore() {
  const store = createDevStoreWithMiddleware(StockApp);

  if (module.hot) {
    module.hot.accept(() => store.replaceReducer(require('../reducers')));
  }

  return store;
}
