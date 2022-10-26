import React, { Component } from 'react'

class Message extends Component {
    state = {
        msg: "Hello"
    }
    updateHandler = (value) => {
        this.setState({ msg: value })
    }
    render() {
        return (
            <div>
                <h1>Evening Binding</h1>
                <hr />
                <h2>Message:{this.state.msg}</h2>
                <button onClick={this.updateHandler.bind(this, "Good Morning")}>GM</button>
                <button onClick={this.updateHandler.bind(this, "Good Afternoon")}>GA</button>
                <button onClick={this.updateHandler.bind(this, "Good Evening")}>GE</button>
                <button onClick={this.updateHandler.bind(this, "Good Night")}>GN</button>
            </div>
        )
    }
}

export default Message
