import {middleware as fetchMiddleware} from 'react-redux-fetch';
import {reducer as fetchReducer} from 'react-redux-fetch';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import films from '../Reducers/films'
import filmModals from '../Reducers/filmModals';

const history = createHistory();

const middleware = routerMiddleware(history);

export default function storeConfig() {
  return createStore(combineReducers({
      filmModals,
      films,
      routing: routerReducer,
      repository: fetchReducer
    }),
    applyMiddleware(middleware, thunk, fetchMiddleware)
  );
}