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
    <p>Ngành Thiết kế đồ họa trường Đại học Văn Lang cung cấp với 2 chương trình đào tạo tiêu chuẩn và đặc biệt. Cả 2 chương trình đều được xây dựng cấu trúc và trình tự hợp lý để trang bị cho người học đủ kiến thức, kỹ năng, kỷ luật với ngành. </p>
  </div>
  <div className="Section-gallery">
  <img src={KT}/>
  </div>
</div>
<div className="Features">
  <div className="Features-header">
    <h2>Đặc điểm nổi bật của chương trình đào tạo</h2>
    <p>Thiết kế Đồ họa là một trong những ngành lau đời và thế mạnh của trường Đại học Văn Lang. Xuyên suốt nhiều năm qua, chúng tôi đã tạo nên cả tính cho riêng mình thông qua:</p>
  </div>
  <div className="Features-container">
    <div className="Feature-item">
      <h3>Phát triển tư duy thẩm mỹ</h3>
      <p>Sinh viên sẽ được phát triển tư duy thẩm mỹ và khả năng sáng tạo khi được học trong môi trường hiện đại, đáp ứng đủ cơ sở vật chất cho việc thiết kế.</p>
    </div>
    <div className="Feature-item">
      <h3>Thực hành triển lãm</h3>
      <p>Ở Văn Lang, sinh viên được phát triển ý tưởng thành sản phẩm thật và được triển lãm nhiều đợt trong năm. Doanh nghiệp thường đến trường Đại học Văn Lang tham dự triển lãm đồ án sinh viên để tiếp cận ...Xem thêm</p>
    </div>
    <div className="Feature-item">
      <h3>Nhiều chương trình đào tạo chuyên sâu</h3>
      <p>Đặc biệt, trường Đại học Văn Lang tiên phong triển khai chuyên sâu chuyên đề Nghiên cứu với cơ đản từ trong đào tạo mỹ thuật ứng dụng qua các đồ án tranh khắc gỗ, in độc bản, in lụa, điêu khắc tấm hiểu ...Xem thêm</p>
    </div>
  </div>
</div>
<div className="massimo-vignelli">
  <div className="text-content">
    <h1>Massimo Vignelli</h1>
    <blockquote>
      “Thiết kế là duy nhất – vì không có nhiều loại thiết kế. Những nguyên tắc thiết kế có thể dùng cho nhiều dự án khác nhau còn phong cách thì không quan trọng. Thiết kế còn đáng kể hơn bất kỳ phong cách nào."
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
