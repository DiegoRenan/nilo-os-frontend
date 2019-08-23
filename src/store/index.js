import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import reducers from '../reducers'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)