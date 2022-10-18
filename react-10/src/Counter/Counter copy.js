import React from 'react'
class Counter extends React.Component {
    constructor(props) {
        super(props)
        console.log("Constructor")
    }
    render() {
        console.log("render method")
        return <div>
            <h2>Counter Component</h2>
        </div>
    }
}
export default Counter