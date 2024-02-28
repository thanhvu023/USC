import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center relative ">
      {/* <div className="absolute inset-0 bg-gray-500 opacity-50"></div> */}

      <div className="w-[900px] h-[85%] ">
        <div className="flex justify-end mt-5 mr-5">
          <Link to="/" className="text-right">
            {/* <CloseOutlined /> */}
          </Link>
        </div>
        <form className="flex flex-col items-center">
          <div className="text-left">
            <div>
              <input
                className="h-12 border border-gray-300 rounded-md px-3 placeholder-[#BCBCBC] bg-[#F2F2F2] "
                placeholder="Email"
              />
            </div>
            <div className="mt-3">
              <input
                className="h-12 border border-gray-300 rounded-md px-3 placeholder-[#BCBCBC] bg-[#F2F2F2] "
                placeholder="Password"
                type="password"
              />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="w-full h-12 p-2 bg-green-500 text-white font-bold text-lg rounded-md"
            >
              Đăng nhập
            </button>
          </div>
        </form>
        <div className="flex items-center justify-between">
          <div>
            <div>
              <Link className="mr-5" to="/register">
                Đăng ký ngay
              </Link>
              <Link className="ml-5" to="/forgot-password">
                Quên mật khẩu?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
