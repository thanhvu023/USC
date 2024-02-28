import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import KT from '../../../assets/major/luatsu.jpg'
import './UniDetail.scss'
const UniDetail = () => {
  const { universityId } = useParams();
  console.log(universityId);
  const [university, setUniversity] = useState();

  useEffect(() => {
    const fetchUniversityDetails = async () => {
      try {
        const response = await axios.get(`https://us-study-capstone-project.azurewebsites.net/universities??universityId=${universityId}`);
       const uniDetail = response.data.find(uni => uni.universityId.toString() === universityId);
        setUniversity(uniDetail);
        console.log(uniDetail);
      } catch (error) {
        console.error('Error fetching university details:', error);
      }
    };

    fetchUniversityDetails();
  }, [universityId]);

  if (!university) {
    return <div>Loading...</div>;
  }

  return (
    <>
     <div className="UniDetail">
      <div className="UniDetail-overlay">
        <h1 className="UniDetail-text">{university.universityName}</h1>
      </div>
      <img src='https://fpt.edu.vn/Resources/brand/uploads/Banner2.jpg' alt='University Background' className="UniDetail-img"/>

   
    </div>
    <div className="Section">
  <div className="Section-content">
    <h1>Giới thiệu chung</h1>
    <p>{university.description} </p>
  </div>
  <div className="Section-gallery">
  <img src={KT}/>
  </div>
</div>
<div className="Features">
  <div className="Features-header">
    <h2>Đặc điểm nổi bật của chương trình đào tạo</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
  </div>
  <div className="Features-container">
    <div className="Feature-item">
      <h3> Lorem Ipsum</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div className="Feature-item">
      <h3> Lorem Ipsum</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div className="Feature-item">
      <h3> Lorem Ipsum</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</div>
<div className="massimo-vignelli">
  <div className="text-content">
    <h1>Massimo Vignelli</h1>
    <blockquote>
      “Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    </blockquote>
    <button className="register-button">Đăng ký ngay</button>
  </div>
  <div className="image-content">
    <img src={KT} alt="Students Working" />
  </div>
</div>
    </>
   
  )
};

export default UniDetail;
