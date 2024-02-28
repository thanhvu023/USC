import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="text-2xl font-bold mt-15">
          Đăng ký thông tin tài khoản
        </h1>
        <form>
          <div>
            <div className="grid grid-cols-2 gap-4 mt-5">
              <div className="text-left">
                <input
                  className="h-12 border border-gray-300 rounded-md px-3 placeholder-[#BCBCBC] bg-[#F2F2F2] "
                  type="text"
                  name="username"
                  placeholder="Họ và tên"
                />
              </div>
              <div className="text-left">
                <input
                  className="h-12 border border-gray-300 rounded-md px-3 placeholder-[#BCBCBC] bg-[#F2F2F2]  "
                  type="text"
                  name="phone"
                  placeholder="Số điện thoại"
                />
              </div>
              <div className="text-left">
                <input
                  className="h-12 border placeholder-[#BCBCBC] bg-[#F2F2F2] border-gray-300 rounded-md px-3"
                  type="password"
                  name="password"
                  placeholder="Mật khẩu"
                />
              </div>
              <div className="text-left">
                <input
                  className="h-12 border placeholder-[#BCBCBC] bg-[#F2F2F2] border-gray-300 rounded-md px-3"
                  type="text"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="text-left">
                <input
                  className="h-12 border placeholder-[#BCBCBC] bg-[#F2F2F2] border-gray-300 rounded-md px-3 w-full"
                  type="text"
                  name="address"
                  placeholder="Địa chỉ"
                />
              </div>
              <div>
                <input
                  className="w-full h-12 border placeholder-[#BCBCBC] bg-[#F2F2F2] border-gray-300 rounded-md px-3"
                  type="date"
                />
              </div>
              <div className="text-left">
                <select
                  className="h-12 border border-gray-300 rounded-md px-3 text-[#BCBCBC] placeholder-[#BCBCBC] bg-[#F2F2F2] w-full "
                  name="gender"
                >
                  <option value="">Chọn giới tính</option>
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                </select>
              </div>
            </div>
            <div className="">
              <div className="font-[700] my-10 text-[16px] bg-[#F2F2F2]">
                <input
                  type="checkbox"
                  className="mr-2"
                  // checked={isCheckboxChecked}
                  // onClick={handleCheckboxClick}
                />
                Tôi chấp nhận điều khoản quyền riêng tư và bảo mật
              </div>
              <div className="mt-4 mb-4 flex justify-center items-center">
                <button className="w-1/2 h-12 bg-green-500 text-white font-bold text-lg rounded-md">
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="my-10">
          <span className="">Bạn đã có tài khoản rồi?</span>
          <Link className="" to="/login">
            <span className="ml-3 text-[#fff] p-3 rounded bg-[#19AE54] hover:bg-gray-500">
              Đăng nhập
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
