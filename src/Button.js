import React from 'react'
import Circular from './Buttons/Circular'
import Welcome from './Buttons/Welcome'
import StudentProfile from './Buttons/StudentProfile'
import AcademicReports from './Buttons/AcademicReports'
import Student from './Buttons/Student'
import UnifiedTimeTable from './Buttons/UnifiedTimeTable'
import CourseFeedback from './Buttons/CourseFeedback'
import Extra from './Buttons/Extra'
import './index.css'

function Button() {
  return (
    <div className="button">
        <Circular />
        <Welcome />
        <StudentProfile />
        <AcademicReports />
        <Student />
        <UnifiedTimeTable />
        <CourseFeedback />
        <Extra />
    </div>
  )
}

export default Button