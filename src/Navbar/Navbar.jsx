import React from "react";
import { CiCircleList } from "react-icons/ci";
import "./navbar.css";
// import Logo from "../imges/Logo";
import Logo from "../../imges/Logo.png"
const NavBar = () => {
  <script
    src="https://kit.fontawesome.com/a076d05399.js"
    crossorigin="anonymous"
  ></script>;
  return (
    <nav>
      <input type="checkbox" id="check" />
      <label for="check" className="checkbtn">
        <CiCircleList />
      </label>
      <label className="navbar-container">
        {" "}
        <img src={Logo} alt="Logo" className="logo" />{" "}
      </label>
      <ul>
        <li>
          {" "}
          <a href="#" className="active">
            Home
          </a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">About</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Services</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Contact</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Feedback</a>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
