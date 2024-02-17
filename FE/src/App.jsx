import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Thêm Navigate từ react-router-dom
import AboutUsPage from './components/AboutUsPage/aboutUsPage';
import ScholarshipFinderPage from './components/ScholarshipFindersPage/scholarshipfindersPage';
import AdvisePage from './components/AdvisePage/advisePage';
import CommunicationPage from './components/CommunicationPage/communicationPage';
import CollageToolPage from './components/CollegeToolPage/collegetoolPage';
import Header from './components/Header/Header'
import Uni from './components/CollegeToolPage/Uni';
import Major from './components/CollegeToolPage/Major';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Home from './components/HomePage/Home';
function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} /> {/* Đặt Navigate tới trang HomePage */}
          <Route path="/scholarship-finder" element={<ScholarshipFinderPage />} />
          <Route path="/college-tool" element={<CollageToolPage />} />
          <Route path="/advise" element={<AdvisePage />} />
          <Route path="/communication" element={<CommunicationPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/regis" element={<RegistrationForm />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
