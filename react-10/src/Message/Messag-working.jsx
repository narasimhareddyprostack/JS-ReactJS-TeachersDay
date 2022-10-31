let Message = () => {
    let state = {
        msg: "Hello, Jagadeesh"
    }
    let gmHandler = () => {
        state.msg = "Hello,GM"
        console.log(state.msg)
    }
    return <>
        <pre>{JSON.stringify(state)}</pre>
        <h2>Message Component</h2>
        <button onClick={gmHandler}>GM</button>
        <button>GN</button>
    </>

}
export default Message