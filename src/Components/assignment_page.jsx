import React from "react";
import Modules from "./modules";
import calendarIcon from "../Icons/calendar.svg";
import clockIcon from "../Icons/clock-blue.svg";

const Assignment = () => {
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
                Assignment-1: Operators | Loops
              </p>
            </div>
            <div
              style={{
                marginBottom: "15px",
              }}
            >
              <p style={{ display: "inline", fontSize: "10px" }}>
                20 December 2021
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
                Assignment Details
              </p>
            </div>
          </div>
          <div className="outbox-score">
            <div>
              <div style={{ textAlign: "end" }}>3</div>
              <div>Problems</div>
            </div>
            <div>
              <div style={{ textAlign: "end" }}>100</div>
              <div>Total Score</div>
            </div>
          </div>
        </div>
      
        <div class="the-box">
  <div class="inbox-score">
    <div >
      <div>3</div>
      <div>Problems</div>
    </div>
    <div style={{display:"flex"}}>
      <div>100</div>
      <div>Total Score</div>
    </div>
  </div>

  <div class="line"></div>

  <div class="date-box">
    <div>Start:</div>
    <div>
      <img src={calendarIcon} alt="calendar icon" />
      <p>20 December 2021</p>
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
      <p>26 December 2021</p>
    </div>
    <div>
      <img src={clockIcon} alt="clock icon" />
      <p>11:59 PM</p>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default Assignment;
