import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../Reducers'

const middleware = [thunk]
const enhancers = []
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = () => {
  return createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(...middleware), ...enhancers)
  )
}

export default configureStore
