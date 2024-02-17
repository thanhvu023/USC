import React, { useState } from 'react';
import { useRef } from 'react';
import './header.scss'
import { Link } from 'react-router-dom';

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState('');

 

  const homeRef = useRef(null);
  const aboutUsRef = useRef(null);
const collageToolRef = useRef(null);

   // Function to scroll to a ref
   const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className='header-container'>
      <div className='container'>
        <div className='b1'>
         
          <Link to="/home" className='logo'/>
        
        </div>
        <div className='b2'  >
          <div ref={homeRef}>
          <button className="header-button"
      
         >
         <Link to="/scholarship-finder" >ScholarshipFinderPage</Link>
         </button>
          </div>
        <div ref={collageToolRef}>
        <button className="header-button"
         onClick={() => scrollToSection(collageToolRef)}
         >
         <Link to="/college-tool" >College Tool</Link>
         </button>
        </div>
       
         <button className="header-button">
         <Link to="/about-us" >AboutUs</Link>
         </button>
         <button className="header-button">
         <Link to="/communication" >Communication</Link>
         </button>
         <button className="header-button">
         <Link to="/regis" >Registration</Link>
         </button>
       

          <div className="avatar"></div>
        </div>
      </div>
    </div>
  );
}
