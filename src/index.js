import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store from './store/index';
import {Provider} from 'react-redux';

/**
 * Provider - For Wrapping DOM to be rendered
 */
ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
    document.getElementById('root'))
serviceWorker.unregister();
