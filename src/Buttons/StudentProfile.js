import React from 'react'
import '../index.css'
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';

function StudentProfile() {
  return (
    <div class="dropdown">
        <button class="dropbtn"><DesktopWindowsIcon fontSize="small"/><p>&nbsp;&nbsp;</p>Student Profile</button>
        <div class="dropdown-content">
            <a href="#">Photo Upload Student</a>
            <a href="#">Student Profile Report</a>
        </div>
    </div>
  )
}

export default StudentProfile