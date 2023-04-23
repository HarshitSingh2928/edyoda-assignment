import React from 'react'
import Modules from './modules'
import calendarIcon from "../Icons/calendar.svg";
import clockIcon from "../Icons/clock-blue.svg";
const Quiz = () => {
  return (
    <div style={{ display: "flex", flexGrow: 1 }}>
      <Modules />
      <div className="assinment-parent">
        <div className="assignment-outbox">
          <div className="assignment-outbox-problem">
            <div>
              <p
                style={{
                  display: "inline",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                Quiz-1: Data Types
              </p>
            </div>
            <div
              style={{
                marginBottom: "15px",
              }}
            >
              <p style={{ display: "inline", fontSize: "10px" }}>
                16 December 2021, Thursday
              </p>
            </div>
            <div>
              <p
                style={{
                  display: "inline",
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
              >
                Quiz Details
              </p>
            </div>
          </div>
        </div>
      
        <div class="the-box" style={{width:"130%"}}>
  <div class="inbox-score" style={{width:"30%"}}>
    <div >
      <div>10</div>
      <div>Questions</div>
    </div>
    <div >
      <div>-</div>
      <div>Duration</div>
    </div>
    <div style={{display:"flex"}}>
      <div>125</div>
      <div>Total Score</div>
    </div>
  </div>

  <div class="line"></div>

  <div class="date-box">
    <div>Start:</div>
    <div>
      <img src={calendarIcon} alt="calendar icon" />
      <p>16 December 2021</p>
    </div>
    <div>
      <img src={clockIcon} alt="clock icon" />
      <p>07:30 PM</p>
    </div>
  </div>

  <div class="date-box">
    <div>Due:</div>
    <div>
      <img src={calendarIcon} alt="calendar icon" />
      <p>19 December 2021</p>
    </div>
    <div>
      <img src={clockIcon} alt="clock icon" />
      <p>11:59 PM</p>
    </div>
  </div>
</div>

      </div>
    </div>
  )
}

export default Quiz