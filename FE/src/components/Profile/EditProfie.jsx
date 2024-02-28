/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineEdit } from "react-icons/ai";

const userDTO = {
  userName: "Nam dep trai",
  email: "namhuynh2610@gmail.com",
  phone: "086924232",
  address: "Tan uyen",
  dob: "26/10/2002",
  sex: "male",
  avt: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy0OobsBilOGySRuaSpCmAMSiuupz02KRRgyDyM1308w&s",
};

function EditProfile() {
  // const userId = useSelector((state) => state.auth.userById.userId);
  // const userData = useSelector((state) => state.auth.userById);

  const [userName, setUserName] = useState(userDTO.userName);
  const [phone, setPhone] = useState(userDTO.phone);
  const [address, setAddress] = useState(userDTO.address);
  const [email, setEmail] = useState(userDTO.email);
  let [avatar, setImageSrc] = useState(userDTO.avatar);

  const [errors, setErrors] = useState({});
  const [updateMessage, setUpdateMessage] = useState("");
  // const dispatch = useDispatch();

  // const handleUpload = async (selectedFile) => {
  //   const imgRef = ref(imageDb, `files/${selectedFile.name}`);
  //   try {
  //     await uploadBytes(imgRef, selectedFile);
  //     const imageUrl = await getDownloadURL(imgRef);
  //     console.log(imageUrl);
  //     setImageSrc(imageUrl); // Set the state variable with the uploaded image URL.
  //     console.log(`Đã tải lên: ${selectedFile.name}`);
  //   } catch (error) {
  //     console.error(`Lỗi khi tải lên ${selectedFile.name}:`, error);
  //   }
  // };
  const validateForm = () => {
    const newErrors = {};
    if (userName.trim() === "") {
      newErrors.username = "Họ và tên không hợp lệ!";
    }

    if (phone.trim() === "" || !/^\d+$/.test(phone)) {
      newErrors.phone = "Số điện thoại không hợp lệ!";
    }

    if (email.trim() === "") {
      newErrors.email = "Email không được để trống!";
    }

    if (address.trim() === "") {
      newErrors.address = "Địa chỉ không được để trống!";
    }
    return newErrors;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // const updatedData = {
    //   userId,
    //   userData: {
    //     ...userData,
    //     userName,
    //     phone,
    //     address,
    //     email,
    //     avatar,
    //   },
    // };
    const newErrors = validateForm();

    //   if (Object.keys(newErrors).length === 0) {
    //     // No errors, submit form data
    //     dispatch(updateUserById(updatedData));
    //   } else {
    //     // Errors found, set them in state
    //     setErrors(newErrors);
    //     return;
    //   }

    //   setUserName(updatedData.userData.userName);
    //   setPhone(updatedData.userData.phone);
    //   setAddress(updatedData.userData.address);
    //   setEmail(updatedData.userData.email);
    //   setImageSrc(updatedData.userData.avatar);

    //   setUpdateMessage("Cập nhật hồ sơ thành công!");
  };
  return (
    <div className="flex p-10 flex-row justify-center">
      <div className="flex flex-col items-center bg-gray-200 rounded-2xl w-60 p-2 mr-10 ml-12">
        <img
          className="h-40 w-40 rounded-full object-cover"
          src={userDTO?.avt}
          alt=""
        />
        <div className="my-4">{/* upload avt */}</div>
        <div className="">
          <Link to="/profile">
            <h1 className="text-lg font-semibold hover:text-blue-500">
              Tài khoản của tôi
            </h1>
          </Link>
          <p className="link link-hover ">
            <Link
              to="/edit-profile"
              className="link-hover hover:text-[#63acf1] hover:opacity-90 "
            >
              Sửa hồ sơ
              {/* <AiOutlineEdit /> */}
            </Link>
          </p>
          <div className="my-2">
            <Link to="/change-password" className="hover:text-blue-500">
              Đổi mật khẩu
            </Link>
          </div>
          <div className="my-2">
            <p className="hover:text-blue-500">Thông Báo</p>
          </div>
          <div className="my-2">
            <p className="hover:text-blue-500">Tin nhắn</p>
          </div>
        </div>
      </div>
      <div className="bg-[#FFF] w-4/5 rounded-2xl text-left border">
        <div className="ml-10">
          <div className="mt-6 bg-[#FFF]">
            <h1 className="font-semibold mt-16 text-2xl  bg-[#FFF]">
              Hồ Sơ Của Tôi
            </h1>
            <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
          </div>
          <div className="grid grid-cols-2">
            <div className="text-[16px] mt-4">
              <span className="w-32 inline-block">Họ và tên: </span>
              <input
                type="text"
                className="border"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>
            <div className="text-[16px] mt-4">
              <span className="w-32 inline-block">Ngày sinh: </span>
              <input
                className="border"
                type="date"
                value={userDTO?.dob}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>
            <div className="text-[16px] mt-4">
              <span className="w-32 inline-block">Email: </span>
              <input
                className="border"
                value={email}
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="text-[16px] mt-4">
              <span className="w-32 inline-block">Quốc gia cư trú: </span>
            </div>
            <div className="text-[16px] mt-4">
              <span className="w-32 inline-block">Quốc tịch:</span>
            </div>
            <div className="text-[16px] mt-4">
              <span className="w-32 inline-block">Số điện thoại:</span>
              <input
                className="border"
                type="text"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
            <div className="text-[16px] mt-4">
              <span className="w-32 inline-block">Địa chỉ: </span>
              <input
                className="border"
                type="text"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
            <div className="text-[16px] mt-4">
              <span className="w-32 inline-block">Giới tính: </span>
              <input className="border" type="text" value={userDTO?.sex} />
            </div>
          </div>
        </div>
        <div className="flex items-center mt-5">
          <button className="h-12 p-2 bg-green-500 text-white font-bold text-lg rounded-md">
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
