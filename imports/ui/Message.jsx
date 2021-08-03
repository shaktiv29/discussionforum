import React from 'react'
import './Task.css'

export const Message = (props)=> {
    return <li className="message">
        <div className="email">
            {props.message.email}
        </div>
        <div className="message-content">
            {props.message.message}
        </div>
        </li>
}