import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import * as serviceWorker from './serviceWorker'

import store from './store'
import AuthOrApp from './main/AuthOrApp'
import { setAuthHeader } from './services/setAuthHeader'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

setAuthHeader(
  localStorage.getItem("access-token"),
  localStorage.getItem("client"),
  localStorage.getItem("uid")
)

ReactDOM.render(
  <Provider store={store}>
    <ToastContainer
      position={toast.POSITION.TOP_CENTER} />
    <AuthOrApp />
  </Provider>
  , document.getElementById('root'))
serviceWorker.unregister()