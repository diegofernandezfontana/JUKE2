import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './containers/Main';

import store from './store';
import {setLyrics} from './action-creators/lyrics';


console.log('-------------------------');
console.log('El estado antes de cualquier acción: ', store.getState());

const seminareAction = setLyrics('Quiero ver quiero entrar nena nadie te va a hacer mal.... excepto amarte...');
store.dispatch(seminareAction);

console.log('-------------------------');
console.log('Estado luego de primer SET_LYRICS action:', store.getState());

const rickRollAction = setLyrics('Never gonna give you up, never gonna let you down');
store.dispatch(rickRollAction);

console.log('-------------------------');
console.log('Estado luego del segundo SET_LYRICS action: ', store.getState());


ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={Main} />
  </BrowserRouter>,
  document.getElementById('app')
);
