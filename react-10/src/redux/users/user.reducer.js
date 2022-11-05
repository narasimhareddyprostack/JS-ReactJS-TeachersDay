//import action types 
import { USER_REQ, USER_SUCCESS, USER_FAILURE } from './user.action'
let intialState = {
    users: [],
    errorMessage: "",
    loading: false
}
let userReducer = (state = intialState, action) => {
    let { type, payload } = action
    //validate user action types 
    switch (type) {
        case USER_REQ:
            return { ...state, loading: true }
        case USER_SUCCESS:
            return { ...state, users: payload }
        case USER_FAILURE:
            return { ...state, errorMessage: payload, loading: false }
        default:
            return state
    }
}
export { userReducer }
//what is reducer?
//reducer is pure function, it take two parameter
//state,action