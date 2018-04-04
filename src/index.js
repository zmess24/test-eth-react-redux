import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './components/containers/Root';
import registerServiceWorker from './registerServiceWorker';
import configureStore, { history } from './store/configureStore';
import './styles/index.css'

const store = configureStore();

render(
    <AppContainer>
        <Root store={store} history={history} />
    </AppContainer>, 
    document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./components/containers/Root', () => {
    const NewRoot = require('./components/containers/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}

registerServiceWorker();
