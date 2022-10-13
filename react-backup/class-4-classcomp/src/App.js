import React from 'react'
import Message from './Components/Message'
import Hero from './Components/Hero'
class App extends React.Component {

    render() {
        console.log("Test Case 123 - Second ")
        return <div>
            <h1>App Comp</h1>
            <hr />
            <Message />
            <hr />
            <Hero />
        </div>
    }
}
export default App