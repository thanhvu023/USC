import React from 'react';
import './header.scss'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header-container'>
      <div className='container'>
        <div className='b1'>
          <div className='logo'></div>
        </div>
        <div className='b2'>
        <button className="header-button">
         <Link to="/scholarship-finder" >Scholarship Finders</Link>
         </button>
         <button className="header-button">
         <Link to="/college-tool" >College Tool</Link>
         </button>
         <button className="header-button">
         <Link to="/advise" >Advise</Link>
         </button>
         <button className="header-button">
         <Link to="/communication" >Communication</Link>
         </button>
         <button className="header-button">
         <Link to="/about" >About Us</Link>
         </button>
       

          <div className="avatar"></div>
        </div>
      </div>
      <hr className="header-line" />
    </div>
  );
}
