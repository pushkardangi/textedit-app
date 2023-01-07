import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {

  // function convert text to lowercase and
  // change the state to new text(lowercase)
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

  // change in the state of textarea
  const handleOnChange = (event) => {
    // console.log("On Change.");
    setText(event.target.value); // setText = current value inside textarea
  };

  const [text, setText] = useState("");
  // setText("Enter text here2"); // correct way to change the state
  // text = "Enter text here2"; // wrong way to change the state

  return (
    <>
      <main>
        <div className="container">
          <h1 className="m-5 text-center">{props.title}</h1>
          <div className="form-group">
            <textarea
              className="form-control"
              // trigger for function call
              onChange={handleOnChange}
              id="exampleFormControlTextarea1"
              placeholder="Start typing or paste text here"
              value={text}
              rows="15"
            ></textarea>
          </div>

          <button
            type="button"
            className="btn btn-primary mx-1 my-3"
            // trigger for function call
            onClick={handleLowercase}>
            To Lowercase
          </button>

          <button
            type="button"
            className="btn btn-primary mx-1 my-3"
            // trigger for function call
            onClick={handleUppercase}>
            To Uppercase
          </button>

        </div>
      </main>

      <div className="container">
        <div className="container my-4">
          <h2>Text summary</h2>

          <button type="button" className="btn btn-light m-1">
            Characters{" "}
            <span className="badge text-bg-light fs-6">{text.length}</span>
          </button>

          <button type="button" className="btn btn-light m-1">
            Words{" "}
            <span className="badge text-bg-light fs-6">
              {text.split(" ").length}
            </span>
          </button>

          <button type="button" className="btn btn-light m-1">
            Minutes read {" "}
            <span className="badge text-bg-light fs-6">
              {text.split(" ").length*0.008}
            </span>
          </button>
        </div>

        <div className="container my-4">
          <h2>Preview</h2>
          <div className="preview mx-1 my-1">{text}</div>
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