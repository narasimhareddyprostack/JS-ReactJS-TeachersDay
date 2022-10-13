import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Component/Hero'
class App extends React.Component {

    render() {

        return <div>
            <Navbar />
            <Hero />
        </div>
    }
}
export default App