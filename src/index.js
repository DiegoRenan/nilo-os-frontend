import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import * as serviceWorker from './serviceWorker'

import AuthOrApp from './main/AuthOrApp'
import store from './store'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <Provider store={store}>
    <ToastContainer 
      position={toast.POSITION.TOP_CENTER}/>
    <AuthOrApp />
  </Provider>
, document.getElementById('root'))
serviceWorker.unregister()