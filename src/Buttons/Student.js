import React from 'react'
import '../index.css'
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';

function Student() {
  return (
    <div class="dropdown">
        <button class="dropbtn"><DesktopWindowsIcon fontSize="small"/><p>&nbsp;&nbsp;</p>Student</button>
        <div class="dropdown-content">
            <a href="#">Student Contact Update 2016-17</a>
            <a href="#">Student_Contact_Master_Update</a>
        </div>
    </div>
  )
}

export default Student