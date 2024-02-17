import React, { useState } from 'react';
import { schoolsData } from '../../data/data';
const SchoolBox = ({ schoolName, publicLocation, mainMajor, unitType, ranking, establishDate, avatarURL }) => {
    return (
      <div className="school-box" style={{ border: '1px solid #ccc', padding: '20px', margin: '10px',}}>
     <div className="school-image" style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
  <img src={avatarURL} alt={schoolName} style={{ borderRadius: '50%', width: '100px', height: '100px', marginRight: '20px' }} />
  <div>
    <h3>{schoolName}</h3>
    <p>{publicLocation}</p>
    <p>Main Major: {mainMajor}</p>
  </div>
</div>

        <div className="school-details">
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop:'10px' }}>
            <p>University Type:<br />{unitType}</p>
            <p>Ranking:<br />{ranking}</p>
            <p>Establish:<br />{establishDate}</p>
          </div>
          <button style={{ backgroundColor:'#00a82d', color:'#fff', padding:'10px 20px', border:'none'}}>Xem thêm</button>
        </div>
      </div>
    );
  };
  
  const Uni = () => {
    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = schoolsData.slice(indexOfFirstItem, indexOfLastItem);
  
    const totalPages = Math.ceil(schoolsData.length / itemsPerPage);
  
    const handleNextPage = () => {
      setCurrentPage(prevPage => prevPage + 1);
    };
  
    const handlePrevPage = () => {
      setCurrentPage(prevPage => prevPage - 1);
    };
    return (
      <div>
        <div className='school-grid'>
          {currentItems.map((school, index) => (
            <SchoolBox
              key={index}
              schoolName={school.schoolName}
              publicLocation={school.publicLocation}
              mainMajor={school.mainMajor}
              unitType={school.unitType}
              ranking={school.ranking}
              establishDate={school.establishDate}
              avatarURL={school.avatarURL}
            />
          ))}
        </div>
  
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
          <span style={{ margin: '0 10px' }}>Page {currentPage} of {totalPages}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
      </div>
    );
  };
  
  export default Uni;
