//create store based on reducer 
import { composeWithDevTools } from '@redux-devtools/extension'
import { createStore } from "redux";
import { messageReducer } from './message/message.reducer'
let store = createStore(messageReducer, composeWithDevTools());
//let store = createStore(messageReducer);
export { store }