import { useState } from "react";
import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"; // Thêm Navigate từ react-router-dom
import AboutUsPage from "./components/AboutUsPage/aboutUsPage";
import ScholarshipFinderPage from "./components/ScholarshipFindersPage/scholarshipfindersPage";
import AdvisePage from "./components/AdvisePage/advisePage";
import CommunicationPage from "./components/CommunicationPage/communicationPage";
import CollageToolPage from "./components/CollegeToolPage/collegetoolPage";
import Header from "./components/Header/Header";
import Uni from "./components/CollegeToolPage/Uni";
import Major from "./components/CollegeToolPage/Major";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import Home from "./components/HomePage/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Profile from "./components/Profile/Profile";
import EditProfile from "./components/Profile/EditProfie";
import ChangePassword from "./components/Profile/ChangePassword";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />{" "}
          {/* Đặt Navigate tới trang HomePage */}
          <Route
            path="/scholarship-finder"
            element={<ScholarshipFinderPage />}
          />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/college-tool" element={<CollageToolPage />} />
          <Route path="/advise" element={<AdvisePage />} />
          <Route path="/communication" element={<CommunicationPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/regis" element={<RegistrationForm />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
