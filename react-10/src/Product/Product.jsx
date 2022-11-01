import React, { useState } from 'react'

const Product = () => {
    let [product, setProduct] = useState({ product_Name: "Iphone 12s", price: 45000, qty: 4, image: "" });

    let incrHandler = () => {
        setProduct({ ...product, qty: product.qty + 1 })
    }
    return <div className="container">
        <div className="row">
            <div className="col-md-8">
                <table className="table table-hover">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>QTY</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{product.product_Name}</td>
                            <td>{product.price}</td>
                            <td> <i className="fa fa-minus-circle" onClick={() => { setProduct({ ...product, qty: product.qty - 1 }) }} ></i> {product.qty} <i className="fa fa-plus-circle" onClick={incrHandler} ></i></td>
                            <td>{product.qty * product.price
                            }</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}

export default Product
