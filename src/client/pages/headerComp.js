import React from "React";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          {" "}
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/contactus">ContactPage</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
