import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SchoolBox = ({ universityName, universityTypeId,universityId }) => {
    return (
        <div className="school-box" style={{ border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
            <div className="school-image" style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                <div>
                    <h3>{universityName}</h3>
                </div>
            </div>
            <div className="school-details">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                    <p>University Type:<br />{universityTypeId}</p>
                </div>
                <Link to={`/universities/${universityId}`}>
                <button style={{ backgroundColor: '#00a82d', color: '#fff', padding: '10px 20px', border: 'none' }}>Xem thêm</button>
                </Link>
            </div>
        </div>
    );
};

const Uni = () => {
    const [schools, setSchools] = useState([]);
    useEffect(() => {
        //  API 
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://us-study-capstone-project.azurewebsites.net/universities?universityId`);
                setSchools(response.data); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // const currentItems = schools.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(schools.length / itemsPerPage);

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    return (
        <div>
            <div className='school-grid'>
   {Array.isArray(schools) && schools.slice(indexOfFirstItem, indexOfLastItem).map((school, index) => (
                    <SchoolBox
                    key={index.id}
                    universityName={school.universityName}
                        universityTypeId={school.universityTypeId}
                        universityId={school.universityId}

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
