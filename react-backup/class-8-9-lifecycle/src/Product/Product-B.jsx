import React from 'react'
class Product extends React.Component {
    constructor(props){
        super(props)
        console.log("First const")
    }
    render() {
        console.log("Second - render method")
        return <div>
            <h1>Prdouct Comp</h1>
        </div>
    }
}
export default Product