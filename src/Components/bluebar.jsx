import React, { useState } from "react";

function BlueBar() {
  const [selectedSubject, setSelectedSubject] = useState("Select a subject");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
    setIsDropdownOpen(false);
  };
  const subjectList = ["ECRD", "FSR222222", "DS261121", "DS031221"];
  return (
    <div
      style={{
        backgroundColor: "#003152",
        display: "flex",
        alignItems: "center",
        padding: "5px 0px 5px 50px",
        color: "white",
        position: "relative",
      }}
    >
      <div style={{ position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              backgroundColor: isDropdownOpen ? "#003152" : "transparent",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {selectedSubject}
          </div>
          <div
            style={{
              backgroundColor: "#003152",
              width: "2rem",
              height: "2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span
              style={{
                transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s ease",
              }}
            >
              {isDropdownOpen ? "▲" : "▼"}
            </span>
          </div>
        </div>
      </div>
      <div style={{ paddingLeft: "20px" }}>Data Scientist Program</div>
      {isDropdownOpen && (
        <div
          style={{
            backgroundColor: "#003152",
            width: "100%",
            display: "flex",
            alignItems: "end",
            padding: "5px 0px 20px 30px",
            position: "absolute",
            top: "calc(100% )",
            left: 0,
            zIndex: 1,
          }}
        >
          {subjectList.map((subject, index) => (
            <div
              key={index}
              style={{
                backgroundColor:
                  subject === selectedSubject ? "white" : "#003152",
                color: subject === selectedSubject ? "blue" : "white",
                borderRadius: "5px",
                padding: "0px 20px 0px 20px",
                cursor: "pointer",
              }}
              onClick={() => setSelectedSubject(subject)}
            >
              {subject}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BlueBar;
