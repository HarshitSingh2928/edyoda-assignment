import React, { useState } from "react";
import home_icon from "../Icons/home.svg";
import modules_icon from "../Icons/modules.svg";
import instructor_icon from "../Icons/instructor.svg";
import { Link } from "react-router-dom";

function Sidebar() {
  const [selectedIcon, setSelectedIcon] = useState("home");

  return (
    
    <div
      style={{
        backgroundColor: "#003152",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "6%",
        height: "150vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          flex: 1,
        }}
      >
        <Link to="/" style={{
            backgroundColor: selectedIcon === "home" ? "white" : "transparent",
            padding: "1rem",
            cursor: "pointer",
            height:"5%",
            width:"110%"
          }} onClick={() => setSelectedIcon("home")}>
      
          <img src={home_icon} style={{ width: "100%", height: "100%" }} />
        </Link>
        <Link to="/modules/topic"
          style={{
            backgroundColor:
              selectedIcon === "modules" ? "white" : "transparent",
            padding: "1rem",
            cursor: "pointer",
            height:"5%",
            width:"110%"
          }}
          onClick={() => setSelectedIcon("modules")}
        >
          <img src={modules_icon} style={{ width: "100%", height: "100%" }} />
        </Link>
        <Link to="/instructor"
          style={{
            backgroundColor:
              selectedIcon === "instructors" ? "white" : "transparent",
            padding: "1rem",
            cursor: "pointer",
            height:"5%",
            width:"110%"
          }}
          onClick={() => setSelectedIcon("instructors")}
        >
          <img
            src={instructor_icon}
            style={{ width: "100%", height: "100%" }}
          />
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
