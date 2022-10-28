import React, { Component } from 'react'
import Axios from 'axios'
export class Product extends Component {
    state = {
        products: []
    }
    componentDidMount() {
        Axios.get('http://127.0.0.1:5000/api/products')
            .then((resp) => {
                this.setState({ products: resp.data })
            })
            .catch()
    }

    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.state.products)}</pre>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Image</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.products.length > 0 ? <>
                                            {
                                                this.state.products.map((product) => {

                                                    return <tr>
                                                        <td>{product._id}</td>
                                                        <td>{product.name}</td>
                                                        <td><img src={product.image} alt="" /></td>
                                                    </tr>
                                                })
                                            }
                                        </> : null
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product
