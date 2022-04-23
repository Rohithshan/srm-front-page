import React from 'react'
import './index.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function header() {
  return (
    <div className="header">
      <div className="academiaTitle">
        <h3>Academia - Academic Web Services</h3>
      </div>
      <div className="userImage">
        <p>rs7114&nbsp;</p> 
        <AccountCircleIcon />
      </div>
    </div>
  )
}

export default header