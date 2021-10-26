import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { userRegisterAction } from './actions/userRegister'

// import rootReducer from './reducers/index'

//  const initalState = {

//  }

const middleware = [thunk]

//const store = createStore(rootReducer, initalState,composeWithDevTools(applyMiddleware(...middleware)))
const store = createStore(userRegisterAction,composeWithDevTools(applyMiddleware(...middleware)))

export default store;