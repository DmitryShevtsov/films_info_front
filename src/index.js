import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker';
import storeConfig from './Store/storeConfig';
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import {ConnectedRouter} from 'react-router-redux';
import RoutesList from './Components/RoutesList';


const history = createHistory();
const store = storeConfig();


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <RoutesList />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
