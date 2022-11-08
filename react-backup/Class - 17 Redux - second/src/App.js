import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Users from './Users/Users'
import Navbar from './Navbar/Navbar'
import { Provider } from 'react-redux'
import { store } from './redux/store'
const App = () => {
    return (
        <div>
            <Provider store={store}>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/user" element={<Users />} />
                    </Routes>
                </Router>
            </Provider>

        </div>
    )
}

export default App
