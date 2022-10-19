import React, { Component } from 'react'

export class Message extends Component {
    //msg = "Hello,"
    state = {
        msg: "Hello"
    }
    gMHandler = () => {
        this.setState({ msg: "Hello,GM" })
    }
    gNHandler = () => {
        this.setState({ msg: "Hello,GN" })
    }
    render() {
        console.log("Exec - render Method")
        return (
            <div>
                <h2>Message Value:{this.state.msg}</h2>
                <button onClick={this.gMHandler}>GM</button>
                <button onClick={this.gNHandler}>GN</button>
            </div>
        )
    }
}

export default Message
