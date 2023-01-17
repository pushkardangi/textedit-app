import React, { useState } from "react";
import PropTypes from "prop-types";

import './style.css';

export default function TextForm(props) {

  const [text, setText] = useState("");
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLowercase = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert('success','converted to lowercase.')
  };
  
  const handleUppercase = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert('success','converted to uppercase.')
  };
  
  const handleClear = () => {
    setText("");
    props.showAlert('warning','text cleared.')
  };
  
  const handleCopy = () => {
    let text = document.getElementById("textBox")
    text.select();
    navigator.clipboard.writeText(text.value);

    props.showAlert('success','text copied to clipboard.')
  }

  // const modeTextColor = props.mode==='light'?'black':'white';
  // const modeBgColor = props.mode==='light'?'white':'#303443';

  let modeTextColor;
  let modeBgColor;
  let btn;

  if (props.mode === "light") {
    modeBgColor = "white";
    modeTextColor = "black";
    btn ='secondary';
  } 
  else if (props.mode === "dark") {
    modeBgColor = "#303443";
    modeTextColor = "white";
    btn = 'light';
  }
  else if (props.mode === "pink") {
    modeBgColor = "#ffdbe5";
    modeTextColor = "black";
    btn = 'light';
  }
  else if (props.mode === "navy") {
    modeBgColor = "#192a52";
    modeTextColor = "white";
    btn = 'light';
  }

  return (
    <>

      <div className="container">

        {/* <h1 className={`m-4 text-center text-${modeTextColor}`}>{props.title}</h1> */}

        {/* Textarea */}
        <div className="form-group my-2">
          <textarea
            className={`form-control text-${modeTextColor}`}
            onChange={handleOnChange}
            id="textBox"
            placeholder="Start typing or paste text here"
            value={text}
            rows="15"
            style={{backgroundColor: modeBgColor}}
          ></textarea>
        </div>

        {/* Function Buttons */}
        <button
          type="button"
          className={`btn btn-${btn} m-1`}
          onClick={handleLowercase}>
          To Lowercase
        </button>

        <button
          type="button"
          className={`btn btn-${btn} m-1`}
          onClick={handleUppercase}>
          To Uppercase
        </button>

        <button
          type="button"
          className={`btn btn-${btn} m-1`}
          onClick={handleCopy}>
          Copy Text
        </button>

        <button
          type="button"
          className={`btn btn-${btn} m-1`}
          onClick={handleClear}>
          Clear
        </button>

      </div>

      

        {/* Text Summary */}
        <div className="container my-4">
          <h2 className={`mx-2 text-${modeTextColor}`}>Text summary</h2>

          <button type="button" className="btn btn-light m-1">
            Characters
            <span className="mx-2 fs-6">{text.length}</span>
          </button>

          <button type="button" className="btn btn-light m-1">
            Words
            <span className="mx-2 fs-6">
              {text.split(' ').filter((n)=>{ return n !== '' }).length}
            </span>
          </button>

          <button type="button" className="btn btn-light m-1">
            Minutes read
            <span className="mx-2 fs-6">
              {((text.split(' ').filter((n)=>{ return n !== '' }).length) * 0.008).toFixed(2)}
            </span>
          </button>
        </div>

        {/* Text Preview */}
        <div className="container  my-4">

          <div className={`mx-2 h2 d-inline text-${modeTextColor}`}>Preview</div>

          <div className={`preview mx-2 my-1 text-${text===''?'secondary':modeTextColor}`}>
          {text === ""
              ? "type something in text box above to see in preview"
              : text}
          </div>
          
    

      </div>
    </>
  );
}

TextForm.propTypes = {
  title: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  title: "set title",
};