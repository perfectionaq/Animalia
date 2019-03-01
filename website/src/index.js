import React from 'react';
import ReactDOM  from 'react-dom';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import { ErrorBoundary } from './components/utilComponents/ErrorBoundary.jsx';
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'

import { store } from './reducers/store';

const history = createBrowserHistory();


const MainComponent = () => (
  <ErrorBoundary>
    <Provider store={store(history)}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path='/' render={() => <App/>} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  </ErrorBoundary>
);

ReactDOM.render(
  <MainComponent />,
  document.getElementById('app')
);