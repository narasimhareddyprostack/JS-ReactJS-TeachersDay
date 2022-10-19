import React from 'react'
class Counter extends React.Component {
    //counter = 1;
    state = {
        counter: 1
    }
    incrHandler = () => {
        this.setState({ counter: this.state.counter + 1 })
    }
    decrHandler = () => {
        this.setState({ counter: this.state.counter - 1 })
    }
    render() {
        console.log("render method")
        return <div>
            <h2>Counter Component</h2>
            <h2>Counter Value:{this.state.counter}</h2>
            <button onClick={this.decrHandler}>DECR</button>
            <button onClick={this.incrHandler}>INCR</button>
        </div>
    }
}
export default Counter