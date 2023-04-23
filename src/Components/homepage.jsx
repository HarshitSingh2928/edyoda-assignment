import React from "react";
import data_icon from "../Icons/Data-Analysis.png";
import visual_icon from "../Icons/Data-Wrangling.png";
import topic from "../Icons/topic.svg";
const HomePage = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h2>Upcoming Certifications</h2>
      </div>
      <div className="certification-box">
        <div className="icon-box">
          <img src={data_icon} alt="Data Analysis" />
        </div>
        <div className="certification-details">
          <div className="certification-attempt">
            <span>Certification</span>|<span>Attempt 1</span>
          </div>
          <div className="certification-title">
            <p>
              DATA ANALYSIS<br></br>CERTIFICATION
            </p>
          </div>
          <div className="certification-completed-box">
            <span>Completed</span>|<span>21 Mar 2022</span>
          </div>
        </div>

        <div className="exam-structure">
          <div className="exam-structure-title">Exam Structure</div>
          <div className="exam-rounds">
            <div className="exam-round">
              <div className="exam-round-name">Round 1</div>
              <div className="exam-round-details">
                <div className="exam-round-detail">
                  <div className="grey-box">MCQs</div>
                </div>
                <div className="exam-round-detail">
                  <div className="grey-box">CODING</div>
                </div>
              </div>
            </div>
            <div className="exam-round">
              <div className="exam-round-name">Round 2</div>
              <div className="exam-round-details">
                <div className="exam-round-detail">
                  <div className="grey-box">PROJECT</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="view-button">VIEW EXAM DETAILS</div>
      </div>
      <div className="home-content">
        <h2>Continue Learning</h2>
      </div>
      <div className="home_bottom_section">
        <div className="module_section">
          <p
            style={{
              position: "absolute",
              top: -43,
              right: 7,
              fontSize: "12px",
              fontWeight: "bold",
              color: "lightblue",
            }}
          >
            VIEW MODULE DETAILS
          </p>
          <div className="module_left">
            <div style={{ display: "flex", alignItems: "start" }}>
              <div className="icon-box" style={{ marginRight: "20px" }}>
                <img
                  src={visual_icon}
                  alt="Data Analysis"
                  style={{ height: "50px", width: "50px" }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p
                  style={{
                    marginBottom: "-7px",
                    fontWeight: "bold",
                    textAlign: "start",
                  }}
                >
                  DATA WRANGLING &amp;
                  <br />
                  VISUALIZATION
                </p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={topic} alt="Topic" style={{ marginRight: "2px" }} />
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "lightblue",
                    }}
                  >
                    Test Instructor
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: "40px",
              }}
            >
              <div
                style={{
                  display: "flex",

                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "10px",
                    paddingRight: "3px",
                    fontFamily: "sans-serif",
                  }}
                >
                  Live
                </p>
                <p style={{ fontSize: "10px", fontFamily: "sans-serif" }}>
                  Sessions
                </p>
                <div
                  style={{
                    height: "5px",
                    width: "100px",
                    backgroundColor: "lightblue",
                    borderRadius: "5px",
                    position: "relative",
                    paddingLeft: "106px",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: "-15px",
                      left: "0",
                      fontSize: "10px",
                      color: "lightblue",
                    }}
                  >
                    0/13
                  </span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p style={{ fontSize: "10px", fontFamily: "sans-serif" }}>
                  Assignments
                </p>
                <div
                  style={{
                    height: "5px",
                    width: "100px",
                    backgroundColor: "lightblue",
                    borderRadius: "5px",
                    position: "relative",
                    paddingLeft: "106px",
                    marginLeft: "6px",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: "-15px",
                      left: "0",
                      fontSize: "10px",
                      color: "lightblue",
                    }}
                  >
                    0/3
                  </span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",

                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "10px",
                    paddingRight: "2px",
                    fontFamily: "sans-serif",
                  }}
                >
                  MCQ
                </p>
                <p style={{ fontSize: "10px", fontFamily: "sans-serif" }}>
                  Quiz
                </p>
                <div
                  style={{
                    height: "5px",
                    width: "100px",
                    backgroundColor: "lightblue",
                    borderRadius: "5px",
                    position: "relative",
                    paddingLeft: "106px",
                    marginLeft: "16px",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: "-15px",
                      left: "0",
                      fontSize: "10px",
                      color: "lightblue",
                    }}
                  >
                    0/6
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="module_right">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                alignItems: "start",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  marginTop: "20px",
                }}
              >
                <p style={{ fontSize: "16px", fontWeight: "bold", margin: 0 }}>
                  Today's Plan
                </p>
                <p style={{ fontSize: "10px", color: "gray", margin: 0 }}>
                  21 March 2022
                </p>
              </div>
              <div style={{ marginTop: "2px" }}>
                <p
                  style={{
                    fontSize: "14px",
                    color: "lightblue",
                    margin: 0,
                    textAlign: "start",
                  }}
                >
                  Data Transformation Using Pandas-3
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p
                  style={{
                    fontSize: "10px",
                    paddingRight: "2px",
                    fontFamily: "sans-serif",
                  }}
                >
                  Daily Feedback
                </p>
                <p
                  style={{
                    fontSize: "10px",
                    fontFamily: "sans-serif",
                    color: "lightblue",
                  }}
                >
                  Opens at 07:30 PM
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  style={{
                    backgroundColor: "lightgray",
                    color: "black",
                    borderRadius: "20px",
                    border: "none",
                    padding: "8px 20px",
                    fontSize: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Join Live Session
                </button>
              </div>

              <p
                style={{
                  fontSize: "10px",
                  marginLeft: "8px",
                  marginTop: "2px",
                }}
              >
                Begins at 07:20 PM
              </p>
            </div>
          </div>
        </div>
        <div className="progress_section">
          <p style={{ fontSize: "16px", marginBottom: "20px" }}>
            Progress Overview
          </p>
          <div
            style={{
              border: "1px solid lightblue",
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              borderRadius: "5px",
              marginBottom: "10px",
            }}
          >
            <p style={{ fontSize: "16px", marginBottom: "5px" }}>0%</p>
            <p style={{ fontSize: "16px", color: "grey" }}>Overall grade</p>
          </div>
          <div
            style={{
              border: "1px solid lightblue",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "10px",
              justifyContent: "space-between",
              borderRadius: "5px",
              marginBottom: "10px",
            }}
          >
            <p style={{ fontSize: "16px" }}>0%</p>
            <p style={{ fontSize: "16px", color: "grey" }}>Attendance</p>
          </div>
          <p style={{ fontSize: "14px", marginBottom: "5px" }}>
            View detailed progress
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
