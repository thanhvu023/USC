import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer" style={{marginTop: '50px'}}>
      <div className="container">
        <div className="footer-section">
          <img src="path_to_logo.png" alt=" Logo" className="footer-logo"/>
          <div className="footer-about">
            <Link to="/news">Tin tức</Link>
            <Link to="/events">Sự kiện</Link>
            <Link to="/careers">Tuyển dụng</Link>
            <Link to="/quality-assurance">Đảm bảo chất lượng đào tạo</Link>
          </div>
        </div>
        <div className="footer-section">
          <div className="footer-contact">
            <p>Email: <a href="mailto:info@web.edu.vn">info@web.edu.vn</a></p>
            <p>Đào tạo: <a href="tel:0909336376">0909336376</a></p>
          </div>
          {/* <div className="footer-quick-links">
            <Link to="/documents">Hệ thống Văn bản</Link>
            <Link to="/e-learning">Hệ thống E-Learning</Link>
            <Link to="/library">Thư viện</Link>
            <Link to="/hub">HUB</Link>
            <Link to="/e-job">E-job</Link>
          </div> */}
        </div>
        <div className="footer-section">
          <div className="footer-admissions">
            <p>Tuyển sinh: <a href="tel:0000000000">0000000000</a></p>
          </div>
          <div className="footer-support">
            <p>Hỗ trợ Sinh Viên (Call Center): <a href="tel:1111111111">1111111111</a></p>
          </div>
        </div>
        <div className="footer-section">
          <div className="footer-departments">
            <Link to="/health-sciences">Khoa học sức khỏe</Link>
            <Link to="/technology-engineering">Công nghệ - Kỹ thuật</Link>
            <Link to="/business-management">Kinh doanh - Quản lý</Link>
            <Link to="/design-arts">Thiết kế - Nghệ Thuật</Link>
            <Link to="/law-humanities-communication">Luật - Xã hội Nhân văn - Truyền thông</Link>
          </div>
        </div>
        <div className="footer-social-media">
          <a href="#" className="social-link">Facebook</a>
          <a href="#" className="social-link">Youtube</a>
          <a href="#" className="social-link">Instagram</a>
          <a href="#" className="social-link">Tiktok</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Study abroad course support. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
