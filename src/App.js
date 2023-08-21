import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./Components/NavbarComp";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Alert from "./Components/Alert";
import { Route, Routes } from 'react-router-dom';
import NotesState from "./context/notes/NotesState";
import Login from "./Components/Login";
import Signup from "./Components/Signup";


function App() {
  const [alert, setAlert] = useState(null);
  const showAlert=(type,message)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    },1500)
    
  }
  return (
    <>
      <NotesState>
        <NavbarComp />
        <Alert alert={alert}/>
        <Routes>
          <Route exact path="/" element={<Login showAlert={showAlert}/>} />
          <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
          <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />
          <Route exact path="/home" element={<Home showAlert={showAlert}/>} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </NotesState>
    </>
  );
}

export default App;

