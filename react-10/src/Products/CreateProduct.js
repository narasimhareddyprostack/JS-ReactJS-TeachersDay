import React, { useState } from 'react'
import Axios from 'axios'
const CreateProduct = () => {
    let [product, setProduct] = useState({ name: "", image: "  ", price: "", qty: 1, info: "" });
    let [errorMessaage, setErrorMessage] = useState("")
    let [submitted, setSubmitted] = useState(false);
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
        let url = `http://127.0.0.1:5000/api/products/`
        Axios.post(url, product)
            .then((response) => {
                setSubmitted(true)
                console.log("Test Case 124")
            })
            .catch((err) => {
                setErrorMessage(err)
            })
    }
    return <React.Fragment>
        <div className="container mt-5">
            <pre>{JSON.stringify(product)}</pre>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <h3>Create Product</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={submitProduct}>
                                <div className="form-group">
                                    <input type="text" name="name" onChange={changeInput} className="form-control" placeholder="Product Name" />
                                </div>
                                <div className="form-group">
                                    <input type="file" name="image" id="customFile" required onChange={changeImageHandler} />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="price" onChange={changeInput} className="form-control" placeholder="Price" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="qty" onChange={changeInput} className="form-control" placeholder="QTY" />
                                </div>
                                <div className="form-group">
                                    <input type="text" onChange={changeInput} name="info" className="form-control" placeholder="Information" />
                                </div>
                                <input type="submit" value="Create Product" onChange={changeInput} className="btn btn-primary" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default CreateProduct
