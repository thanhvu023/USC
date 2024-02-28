import React from 'react';
import { Formik, Form, Field } from 'formik';
import './regisCss.scss';

const RegistrationForm = () => {
  // Hàm xử lý khi form được submit
  const handleSubmit = (values) => {
    console.log(values);
    // Gửi thông tin đến server hoặc xử lý tiếp các bước khác
  };

  return (
    <div className="registration-form-container">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1480facb74018e5f1f2711496ca1ddb958d25b22ced4e9eb740138f7e49468c0"
        alt="Registration Banner"
        className="registration-banner"
      />
      <div className="registration-heading">
        Đăng ký tư vấn
      </div>
      <Formik
        initialValues={{
          fullName: '',
          gender: '',
          dob: '',
          address: '',
          phone: '',
          email: '',
          area: '',
          moreInformation: '',
          studyAbroadReason: '',
          destinationReason: '',
          programChoose: '',
          majorChoose: '',
          majorChooseReason: '',
          universityChooseReason: '',
          priorityOfStudyAbroad: '',
          budget: '',
        }}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="registration-form">
            <div className="personal-info">
              <Field type="text" name="fullName" placeholder="Họ và Tên" className="input-field" />
              <Field as="select" name="gender" className="input-field">
                <option value="">Giới tính</option>
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
                <option value="other">Khác</option>
              </Field>
              <Field type="text" name="dob" placeholder="Ngày sinh (dd/mm/yyyy)" className="input-field" />
              <Field type="text" name="address" placeholder="Địa chỉ" className="input-field" />
              <Field type="text" name="phone" placeholder="Số điện thoại" className="input-field" />
              <Field type="email" name="email" placeholder="Email" className="input-field" />
              <Field type="text" name="area" placeholder="Khu vực" className="input-field" />
              <Field component="textarea" name="moreInformation" placeholder="Thông tin thêm" className="input-field" />
              <Field component="textarea" name="studyAbroadReason" placeholder="Lý do đi du học" className="input-field" />
              <Field component="textarea" name="destinationReason" placeholder="Lý do chọn đích đến" className="input-field" />
              <Field as="select" name="majorchoose" className="input-field">
              <option value="">Chọn chuyên ngành</option>
               <option value="business">Kinh doanh</option>
               <option value="engineering">Kỹ thuật</option>
                <option value="art">Nghệ thuật</option>
              </Field>
             
              <Field component="textarea" name="majorChooseReason" placeholder="Lý do chọn chuyên ngành" className="input-field" />
              <Field as="select" name="majorChoose" className="input-field">
              <option value="">Chọn chương trình</option>
              <option value="business">Kinh doanh</option>
              <option value="engineering">Kỹ thuật</option>
              <option value="art">Nghệ thuật</option>
              </Field>
              <Field component="textarea" name="universityChooseReason" placeholder="Lý do chọn trường đại học" className="input-field" />
              <Field as="select" name="universityChoose" className="input-field">
             < option value="">Chọn ưu tiên khi đi du học</option>
              <option value="quality">Chất lượng giáo dục</option>
              <option value="career">Cơ hội nghề nghiệp</option>
              <option value="culture">Trải nghiệm văn hóa</option>
              </Field>
              <Field as="select" name="budget" className="input-field">
                <option value="">Ngân sách</option>
                <option value="">Chọn ngân sách</option>
                <option value="economy">Tiết kiệm</option>
                <option value="moderate">Vừa phải</option>
                <option value="luxury">Cao cấp</option>
              </Field>
              <button type="submit" className="submit-button">
                Tiếp tục
              </button>
            </div>
            <div className="registration-illustration">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d1f9a2f-b3f5-48a6-b84b-bdb98cc99abf"
                alt="Registration Illustration"
                className="illustration"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
