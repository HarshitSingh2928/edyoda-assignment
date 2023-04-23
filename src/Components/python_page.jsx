import React from 'react'
import Modules from './modules'
import info from "../Icons/information-circle-1.svg"
import play from "../Icons/play-circle.svg"
import video from "../Icons/videocam.svg"
import doc from "../Icons/document.svg"
const Python = () => {
  return (
    <div style={{ display: "flex", flexGrow: 1,backgroundColor:"#eff5fb" }}>
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
              Python Loops
            </p>
          </div>
          <div
            style={{
              marginBottom: "15px",
            }}
          >
            <p style={{ display: "inline", fontSize: "10px" }}>
              15 December 2021, Wednesday, 07:30 PM
            </p>
          </div>
        </div>
      </div>
      <div style={{textAlign:'right',fontSize:"9px",fontWeight:"bold",color:"navy"}}>DAILY FEEDBACK</div>
      
    <div className="tab-container">
    <div className="tabs">
          <div className="tab-item selected" style={{backgroundColor:"#fff"}}>
            <img src={info} alt="Session icon" />
            <p>Session</p>
          </div>
          <div className="tab-item">
            <img src={play} alt="Pre-watch video icon" />
            <p>Pre-watch videos</p>
          </div>
          <div className="tab-item">
            <img src={video} alt="Session recording icon" />
            <p>Session recording</p>
          </div>
          <div className="tab-item">
            <img src={doc} style={{height:"15px" , color:"white"}} alt="References icon" />
            <p>References</p>
          </div>
        </div>
        <div className="tab-content">
        <div className="session-tab selected">
        <div className="session-plan">
          <p style={{textAlign:"start", fontSize:"18px",margin:"0px"}}>Session Plan</p>
          <p className="subtitle">Live Session is about to start. Please stay tuned.</p>
          <button className="join-session-button">Join Live Session</button>
        </div>

        <div className="sub-topics">
          <p style={{fontWeight:"bold"}}>Sub topics</p>
          <div>
            <p>1.Sorting and Indexing Dataframe</p>
            <p>2.Filtering Dataframe</p>
            <p>3.Usage of Ioc</p>
          </div>
        </div>
        <p>Session Details</p>
        </div>
        </div>
        </div>
    <div></div>
    </div>
   
  </div>
  )
}

export default Python