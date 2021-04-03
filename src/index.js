import React from 'react';
import ReactDOM from 'react-dom';

import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import 'core-js';
import './polyfill'
import * as serviceWorker from './serviceWorker';


//IMPORTANDO PARA PODER UTILIZAR O REDUX 
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Reducers from './Reducers';    //ESTE ARQUIVO EU PRECISO CRIAR.


//PRECISA POR ISSO PRA CONSEGUIR USAR OS ICONES.
import { icons } from './assets/icons'

import App from './App';

React.icons = icons

const store = createStore(Reducers);

ReactDOM.render(
    //Passando uma props informando qual é o meu store
    <Provider store={store}> 
      <App/>
    </Provider>
  ,  document.getElementById('root'));


  serviceWorker.unregister();
