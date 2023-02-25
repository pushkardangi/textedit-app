import React from "react";
import PropTypes from "prop-types"; // impt

// import {Link} from "react-router-dom";

// props are send as function argument and
// used as {props.propName}
export default function Navbar(props) {
  
  let modeNavbar;
  let modeBgColor;

  let manualBgColor;

  if (props.mode === "light") {
    modeNavbar = "light";
    modeBgColor = "bg-light";
  }
  else if (props.mode === "dark") {
    modeNavbar = "dark";
    modeBgColor = "bg-dark";
  }
  else if (props.mode === "pink") {
    modeNavbar = "light";
    modeBgColor = "";

    manualBgColor = "pink";
  }
  else if (props.mode === "navy") {
    modeNavbar = "dark";
    modeBgColor = "";

    manualBgColor = "#192a52";
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${modeNavbar} ${modeBgColor}`}
      style={{ backgroundColor: manualBgColor }}>

      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
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
                {props.aboutText}
              </a>
            </li>

          </ul>

          {/* Mode Palette */}
          <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button
              type="button"
              className={`btn btn-outline-${modeNavbar === "light" ? "dark" : "light"}`}
              onClick={() => {props.toggleMode("light");}}>
              Light
            </button>

            <button
              type="button"
              className={`btn btn-outline-${modeNavbar === "light" ? "dark" : "light"}`}
              onClick={() => {props.toggleMode("dark");}}>
              Dark
            </button>

            <button
              type="button"
              className={`btn btn-outline-${modeNavbar === "light" ? "dark" : "light"}`}
              onClick={() => {props.toggleMode("pink");}}>
              Pink
            </button>

            <button
              type="button"
              className={`btn btn-outline-${modeNavbar === "light" ? "dark" : "light"}`}
              onClick={() => {props.toggleMode("navy");}}>
              Navy
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}

// to put a check on the dataTypes of the props we got
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

// default props will be shown, if props are not send
Navbar.defaultProps = {
  title: "Title",
  aboutText: "About",
};
