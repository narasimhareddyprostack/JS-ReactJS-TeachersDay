import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import ProductList from './Products/ProductList'
import CreateProduct from './Products/CreateProduct'
const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/create" element={<CreateProduct />} />
                </Routes>
            </Router>


        </div>
    )
}

export default App
