import React from 'react'
let Message = () => {
    let [msg, setMsg] = React.useState("Hello")
    let gmHandler = () => {
        setMsg("Hello,GMMMMMMMMM")
    }
    let gnHandler = () => {
        setMsg("GNNNNNNNN")
    }
    return <>
        <pre>{JSON.stringify(msg)}</pre>
        <h2>Message Component</h2>
        <h4>Message Value: {msg} </h4>
        <button onClick={gmHandler}>GM</button>
        <button onClick={gnHandler}>GN</button>
    </>

}
export default Message