import React from 'react'
import { schoolsData } from '../../data/data';
const SchoolBox = ({ schoolName, publicLocation, mainMajor, unitType, ranking, establishDate, avatarURL }) => {
    return (
      <div className="school-box" style={{ border: '1px solid #ccc', padding: '20px', margin: '10px', width: '500px' }}>
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
    return (
      <div className='school-grid'>
        {schoolsData.map((school, index) => (
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
    );
  };
  
  export default Uni;
