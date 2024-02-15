import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUsPage from './components/AboutUsPage/aboutUsPage';
import ScholarshipFinderPage from './components/ScholarshipFindersPage/scholarshipfindersPage';
import AdvisePage from './components/AdvisePage/advisePage';
import CommunicationPage from './components/CommunicationPage/communicationPage';
import CollageToolPage from './components/CollegeToolPage/collegetoolPage';
import Header from './components/Header/Header'
import Uni from './components/CollegeToolPage/Uni';
import Major from './components/CollegeToolPage/Major';
function App() {


  return (
    <div className='App'>
    
      <Router>
      <Header />
        <Routes>
        <Route path="/scholarship-finder" element={<ScholarshipFinderPage />} />
        </Routes>
        <Routes>
        <Route path="/college-tool" element={<CollageToolPage />} />
        </Routes>
        <Routes>
        <Route path="/advise" element={<AdvisePage />} />
        </Routes>
        <Routes>
        <Route path="/communication" element={<CommunicationPage />} />
        </Routes>
        <Routes>
        <Route path="/about" element={<AboutUsPage />} />
        </Routes>
      
      </Router>
        
    </div>
  
  )
}

export default App
