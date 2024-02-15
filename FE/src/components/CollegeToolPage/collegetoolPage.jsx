import React, { useState } from 'react';
import Select from 'react-select';
import { colourOptions } from '../../data/data';
import './schoolView.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Uni from './Uni';
import Major from './Major';
import Header from '../Header/Header';
import HeaderFilter from './HeaderFilter';


// const Checkbox = ({ children, ...props }) => (
//   <label style={{ marginRight: '1em' }}>
//     <input type="checkbox" {...props} />
//     {children}
//   </label>
// );



const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(`Searching for: ${searchQuery}`);
  
  }
  return (
    <form onSubmit={handleSearchSubmit}>
    <input 
      type="text" 
      placeholder="Search for Name, Scholarship,.."
      value={searchQuery}
      onChange={handleSearchInputChange} 
    />
    <button type="submit">Search</button>
  </form>
  );
}

const FilterSection = () => (
  <div className="filter-section">
    <Link to="/college-tool/university">University</Link>
    <Link to="/college-tool/major">Major</Link>
  </div>
);
const CollageToolPage = () => {
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  
const [main, setMain] = useState("Uni");
  return (
    <div className="gcontainer">
      
    <div className="school-view-container"

    >
        
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={colourOptions[0]}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name="color"
        options={colourOptions}

        
      />
      
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={colourOptions[0]}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name="color"
        options={colourOptions}
      />
        <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={colourOptions[0]}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name="color"
        options={colourOptions}
      />
        <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={colourOptions[0]}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name="color"
        options={colourOptions}
      />
        <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={colourOptions[0]}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name="color"
        options={colourOptions}
      />
      
      <div
        style={{
          color: 'hsl(0, 0%, 40%)',
          display: 'inline-block',
          fontSize: 12,
          fontStyle: 'italic',
          marginTop: '1em',
       
        
        }}
      >
     

  
      </div>
      </div>
      <div className='school-content'>
      <SearchBar/>
<HeaderFilter
setMain = {setMain}
        />

       { main && main === "Uni"? <Uni/> : <Major/>  }
      </div>
    </div>
  );
}
export default CollageToolPage;
