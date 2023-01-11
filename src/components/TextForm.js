import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {

  const [text, setText] = useState("");
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLowercase = () => {
    console.log("Lower was clicked.");
    const newText = text.toLowerCase();
    setText(newText);
  };

  const handleUppercase = () => {
    console.log("Uppercase was clicked.");
    const newText = text.toUpperCase();
    setText(newText);
  };

  const handleClear = () => {
    console.log("Clear was clicked.");
    setText("");
  };
  
  const handleCopy = () => {
    console.log("Copy was clicked.");
    let text = document.getElementById("textBox")
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const modeTextColor = props.mode==='light'?'black':'white';
  const modeBgColor = props.mode==='light'?'white':'#303443';

  return (
    <>

      <div className="container">

        <h1 className={`m-5 text-center text-${modeTextColor}`}>{props.title}</h1>

        {/* Textarea */}
        <div className="form-group">
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
          className="btn btn-primary mx-1 my-3"
          onClick={handleLowercase}>
          To Lowercase
        </button>

        <button
          type="button"
          className="btn btn-primary mx-1 my-3"
          onClick={handleUppercase}>
          To Uppercase
        </button>

        <button
          type="button"
          className="btn btn-primary mx-1 my-3"
          onClick={handleCopy}>
          Copy Text
        </button>

        <button
          type="button"
          className="btn btn-primary mx-1 my-3"
          onClick={handleClear}>
          Clear
        </button>

      </div>

      <div className="container">

        {/* Text Summary */}
        <div className="container my-4">
          <h2 className={`text-${modeTextColor}`}>Text summary</h2>

          <button type="button" className="btn btn-light m-1">
            Characters{" "}
            <span className="mx-2 fs-6">{text.length}</span>
          </button>

          <button type="button" className="btn btn-light m-1">
            Words{" "}
            <span className="mx-2 fs-6">
              {text.split(" ").length}
            </span>
          </button>

          <button type="button" className="btn btn-light m-1">
            Minutes read{" "}
            <span className="mx-2 fs-6">
              {text.split(" ").length * 0.008}
            </span>
          </button>
        </div>

        {/* Text Preview */}
        <div className="container my-4">

          <div className={`h2 d-inline text-${modeTextColor}`}>Preview</div>

          <div className={`preview mx-1 my-1 text-${text===''?'secondary':modeTextColor}`}>
          {text === ""
              ? "type something in text box above to see in preview"
              : text}
          </div>
          
        </div>

      </div>
    </>
  );
}

TextForm.propTypes = {
  title: PropTypes.string.isRequired
};

TextForm.defaultProps = {
  title: "set title"
};