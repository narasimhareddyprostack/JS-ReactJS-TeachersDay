import React from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Users/Home'
import UserApp from './Users/UserApp'
const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users" element={<UserApp />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
