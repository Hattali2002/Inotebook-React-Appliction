import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./Components/NavbarComp"; 
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import { Route, Routes } from 'react-router-dom';
import NotesState from "./context/notes/NotesState";  
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() { 
   
  return (
    <>
      <NotesState>
        <NavbarComp/> 
        <Routes>
          <Route exact path="/" element={<Login />} /> 
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} /> 
          <Route exact path="/home" element={<Home/>} />  
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact/>} />
        </Routes>
      </NotesState>
    </>
  );
}

export default App;

