import React from 'react'
class Message extends React.Component {
    ename = "Rahul"
    render() {
        return <div>
            <h3> Message Component</h3>
            <h3>Employee Name:{this.ename}</h3>
        </div>
    }
}

export default Message