//import action types 
import { GM, GN } from './message.action'
let initialState = {
    msg: "Hello,Rahul"
}
let messageReducer = (state = initialState, action) => {
    console.log(action)
    console.log(action.type)
    switch (action.type) {
        case GM:
            return { msg: "Good Morning, Rahul Ji" }

        case GN:
            return { msg: "Good Night, Rahul" }
        default:
            return state
    }
}
export { messageReducer }