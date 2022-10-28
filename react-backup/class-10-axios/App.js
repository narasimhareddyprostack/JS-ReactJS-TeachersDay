import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import Login from './Components/Login'
import Registration from './Components/Registration'
import User from './User/User'
import Product from './Product/Product'
class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Product />
            </div>
        )
    }
}

export default App
