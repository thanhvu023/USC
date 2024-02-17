import React, { useState } from 'react';
import Select from 'react-select';
import { colourOptions } from '../../data/data';
import './schoolView.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { geographicalLocationOptions,stateOptions,financialsOptions,rankingOptions,academicProgramOptions  } from '../../data/data';
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
  const [selectedGeographicalLocation, setSelectedGeographicalLocation] = useState(null);
  const [selectedState, setSelectedState] = useState([]);
  const [selectedRanking, setSelectedRanking] = useState([]);
  const [selectedFinancials, setSelectedFinancials] = useState([]);
  const [selectedAcademicProgram, setSelectedAcademicProgram] = useState([]);
const [main, setMain] = useState("Uni");

    // handle filer
const handleGeographicalLocationChange = selectedOption => {
  setSelectedGeographicalLocation(selectedOption);
};
const handleStateChange = selectedOptions => setSelectedState(selectedOptions);
const handleRankingChange = selectedOptions => setSelectedRanking(selectedOptions);
const handleFinancialsChange = selectedOptions => setSelectedFinancials(selectedOptions);
const handleAcademicProgramChange = selectedOptions => setSelectedAcademicProgram(selectedOptions);


  return (
    <div className="gcontainer">
      
      <div className="school-view-container">
        <h2>Collage Search</h2>
      <Select
        className="basic-multi-select"
        classNamePrefix="select"
        value={selectedGeographicalLocation}
        onChange={handleGeographicalLocationChange}
        options={geographicalLocationOptions}
        isMulti
        placeholder="Select geographical location(s)"
      />

      <Select
        className="basic-multi-select"
        classNamePrefix="select"
        value={selectedState}
        onChange={handleStateChange}
        options={stateOptions}
        isMulti
        placeholder="Select state(s)"
      />

      <Select
        className="basic-multi-select"
        classNamePrefix="select"
        value={selectedRanking}
        onChange={handleRankingChange}
        options={rankingOptions}
        isMulti
        placeholder="Select ranking(s)"
      />

      <Select
        className="basic-multi-select"
        classNamePrefix="select"
        value={selectedFinancials}
        onChange={handleFinancialsChange}
        options={financialsOptions}
        isMulti
        placeholder="Select financial(s)"
      />

      <Select
        className="basic-multi-select"
        classNamePrefix="select"
        value={selectedAcademicProgram}
        onChange={handleAcademicProgramChange}
        options={academicProgramOptions}
        isMulti
        placeholder="Select academic program(s)"
      />
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
