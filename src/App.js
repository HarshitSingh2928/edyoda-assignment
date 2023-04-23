import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/navbar';
import BlueBar from './Components/bluebar';
import Sidebar from './Components/sidebar';
import HomePage from './Components/homepage';
import Modules from './Components/modules';
import Instructor from './Components/instructor';
import Assignment from './Components/assignment_page';
import Quiz from './Components/quiz_page';
import Python from './Components/python_page';

function App() {
  return (
    <Router>
    <div className="App">
      <header >
        <Navbar/>
        <BlueBar/>
      </header>
      <div style={{ display:"flex",flexGrow: 1}}>
      <Sidebar/>
      
      <Routes>
            <Route exact path="/" element={ <HomePage/>}/>
            <Route exact path="/instructor" element={ <Instructor/>}/>
            <Route exact path="/modules/topic" element={<Python />} />
            <Route exact path="/modules/quiz" element={<Quiz />} />
            <Route exact path="/modules/assignment" element={<Assignment />} />
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
