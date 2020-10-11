import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from "./redux/rootReducer";

import './tailwind.output.css';
import { CookiesProvider } from 'react-cookie';

const store = createStore(rootReducer)

const application = (
  <Provider store={store}>
    <BrowserRouter>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(application, document.getElementById('root'));

serviceWorker.unregister();
