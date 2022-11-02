import React from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Users/Home'
import UserApp from './Users/UserApp'
import Product from './Product/Product'
const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users" element={<UserApp />} />
                    <Route path="/product" element={<Product />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
