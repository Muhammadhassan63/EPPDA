import React from "react";
import {
    BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";

import Map from "./components/Map";
import CrimeForm from "./components/CrimeForm";
import Navbar from "./components/Navbar";
import CrimeReport from "./components/CrimeReport";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";

import CrimePage from "./components/CrimePage";

  const RouterComponent=()=>{
    return(
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/crimeform" element={<CrimeForm/>}/>
            <Route path="/map" element={<Map/>}/>
            <Route path="/" element={<Map/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/adminDashboard" element={<AdminDashboard/>}/>
            <Route path="/cr" element={<CrimeReport/>}/>
            <Route path="/cp" element={<CrimePage/>}/>
        </Routes>
        </BrowserRouter>
    )
  }

  export default RouterComponent