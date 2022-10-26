import React, { Component } from 'react'

class Message extends Component {
    state = {
        msg: "Hello"
    }
    gmHandler = () => {
        this.setState({
            msg: "Good Morning"
        })
    }
    gaHandler = () => {
        this.setState({
            msg: "Good Afternoon"
        })
    }
    geHandler = () => {
        this.setState({
            msg: "Good Evening"
        })
    }
    gnHandler = () => {
        this.setState({
            msg: "Good Night"
        })
    }
    render() {
        return (
            <div>
                <h1>Evening Binding</h1>
                <hr />
                <h2>Message:{this.state.msg}</h2>
                <button onClick={this.gmHandler}>GM</button>
                <button onClick={this.gaHandler}>GA</button>
                <button onClick={this.geHandler}>GE</button>
                <button onClick={this.gnHandler}>GN</button>
            </div>
        )
    }
}

export default Message
