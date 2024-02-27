import React, { useState } from 'react';
import './regisCss.scss'
const RegistrationForm = () => {
  return (
    <div className="flex flex-col items-stretch pb-12 bg-white">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1480facb74018e5f1f2711496ca1ddb958d25b22ced4e9eb740138f7e49468c0?apiKey=cb385fe764144f1da1450678a6b41140"
        alt="Registration Banner"
        className="registration-banner"
      />
      <div className="registration-heading">
        Đăng ký tư vấn
      </div>
      <div className="registration-form">
        <div className="personal-info">
          <input
            type="text"
            placeholder="Họ và Tên"
            className="input-field"
          />
          <div className="flex gap-5  items-stretch mt-10">
          <label>Giới tính</label>
            <input type="radio" name="gender" value="Nam" onChange={e => setGender(e.target.value)} /> Nam
            <input type="radio" name="gender" value="Nữ" onChange={e => setGender(e.target.value)} /> Nữ
            <input type="radio" name="gender" value="Khác" onChange={e => setGender(e.target.value)} /> Khác
            <input
              type="text"
              placeholder="Ngày sinh"
              className="input-field"
            />
          </div>
          <input
            type="text"
            placeholder="Địa chỉ"
            className="input-field"
          />
          <div className="flex gap-5 justify-between items-stretch mt-10">
            <input
              type="text"
              placeholder="Phường"
              className="input-field"
            />
            <input
              type="text"
              placeholder="Quận"
              className="input-field"
            />
          </div>
          <input
            type="text"
            placeholder="Số Điện Thoại"
            className="input-field"
          />
          <input
            type="text"
            placeholder="Email"
            className="input-field"
          />
          <button className="submit-button">
            Tiếp tục
          </button>
        </div>
        <div className="registration-illustration">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d1f9a2f-b3f5-48a6-b84b-bdb98cc99abf?apiKey=cb385fe764144f1da1450678a6b41140"
            alt="Registration Illustration"
            className="illustration"
          />
        </div>
      </div>
    </div>
  );
  };
  
  export default RegistrationForm;