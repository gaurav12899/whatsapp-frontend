import React from 'react'
import './sidebar.css'
import SidebarChat from './sidebarChat.js'
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import  {Avatar,IconButton} from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
function sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://www.crictracker.com/wp-content/uploads/2021/03/Virat-Kohli-1-1.jpg"/>
            <div className="sidebar__headerRight">
        
            <IconButton>
            <DonutLargeIcon/>
            </IconButton>
            <IconButton>
                <ChatIcon/>
            </IconButton>
            <IconButton>
                <MoreVertIcon/>
            </IconButton>
            </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined/>
                    <input placeholder="search or start new chat" type="text"/>
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>

            </div>
        </div>
    )
}

export default sidebar
