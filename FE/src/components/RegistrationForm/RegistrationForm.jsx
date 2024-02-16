import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './regisCss.scss'
const RegistrationForm = () => {
    const { register, handleSubmit } = useForm();
    const [submitted, setSubmitted] = useState(false);
  
    const onSubmit = (data) => {
      console.log('Form submitted:', data);
      setSubmitted(true);
    };
  
    return (
      <div className="registration-form-container">
        <h2>Đăng ký du học</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="fullName">Họ tên</label>
            <input
              type="text"
              id="fullName"
              {...register('fullName')}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateOfBirth">Ngày sinh</label>
            <input
              type="text"
              id="dateOfBirth"
              {...register('dateOfBirth')}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Giới tính</label>
            <div className="radio-group">
              <input
                type="radio"
                id="male"
                value="Nam"
                {...register('gender')}
                className="form-control"
              />
              <label htmlFor="male">Nam</label>
              <input
                type="radio"
                id="female"
                value="Nữ"
                {...register('gender')}
                className="form-control"
              />
              <label htmlFor="female">Nữ</label>
              <input
                type="radio"
                id="other"
                value="Khác"
                {...register('gender')}
                className="form-control"
              />
              <label htmlFor="other">Khác</label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Điện thoại</label>
            <input
              type="text"
              id="phoneNumber"
              {...register('phoneNumber')}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              {...register('email')}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Lý do bạn muốn du học</label>
            <textarea
              id="reasonForStudyingAbroad"
              {...register('reasonForStudyingAbroad')}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn-submit">Đăng ký</button>
        </form>
        {submitted && <p className="success-message">Đăng ký thành công!</p>}
      </div>
    );
  };
  
  export default RegistrationForm;