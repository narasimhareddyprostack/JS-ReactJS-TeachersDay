import React, { Component } from 'react'

class Digit extends Component {
    constructor(props) {
        super(props)
        console.log("First Constructor")
    }
    componentDidMount() {
        console.log("3rd - DidMouning")
    }
    render() {
        console.log("Secon - Render ")
        return <></>
    }
}

export default Digit
