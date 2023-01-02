import React from 'react'
import "./Navbar.css";
import PropTypes from 'prop-types' // impt

// props are send as function argument and
// used as {props.propName}
export default function Navbar(props) {
  return (
    <nav>
    <div className="navbar">
      <div className="nav">
        <ul className="nav-part-one">
          <li className="nav-item app-name"><a href="/">{props.title}</a></li>
          <li className="nav-item nav-link"><a href="/">Home</a></li>
          <li className="nav-item nav-link"><a href="/">{props.aboutText}</a></li>
          <li className="nav-item nav-link"><a href="/">Contact</a></li>
        </ul>
      </div>

      <div className="nav-part-two">
        <div><input className="inputs" type="text" name="search" id="input1" /></div>
        <div><input className="inputs" type="button" value="Search" id="input2" /></div>
      </div>

    </div>
  </nav>
  )
}

// to put a check on the dataTypes of the props we got
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

// default props will be shown, if props are not send
Navbar.defaultProps = {
    title: "Set title here",
    aboutText: "About"
}
