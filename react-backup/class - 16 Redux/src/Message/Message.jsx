import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gmAction, gnAction } from '../redux/message/message.action'
const Message = () => {
    let dispatch = useDispatch();
    let message = useSelector((state) => {
        return state;
    })
    let gmHandler = () => {
        //dispatch an action
        dispatch(gmAction());
    }
    let gnHandler = () => {
        dispatch(gnAction())
    }
    return (
        <div>
            <pre>{JSON.stringify(message)}</pre>
            <h1>Messsage Component</h1>
            <h3>Message Value:{message.msg}</h3>            <button onClick={gmHandler}>GM</button>
            <button onClick={gnHandler}>GN</button>

        </div>
    )
}

export default Message
