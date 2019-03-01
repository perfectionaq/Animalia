import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer } from 'react-router-redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';

const store = (history) => createStore(
    combineReducers({
    router: connectRouter(history)
  }),
  compose(
    applyMiddleware(
      routerMiddleware(history)
    )
  )
);

export { store };