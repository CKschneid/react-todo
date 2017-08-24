import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './Store'
import { Provider } from 'react-redux'

const store = configureStore()

const Root = () =>
  <Provider store={store}>
    <App />
  </Provider>

ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker()
