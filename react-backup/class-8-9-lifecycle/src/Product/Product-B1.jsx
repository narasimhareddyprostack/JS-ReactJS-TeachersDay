import React from 'react'
class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Iphone 12",
            image: "data:image/webp;base64,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",
            price: 40000,
            qty: 1
        }
    }
    incrHandler = () => {
        this.setState({ qty: this.state.qty + 1 })
    }
    decrHandler = () => {
        this.setState({ qty: this.state.qty - 1 })
    }
    render() {

        return <div className="container">
            <h1>Prdouct Comp</h1>
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="row">
                <div className="col-md-8">
                    <table className="table">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th>Prodct Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>QTY</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.name}</td>
                                <td><img src={this.state.image} /></td>
                                <td>{this.state.price}</td>
                                <td><i className="fa fa-minus-circle" onClick={this.decrHandler} ></i>{this.state.qty} <i className="fa fa-plus-circle" onClick={this.incrHandler}></i></td>
                                <td>{this.state.qty * this.state.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    }
}
export default Product