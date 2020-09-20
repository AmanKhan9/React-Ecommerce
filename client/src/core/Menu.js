import React from "react";
import { Link, withRouter } from "react-router-dom";
import styles from "./Menu.module.css";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "skyblue", border: "none" };
  } else {
    return { color: "#ffffff", border: "none" };
  }
};

const Menu = ({ history }) => (
  <div>
    <ul className={`nav nav-tabs ${styles.mainNavUL}`}>
      <li className='nav-item'>
        <Link className='nav-link' style={isActive(history, "/")} to='/'>
          Home
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          className='nav-link'
          style={isActive(history, "/signin")}
          to='/signin'
        >
          Signin
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          className='nav-link'
          style={isActive(history, "/signup")}
          to='/signup'
        >
          Signup
        </Link>
      </li>
    </ul>
  </div>
);

export default withRouter(Menu);
