import React from "react";
import PropTypes from "prop-types"; // impt

// props are send as function argument and
// used as {props.propName}
export default function Navbar(props) {

  return (

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
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

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Features
              </a>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/">
                    Action 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Action 2
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Link 1
                  </a>
                </li>
              </ul>

            </li>

          </ul>

          <form className="d-flex">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode} />

              <label
                className={`form-check-label text-${props.mode === "light" ? "dark" : "light"}`}
                htmlFor="flexSwitchCheckDefault">
                Enable dark mode
              </label>
            </div>
          </form>

        </div>
      </div>
    </nav>
  );
}

// to put a check on the dataTypes of the props we got
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
};

// default props will be shown, if props are not send
Navbar.defaultProps = {
  title: "Title",
  aboutText: "About"
};
