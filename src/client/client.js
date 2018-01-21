import 'babel-polyfill'
import React from 'react'
import {hydrate} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import Routes from './Routes'
import reducer from './reducer'

const store = createStore(reducer, {}, applyMiddleware(thunk))

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
, document.getElementById('mount-point'))