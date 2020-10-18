import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxThunk from 'redux-thunk'

import App from './components/App'
import reducers from './reducers'


ReactDOM.render(
    <Provider store={createStore(reducers, {}, composeWithDevTools(applyMiddleware(reduxThunk)))}>    
        <App />
    </Provider>,
    document.querySelector('#root')
)