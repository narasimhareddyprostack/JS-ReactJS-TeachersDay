import Axios from 'axios'
//action types
const USER_REQ = 'USER_REQ'
const USER_SUCCESS = 'USER_SUCCESS'
const USER_FAILURE = 'USER_FAILURE'
//actions
let fetchUserRequest = () => {
    return { type: USER_REQ }
}
let fetchUserSuccess = (users) => {
    return { type: USER_SUCCESS, payload: users }
}
let fetchUserFailure = (error) => {
    return { type: USER_FAILURE, payload: error }
}
//special action
let fetchUsersAction = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest())
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                dispatch(fetchUserSuccess(response.data))
            })
            .catch((error) => {
                dispatch(fetchUserFailure(error))
            })
    }
}

export { fetchUsersAction, USER_REQ, USER_SUCCESS, USER_FAILURE }
//What is action?
//reduc action is function , return actionable object
//Redux-Thunk middleware
//action is return function

