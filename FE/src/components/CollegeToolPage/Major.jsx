import React, { useState } from 'react';
import { schoolsData } from '../../data/data';

const MajorBox = ({ schoolName, mainMajor, duration, tuitionFee, eligibility, publicLocation, avatarURL, majorCode }) => {
  return (
    <div className="major-box" style={{ border: '1px solid #ccc', padding: '20px', margin: '10px', width: '800px', backgroundColor: '#e0e7ff', borderRadius: '10px' }}>
      <div className="school-details">
        <h3 style={{ margin: '0', fontSize: '1rem', fontWeight: 'bold', backgroundColor: "#4d79ff", marginBottom: '10px', borderRadius: '10px', color: 'white', justifyContent: 'center', display: 'flex' }}>{majorCode}-{mainMajor}</h3>

        <div className="school-image" style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
          <img src={avatarURL} alt={schoolName} style={{ borderRadius: '50%', width: '100px', height: '100px', marginRight: '20px' }} />
          <div>
            <h3 style={{ margin: '0', fontSize: '1.2rem', fontWeight: 'bold' }}>{schoolName}</h3>
            <p style={{ margin: '5px 0', fontSize: '1rem', color: '#555' }}>{publicLocation}</p>
          </div>
        </div>
        <div className="major-details" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '5px 0', fontSize: '1rem', color: '#555' }}>Tuition Fee:</p>
            <p style={{ margin: '5px 0', fontSize: '1rem', fontWeight: 'bold' }}>{tuitionFee}</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '5px 0', fontSize: '1rem', color: '#555' }}>Duration:</p>
            <p style={{ margin: '5px 0', fontSize: '1rem', fontWeight: 'bold' }}>{duration}</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '5px 0', fontSize: '1rem', color: '#555' }}>Eligibility:</p>
            <p style={{ margin: '5px 0', fontSize: '1rem', fontWeight: 'bold' }}>{eligibility}</p>
          </div>
        </div>
        <button style={{ backgroundColor: '#4d79ff', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', marginTop: '20px', cursor: 'pointer', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>Apply Now</button>
      </div>
    </div>
  );
};

export default function Major() {
  const itemsPerPage = 4;
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
      <div className="major-grid" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {currentItems.map((school, index) => (
          <MajorBox
            key={index}
            schoolName={school.schoolName}
            mainMajor={school.mainMajor}
            duration={school.duration}
            tuitionFee={school.tuitionFee}
            eligibility={school.eligibility}
            publicLocation={school.publicLocation}
            avatarURL={school.avatarURL}
            majorCode={school.majorCode}
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
}
