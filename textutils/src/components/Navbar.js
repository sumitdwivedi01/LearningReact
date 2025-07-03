//just type rfc+enter to get the structure of this
import React from "react";
import PropTypes from 'prop-types'


export default function Navbar({ title="Set Title Here", aboutText="Enter the about here!" ,mode='light', toggleMode} ) {//Destructing Method
  return (
    <nav className={`navbar navbar-expand-lg bg-${mode} navbar-${mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {title}
        </a>
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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {aboutText}
              </a>
            </li>
          </ul>
         <div className="form-check form-switch">
        <input className="form-check-input" onClick={toggleMode} type="checkbox" value="" id="checkNativeSwitch" switch/>
        <label className={`form-check-label text-${mode === 'light' ? 'dark' : 'light'}`} htmlFor="checkNativeSwitch" > Dark Mode</label>
        </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes ={
title: PropTypes.string.isRequired,
aboutText: PropTypes.string.isRequired,
mode:PropTypes.string.isRequired
}

//this method of setting defaultProps doesn't supports now so just leave it
// Navbar.defaultProps = {
//   title:`Enter the Title here!`,
//   aboutText:'Enter About here!'
// };
