import React from 'react'
import { Provider } from 'react-redux'
import Message from './Message/Message'
import { store } from './redux/store'
const App = () => {
    return (
        <div>
            <Provider store={store}>
                <Message />
            </Provider>
        </div>
    )
}

export default App
