import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { userReducer } from './users/user.reducer'

let middleware = [logger, thunk]

let store = createStore(userReducer, composeWithDevTools(applyMiddleware(...middleware)));
export { store }