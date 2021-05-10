import React from 'react'
import "./header.css"
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
function Header() {
    return (
        <div className="header">
            <IconButton> 
            <PersonIcon fontSize="large" className="header_icon" />
            </IconButton>
             <img className="header_logo" src="https://wpuploads.appadvice.com/wp-content/uploads/2015/07/Tinder-logo.jpg"></img>
             <IconButton> 
            <ForumIcon fontSize="large" className="header_icon" />
            </IconButton>
        </div>
    )
}

export default Header
