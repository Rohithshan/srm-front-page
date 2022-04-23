import React from 'react'
import './index.css'
import academia from './images/academia-new.jpg'
import srmcloud from './images/downloadPortalImage.png'
function Content() {
  return (
    <div className="content">
        <p id="info"><strong>Date:23-Apr-22</strong> </p>
        <p id="info"><strong>Day Order:No Day Order</strong></p>
        <p id="details"><span style={{color: "red"}}>Early symptoms of Covid-19 -</span>  Sore throat, dry cough, fever, cold, loss of smell, loss of taste etc. If any of the above symptoms are noticed contact emergency helpline.</p>
        <p id="details">Emergency Contact :- <span style={{backgroundColor: "#55B3E7", color: "white"}}> <strong>044 - 2 7 4 5 2 7 2 7</strong></span></p>
        <p id="details">Mobile: :- <span style={{backgroundColor: "#55B3E7", color: "white"}}> <strong>9 7 8 9 8 8 8 4 5 3 / 9 9 4 0 0 9 6 0 1 2</strong> </span></p>

        <div className="academiaInfo">
          <img src={ academia } alt="" />
          <p id="aboutSRM">SRM Academia is the Official Student/Parent Portal of SRM's Faculty of Engineering and Technology which aims at providing a better experience to the students to access the academic web services. The portal is a gateway to your academic information such as attendance, internal marks, timetable, etc.</p>
          <img id="srmcloud" src={ srmcloud } alt="text" />
        </div>
    </div>

  )
}

export default Content