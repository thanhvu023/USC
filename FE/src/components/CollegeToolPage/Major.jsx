import React, { useState } from 'react';
import { schoolsData } from '../../data/data';
import { FaDollarSign, FaClock, FaUserCheck } from 'react-icons/fa'; // Import các icon từ thư viện React Icons
import './schoolView.scss';

const MajorBox = ({
  schoolName,
  mainMajor,
  duration,
  tuitionFee,
  eligibility,
  publicLocation,
  avatarURL,
  majorCode,
}) => {
  return (
    <div className="major-box">
      <div className="school-details">
        <div className="school-image">
          <img src={avatarURL} alt={schoolName} />
          <div>
            <h3>{schoolName}</h3>
            <p>{publicLocation}</p>
          </div>
        </div>
        <div className="major-details">
        <div className="sub-details-row">
          <div className='sub-details'>
            <p><FaDollarSign /> Tuition Fee: {tuitionFee}</p>
          </div>
          <div className='sub-details'>
            <p><FaClock /> Duration: {duration}</p>
            
          </div>
          </div>
          <div className="sub-details-row">
          <div className='sub-details'>
            <p><FaUserCheck /> Eligibility: {eligibility}</p>
     
          </div>
          <div className='sub-details'>
            <p><FaClock /> Duration: {duration}</p>
          
          </div>
          </div>
        </div>
        <div className="more-info">
          <h3>{majorCode}-{mainMajor}</h3>
          <button>See more</button>
        </div>
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
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div>
      <div className="major-grid">
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

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
}
