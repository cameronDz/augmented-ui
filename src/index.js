import React from 'react';
import ReactDOM from 'react-dom';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './js/app';
import configureStore from './js/state/store';
import './css/index.css';

ReactDOM.render((
  <Provider store={configureStore()}>
    <BrowserRouter>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <App />
      </MuiPickersUtilsProvider>
    </BrowserRouter>
  </Provider>
), document.getElementById('augmented-root'));
