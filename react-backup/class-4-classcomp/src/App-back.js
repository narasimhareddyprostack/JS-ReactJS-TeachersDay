import React from 'react'
class App extends React.Component {
    constructor(props) {
        super(props)
        console.log("Test Caes 123 - First Const")
    }
    render() {
        console.log("Test Case 123 - Second ")
        return <div>
            <h1>App Comp</h1>
        </div>
    }
}
export default App