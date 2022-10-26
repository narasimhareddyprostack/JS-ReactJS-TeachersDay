import React, { Component } from 'react'

class Digit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ct: new Date().toLocaleTimeString()
        }
    }
    componentDidMount() {

        setInterval(() => {

            this.setState({ ct: new Date().toLocaleTimeString() })
        }, [1000]);
    }
    render() {

        return <>
            <h1>Time:{this.state.ct}</h1>
        </>
    }
}

export default Digit
