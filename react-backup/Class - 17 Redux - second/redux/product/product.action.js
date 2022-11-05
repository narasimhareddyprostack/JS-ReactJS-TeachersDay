//action? is function , and it return actionable object

//action types 
const INCR = 'INCR'
const DECR = 'DECR'
//actions
let incrAction = () => { return { type: INCR } }
let decrAction = () => { return { type: DECR } }
export { INCR, DECR, incrAction, decrAction }