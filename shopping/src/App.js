import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/All codes/Navbar/Navbar";
import NewItems from "./Components/NewItems/NewItems";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/news' element={<NewItems/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
