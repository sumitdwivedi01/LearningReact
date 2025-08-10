//just type rfc+enter to get the structure of this
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar({
  title = "Set Title Here",
  aboutText = "Enter the about here!",
  mode = "light",
  switchMode,
}) {
  //Destructing Method
  // const successMode =()=>{
  //   switchMode('success');
  // }
  return (
    <nav className={`navbar navbar-expand-lg bg-${mode==='warning'?'dark':mode} navbar-${mode==='warning'?'dark':mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {aboutText}
              </Link>
            </li>
          </ul>
          {/* <div className="form-check form-switch mx-1">
            <input className="form-check-input" onClick={(e) => switchMode(e.target.checked ? 'success' : 'light')} type="checkbox" value="" />
            <label className={`form-check-label text-${mode===`dark`? 'light': `dark`}`} htmlFor="checkNativeSwitch">Sucess Mode</label>
        </div>
         <div className="form-check form-switch mx-1">
            <input className="form-check-input" onClick={(e) => switchMode(e.target.checked ? 'warning' : 'light')} type="checkbox" value=""/>
            <label className={`form-check-label text-${mode===`dark`? 'light': `dark`}`} htmlFor="checkNativeSwitch" >warning Mode</label>
        </div>
         <div className="form-check form-switch mx-1">
            <input className="form-check-input" onClick={(e) => switchMode(e.target.checked ? 'danger' : 'light')} type="checkbox" value=""/>
            <label className={`form-check-label text-${mode===`dark`? 'light': `dark`}`} htmlFor="checkNativeSwitch" >Danger Mode</label>
        </div>
         <div className="form-check form-switch mx-1">
            <input className="form-check-input" onClick={(e) => switchMode(e.target.checked ? 'dark' : 'light')} type="checkbox" value=""/>
            <label className={`form-check-label text-${mode===`dark`? 'light': `dark`}`} htmlFor="checkNativeSwitch" > Dark Mode</label>
        </div> */}

          <div className="form-check form-switch mx-1">
            <input
              className="form-check-input"
              type="checkbox"
              checked={mode === "success"}
              onChange={() => switchMode("success")}
            />
            <label
              className={`form-check-label text-${
                mode === "dark" || mode==="warning" ? "light" : "dark"
              }`}
            >
              Green Mode
            </label>
          </div>

          <div className="form-check form-switch mx-1">
            <input
              className="form-check-input"
              type="checkbox"
              checked={mode === "warning"}
              onChange={() => switchMode("warning")}
            />
            <label
              className={`form-check-label text-${
                mode === "dark" || mode==="warning" ? "light" : "dark"
              }`}
            >
              Yellow Mode
            </label>
          </div>

          <div className="form-check form-switch mx-1">
            <input
              className="form-check-input"
              type="checkbox"
              checked={mode === "danger"}
              onChange={() => switchMode("danger")}
            />
            <label
              className={`form-check-label text-${
                mode === "dark" || mode==="warning" ? "light" : "dark"
              }`}
            >
              Red Mode
            </label>
          </div>

          <div className="form-check form-switch mx-1">
            <input
              className="form-check-input"
              type="checkbox"
              checked={mode === "dark"}
              onChange={() => switchMode("dark")}
            />
            <label
              className={`form-check-label text-${
                mode === "dark" || mode==="warning" ? "light" : "dark"
              }`}
            >
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
};

//this method of setting defaultProps doesn't supports now so just leave it
// Navbar.defaultProps = {
//   title:`Enter the Title here!`,
//   aboutText:'Enter About here!'
// };
