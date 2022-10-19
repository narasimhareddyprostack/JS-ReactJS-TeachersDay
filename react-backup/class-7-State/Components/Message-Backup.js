import React from 'react'
class Messaage extends React.Component {
    message = "Hello,"
    gmHandler = () => {
        console.log("Click is Working")
        this.message = "Hello,Good Morning"
        console.log(this.message)
        this.forceUpdate()
    }
    gnHandler = () => {
        this.message = "Hello,Good Night"
        this.forceUpdate()
    }
    render() {
        return <div>
            <h1>Wish Message : {this.message}</h1>
            <button onClick={this.gmHandler}>GM</button>
            &nbsp;&nbsp;
            <button onClick={this.gnHandler}>GN</button>
            <hr />
        </div>
    }
}
export default Messaage