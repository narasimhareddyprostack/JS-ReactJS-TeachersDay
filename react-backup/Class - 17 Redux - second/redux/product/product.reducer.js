import { INCR, DECR } from './product.action'
let intialState = {
    product_Name: "Iphone 18",
    price: 40000,
    qty: 1,
    image: ''
}
let productReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'INCR':
            return { ...state, qty: state.qty + 1 }
        case 'DECR':
            return { ...state, qty: state.qty - 1 }
        default:
            return state
    }
}
export { productReducer }