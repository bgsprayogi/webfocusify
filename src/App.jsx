import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from "./components/ImageSlider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NameInput from './components/NameInput';
import TimerPage from './pages/TimerPage';
import RealtimePage from './pages/RealTime';
import LandingPage from './pages/LandingPages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/nameinput" element={<NameInput />} />
        <Route path="/timerpage" element={<TimerPage />} />
        <Route path="/realtime" element={<RealtimePage />} />
      </Routes>
    </Router>
  );
}

export default App;
