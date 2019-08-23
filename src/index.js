import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import * as serviceWorker from './serviceWorker'
 
import AuthOrApp from './main/AuthOrApp'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <AuthOrApp />
  </Provider>
, document.getElementById('root'))
serviceWorker.unregister()