import React from 'react'
import Product from './Product/Product'
import { Provider } from 'react-redux'
import { store } from './redux/store'
const App = () => {
    return (
        <div>
            <Provider store={store}>
                <h1>App Component</h1>
                <Product />
            </Provider>
        </div>
    )
}

export default App
