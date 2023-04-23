import React, { useState } from "react";
import python from "../Icons/topic.svg";
import assignment from "../Icons/assignment.svg";
import quiz from "../Icons/moduleQuiz.svg";
import { Link, Route, Router, Routes } from "react-router-dom";
import Python from "./python_page";
import Quiz from "./quiz_page";
import Assignment from "./assignment_page";

function Modules() {
  // const [selectedTopic, setSelectedTopic] = useState("");

  // function handleTopicClick(topic) {
  //   setSelectedTopic(topic);
  // }

  // return (
    
  //     <div style={{ display: "flex", flexGrow: 1 }}>
  //       <div className="module-sidebar">
  //         <Link
  //           to="/modules"
  //           className={`topic ${
  //             selectedTopic === "Python Loops" ? "selected" : ""
  //           }`}
  //           onClick={() => handleTopicClick("Python Loops")}
  //         >
  //           <img src={python} alt="Python Loops" />
  //           <span>Python Loops</span>
  //         </Link>
  //         <Link
  //           to="/modules/quiz"
  //           className={`topic ${
  //             selectedTopic === "Quiz-1: Data Types" ? "selected" : ""
  //           }`}
  //           onClick={() => handleTopicClick("Quiz-1: Data Types")}
  //         >
  //           <img src={quiz} alt="Quiz-1: Data Types" />
  //           <span>Quiz-1: Data Types</span>
  //         </Link>
  //         <Link
  //           to="/modules/assignment"
  //           className={`topic ${
  //             selectedTopic === "Assignment-1: Operators | Loops"
  //               ? "selected"
  //               : ""
  //           }`}
  //           onClick={() => handleTopicClick("Assignment-1: Operators | Loops")}
  //         >
  //           <img src={assignment} alt="Assignment-1: Operators | Loops" />
  //           <span>Assignment-1: Operators | Loops</span>
  //         </Link>
  //       </div>
  //       <Routes>
  //         <Route  path="/modules" element={<Python />} />
  //         <Route  path="/modules/quiz" element={<Quiz />} />
  //         <Route
            
  //           path="/modules/assignment"
  //           element={<Assignment />}
  //         />
  //       </Routes>
  //     </div>
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleTopicClick(topic) {
    setSelectedTopic(topic);
  }

  return (
    <div className="module-sidebar">
      <Link
        to="/modules/topic"
        className={`topic ${selectedTopic === "Python Loops" ? "selected" : ""}`}
        onClick={() => handleTopicClick("Python Loops")}
      >
        <img src={python} alt="python"></img>
        <span>Python Loops</span>
      </Link>
      <Link
        to="/modules/quiz"
        className={`topic ${
          selectedTopic === "Quiz-1: Data Types" ? "selected" : ""
        }`}
        onClick={() => handleTopicClick("Quiz-1: Data Types")}
      >
        <img src={quiz} alt="quiz"></img>
        <span>Quiz-1: Data Types</span>
      </Link>
      <Link
        to="/modules/assignment"
        className={`topic ${
          selectedTopic === "Assignment-1: Operators | Loops" ? "selected" : ""
        }`}
        onClick={() => handleTopicClick("Assignment-1: Operators | Loops")}
      >
        <img src={assignment} alt="assignment"></img>
        <span>Assignment-1: Operators | Loops</span>
      </Link>
    </div>
  );
}

export default Modules;
