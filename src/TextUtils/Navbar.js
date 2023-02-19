//Props Practice

import React from "react"; //rfc shortcut
import PropTypes from "prop-types"; //impt
import { Link } from "react-router-dom";
// import './Navbar.css';

export default function Navbar(props) {
  return (
    
    
    <>
      {/* <nav className='nav'>
            <ul className='ul'>
                <a href="/"><li className='head'>{props.title}</li></a>
                <a href="/"><li className='head'>{props.about}</li></a>
                <a href="/"><li className='head'>{props.contact}</li></a>
            </ul>
            <div className="log">
                <button className='login'>Login</button>
                <button className='sign'>Sign up</button>
            </div>
        </nav> */}
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
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
                <Link className="nav-link active" aria-current="page" to="/">
                  {props.home}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.about}
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            
            <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                onClick={props.toggleMode}
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Enable Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set Title",
  home: "Set Home",
  about: "Set About",
  contact: "Set Contact",
};
