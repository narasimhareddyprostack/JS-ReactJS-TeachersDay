function Message() {
    let a = 100;
    let b = 200;
    let message = "Good Morning";
    let name = "Rajni Kanth";
    let image = "data:image/jpeg;base64,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"
    return <div>
        <h1>Message Compoenet</h1>
        <h5>{a + b}</h5>
        <h2>Wish Message: {message}</h2>

        <h3>Hero Name:{name}</h3>
        <img src={image} />
    </div>
}
export default Message