import React, { useState } from "react";
import { useRef } from "react";
import "./header.scss";
import { Link, NavLink } from "react-router-dom";
import { Row, Col, Dropdown, Space, Menu } from "antd";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(false);

  const homeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const collageToolRef = useRef(null);
  const items = [
    {
      key: "1",
      label: "Profile",
      path: "/profile",
    },
    {
      key: "2",
      label: "Dang ky",
      path: "/register",
    },
    {
      key: "3",
      label: "Dang nhap",
      path: "/login",
    },
  ];
  const toggleDropdown = () => {
    setActiveDropdown(!activeDropdown);
  };
  // Function to scroll to a ref
  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  const menu = (
    <Menu>
      {items.map((item) => (
        <Menu.Item key={item.key}>
          <Link to={item.path} >
            {item.label}
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="header-container">
      <div className="container">
        <div className="b1">
          <Link to="/home" className="logo" />
        </div>
        <div className="b2">
          <div ref={homeRef}>
          <button className="header-button"
      
         >
         <Link to="/university-detail" >Detail</Link>
         </button>
          </div>

          <button className="header-button">
            <Link to="/about-us">AboutUs</Link>
          </button>
          <button className="header-button">
            <Link to="/communication">Communication</Link>
          </button>
          <button className="header-button">
            <Link to="/regis">Registration</Link>
          </button>

          <div className="ml-2">
            <Space wrap>
              <Dropdown
                overlay={menu}
                placement="bottomLeft"
                trigger={["click"]}
              >
                <button
                  className="ant-dropdown-link"
                >
                  <img
                    src="https://images.unsplash.com/photo-1610397095767-84a5b4736cbd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    alt="avatar"
                    className="w-12 h-12 rounded-full"
                    onClick={toggleDropdown}
                  />
                </button>
              </Dropdown>
            </Space>
          </div>
        </div>
      </div>
    </div>
  );
}
