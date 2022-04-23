import React from 'react'
import '../index.css'
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';

function Circular() {
  return (
    <div class="dropdown">
        <button class="dropbtn"><DesktopWindowsIcon fontSize="small" /><p>&nbsp;&nbsp;</p>CIRCULAR</button>
        <div class="dropdown-content">
            <a href="#">SRMIST CET_Circulars</a>
            <a href="#">Circular III Year BTECH</a>
        </div>
    </div>
  )
}

export default Circular