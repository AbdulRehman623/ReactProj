import { useState } from "react";
import logo from "./logo.svg";

import "./App.css";
import First from "./First";
import Firstclass from "./Firstclass";
import Stateclass from "./Stateclass";
import Inputvalue from "./Inputvalue";
import Propfunc from "./Propfunc";
import React, { Component } from "react";
import SecondApp from "./SecondApp";
import Effect from "./Effect";
import CssStyle from "./CssStyle";
import BootstrapStyle from "./BootstrapStyle";
import MapFunction from "./MapFunction";
import MapLoopFunction from "./MapLoopFunction";
import ReuseComp from "./ReuseComp";
import LiftingStateUpComp from "./LiftingStateUpComp";
import MemoComp from "./MemoComp";
import UseRefComp from "./UseRefComp";
import ForwardRef from "./ForwardRef";
import ControlledComponent from "./ControlledComponent";
import UnControlledComponent from "./UnControlledComponent";
import HOC from "./HOC";
import RCheck from "./RCheck";
import RSecCheck from "./RSecCheck";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ThirdApp from "./ThirdApp";
import HomeRout from "./RouterComponent/HomeRout";
import AboutRout from "./RouterComponent/AboutRout";
import NavBar from "./RouterComponent/NavBar";
import Page404 from "./RouterComponent/Page404";
import UserParameters from "./RouterComponent/UserParameters";
import Filter from "./RouterComponent/Filter";
import Contact from "./RouterComponent/Contact";
import Company from "./RouterComponent/ContactComponent/Company";
import Other from "./RouterComponent/ContactComponent/Other";
import Channel from "./RouterComponent/ContactComponent/Channel";
import Login from "./RouterComponent/Login";
import ProtectedRoute from "./RouterComponent/ProtectedRoute";

function App() {
  return (
    <div>
      {/* <SecondApp /> */}

      {/* <ThirdApp /> */}

      {/* For Router */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<RCheck />} />
          <Route path="/RSecCheck" element={<RSecCheck />} />
        </Routes>
      </BrowserRouter> */}

      {/* react router 6.0 lec */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ProtectedRoute Componen={HomeRout} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutRout />} />
          <Route path="/user/:name" element={<UserParameters />} />

          <Route
            path="/Filter"
            element={<ProtectedRoute Componen={Filter} />}
          />
          <Route path="/Contact/" element={<Contact />}>
            <Route path="Company" element={<Company />} />
            <Route path="Channel" element={<Channel />} />
            <Route path="Other" element={<Other />} />
          </Route>

          {/* if show page 404 */}
          {/* <Route path="/*" element={<Page404 />} /> */}
          {/* if auto redirect to home page */}
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
