import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import * as serviceWorker from './serviceWorker'

import App from './main/App'
import store from './store'
import AuthOrApp from './main/AuthOrApp'
import { setAuthHeader } from './services/setAuthHeader'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

setAuthHeader(
  localStorage.getItem("access-token")
)

ReactDOM.render(
  <Provider store={store}>
    <ToastContainer
      position={toast.POSITION.TOP_CENTER} />
    <AuthOrApp />
  </Provider>
  , document.getElementById('root'))
serviceWorker.unregister()