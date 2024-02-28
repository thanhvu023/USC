/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const userDTO = {
  userName: "Nam dep trai",
  email: "namhuynh2610@gmail.com",
  phone: "086924232",
  address: "Tan uyen",
  dob: "26/10/2002",
  sex: "male",
  avt: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy0OobsBilOGySRuaSpCmAMSiuupz02KRRgyDyM1308w&s",
};

function Profile() {
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
          <p className="link link-hover">
            <Link
              to="/edit-profile"
              className="link-hover hover:text-[#63acf1] hover:opacity-90"
            >
              Sửa hồ sơ
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
            <div className=" text-[16px] mt-4">
              <span className="text-left w-32 inline-block ">Họ và tên: </span>
              <p className="inline-block">{userDTO?.userName}</p>
            </div>
            <div className=" text-[16px] mt-4">
              <span className="w-32 inline-block">Ngày sinh: </span>
              <p className="inline-block">{userDTO?.dob}</p>
            </div>
            <div className=" text-[16px] mt-4">
              <span className="w-32 inline-block">Email: </span>
              <p className="inline-block">{userDTO?.email}</p>
            </div>
            <div className=" text-[16px] mt-4">
              <span className="w-32 inline-block">Quốc gia cư trú: </span>
              <p className="inline-block"></p>
            </div>
            <div className=" text-[16px] mt-4">
              <span className="w-32 inline-block">Quốc tịch:</span>
              <p className="inline-block">{}</p>
            </div>
            <div className=" text-[16px] mt-4">
              <span className="w-32 inline-block">Số điện thoại:</span>
              <p className="inline-block">{userDTO?.phone}</p>
            </div>
            <div className=" text-[16px] mt-4">
              <span className="w-32 inline-block">Địa chỉ:</span>
              <p className="inline-block">{userDTO?.address}</p>
            </div>
            <div className=" text-[16px] mt-4">
              <span className="w-32 inline-block">Giới tính: </span>
              <p className="inline-block">{userDTO?.sex}</p>
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

export default Profile;
