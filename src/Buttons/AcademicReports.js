import React from 'react'
import '../index.css'
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';

function AcademicReports() {
  return (
    <div class="dropdown">
        <button class="dropbtn"><DesktopWindowsIcon fontSize="small"/><p>&nbsp;&nbsp;</p>Academic Reports</button>
        <div class="dropdown-content">
            <a href="#">Academic_Planner_2021_22_ODD</a>
            <a href="#">Academic_Planner_2021_22_EVEN</a>
        </div>
    </div>
  )
}

export default AcademicReports