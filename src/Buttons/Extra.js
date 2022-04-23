import React from 'react'
import '../index.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Extra() {
  return (
    <div class="dropdown">
        <button class="dropbtn"><MoreVertIcon fontSize="small"/></button>
        <div class="dropdown-content">
          <a href="#">My Time Table & Attendance</a>
          <a href="#">Student Service Request (SSR)</a>
          <a href="#">Student Address Details</a>  
        </div>
    </div>
  )
}

export default Extra

