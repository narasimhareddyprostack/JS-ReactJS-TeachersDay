import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrAction, decrAction } from '../redux/product/product.action'
const Product = () => {
    let dispatch = useDispatch();
    let product = useSelector((state) => {
        return state
    })
    let incrHandler = () => {
        dispatch(incrAction())
    }
    let decrHandler = () => {

        dispatch(decrAction())
    }
    return <div className="container">
        <div className="row">
            <div className="col-md-6">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{product.product_Name}</td>
                            <td> <i className="fa fa-minus-circle" onClick={decrHandler}></i>{product.qty} <i className="fa fa-plus-circle" onClick={incrHandler}></i></td>
                            <td>{product.price}</td>
                            <td>{product.price * product.qty}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}

export default Product
/*
<div>
            <h2>Product Component</h2>
            <pre>{JSON.stringify(product)}</pre>
            <i className="fa fa-minus-circle" onClick={decrHandler}></i>
            {product.qty}
            <i className="fa fa-plus-circle" onClick={incrHandler}></i>
        </div>
*/