import React from 'react'
import '../index.css'
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';

function UnifiedTimeTable() {
  return (
    <div class="dropdown">
        <button class="dropbtn"><DesktopWindowsIcon fontSize="small"/><p>&nbsp;&nbsp;</p>UnifiedTimeTable</button>
        <div class="dropdown-content">
            <a href="#">Minor Time Table</a>
            <a href="#">Special Time Table - 1</a>
            <a href="#">Special Time Table - 2</a>
            <a href="#">Unified Time Table Jan-22 -Batch-1</a>
            <a href="#">Unified Time Table Jan-22 -Batch-2</a>
        </div>
    </div>
  )
}

export default UnifiedTimeTable