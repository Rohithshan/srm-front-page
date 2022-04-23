import React from 'react'
import '../index.css'
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';

function CourseFeedback() {
  return (
    <div class="dropdown">
        <button class="dropbtn"><DesktopWindowsIcon fontSize="small"/><p>&nbsp;&nbsp;</p>Course Feedback</button>
        <div class="dropdown-content">
        </div>
    </div>
  )
}

export default CourseFeedback