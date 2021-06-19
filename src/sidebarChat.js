import React from 'react'
import './sidebarChat.css'
import  {Avatar} from '@material-ui/core';

function sidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebarChat__info">
                <h2>room name</h2>
                <p>this is the last message 
                </p>
            </div>
        </div>
    )
}

export default sidebarChat
