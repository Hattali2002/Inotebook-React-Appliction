import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./Components/NavbarComp";
import Home from "./Components/Home";
import About from "./Components/About";
import { Route, Routes } from 'react-router-dom';
import NotesState from "./context/notes/NotesState";
function App() {
  return (
    <>
      <NotesState>
        <NavbarComp />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </NotesState>
    </>
  );
}

export default App;

