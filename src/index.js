import React from 'react';
import ReactDOM from 'react-dom';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './js/app';
import configureStore from './js/state/store';

const generateClassName = createGenerateClassName({
  productionPrefix: 'nssd'
});

ReactDOM.render((
  <Provider store={configureStore()}>
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <App />
        </MuiPickersUtilsProvider>
      </BrowserRouter>
    </StylesProvider>
  </Provider>
), document.getElementById('augmented-root'));
