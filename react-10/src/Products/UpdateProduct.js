import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Axios from 'axios'
const UpdateProduct = () => {
    let [productId] = React.useState(useParams().id)
    let [flag, setFlag] = React.useState(false);
    let [errorMessaage, setErrorMessage] = React.useState("")
    let [submitted, setSubmitted] = React.useState(false);
    let [product, setProduct] = React.useState({
        name: "",
        image: "",
        price: "",
        qty: "",
        info: ""
    })

    React.useEffect(() => {
        let url = `http://127.0.0.1:5000/api/products/${productId}`

        Axios.get(url).then((response) => {
            setProduct(response.data)
        }).catch();
    }, [])
    let changeInput = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value })
    };
    let changeImageHandler = async (event) => {
        let imageFile = event.target.files[0]
        let reader = new FileReader();
        reader.readAsDataURL(imageFile)
        reader.addEventListener("load", () => {
            if (reader.result) {
                setProduct({
                    ...product,
                    image: reader.result
                })
            }
            else {
                alert("Error")
            }
        })
    }
    let submitProduct = (event) => {
        console.log("Test Case 123")
        event.preventDefault();
        let url = `http://127.0.0.1:5000/api/products/${productId}`
        Axios.put(url, product)
            .then((response) => {
                setFlag(true)
                console.log("Test Case 124")
            })
            .catch((err) => {
                setErrorMessage(err)
            })
    }
    return <React.Fragment>
        {
            flag ? <Navigate to='/admin' /> : <div className="container">
                <pre>{JSON.stringify(product)}</pre>
                <div className="row">
                    <div className="col">
                        <p className="h2">Update Product</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem debitis dolores, perspiciatis odit placeat doloribus deserunt consectetur. Vitae, tempora. Fuga deserunt eum nisi laudantium voluptas culpa asperiores cum sunt repellat.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>{JSON.stringify(productId)}</p>
                        <p>{JSON.stringify(product)}</p>

                    </div>
                    <div className="row">
                        <div className="card">
                            <div className="card-header">Update Product</div>
                            <div className="card-body">
                                <form onSubmit={submitProduct}>
                                    <div className="form-group">
                                        <input type="text" name="name" value={product.name} onChange={changeInput} className="form-control" placeholder="Product Name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="file" name="image" id="customFile" required onChange={changeImageHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="price" value={product.price} onChange={changeInput} className="form-control" placeholder="Price" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="qty" value={product.qty} onChange={changeInput} className="form-control" placeholder="QTY" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" onChange={changeInput} name="info" className="form-control" placeholder="Information" />
                                    </div>
                                    <input type="submit" value="Update Product" onChange={changeInput} className="btn btn-primary" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }

    </React.Fragment>
}

export default UpdateProduct
