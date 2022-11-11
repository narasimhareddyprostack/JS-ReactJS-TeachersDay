import React from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
const ProductAdmin = () => {
    let [products, setProducts] = React.useState([])
    React.useEffect(() => {
        getPrdoucts()
    }, [])
    let getPrdoucts = () => {
        let url = `http://127.0.0.1:5000/api/products`
        Axios.get(url)
            .then((response) => {
                setProducts(response.data)
            })
            .catch(() => { })
    }
    let deleteProduct = (productid) => {
        let delurl = `http://127.0.0.1:5000/api/products/${productid}`
        Axios.delete(delurl)
            .then((response) => {
                //write some busienss logic
                getPrdoucts()
            })
            .catch((err) => { })
    }
    return (
        <React.Fragment>
            <div className="container mt-5">
                <pre>{JSON.stringify(products)}</pre>
                <div className="row">
                    <div className="col">
                        <p className="h3">Product Details</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eveniet sit vitae. Blanditiis consequatur tempora, debitis, facere eum expedita doloribus qui, fugiat odit vel aperiam. Nihil minima culpa dolor reprehenderit!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <table className="table table-hover">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>S No</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>QTY</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.length > 0 ? <>
                                        {
                                            products.map((product) => {
                                                return <tr>
                                                    <td>{product._id}</td>
                                                    <td>{product.name}</td>
                                                    <td>{product.price}</td>
                                                    <td>{product.qty}</td>
                                                    <td>
                                                        <Link to={`/update/${product._id}`} className="btn btn-warning">Update</Link>
                                                        <Link onClick={deleteProduct.bind(this, product._id)} className="btn btn-danger">Delete</Link>
                                                    </td>
                                                </tr>
                                            })
                                        }
                                    </> : <React.Fragment>
                                            <tr>
                                                <td className="text-danger"> *************** No Products*************</td>
                                            </tr>
                                        </React.Fragment>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default ProductAdmin
