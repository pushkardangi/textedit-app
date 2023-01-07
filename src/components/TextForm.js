import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {

  // function changes text to uppercase and
  // change the state to new text(uppercase)
  const handleUpperCase = () => {
    console.log("Upper case was clicked.");
    const newText = text.toUpperCase();
    setText(newText);
  };

  // change in the state of textarea
  const handleOnChange = (event) => {
    console.log("On Change.");
    setText(event.target.value); // setText = current value inside textarea
  };

  const [text, setText] = useState("");
  // setText("Enter text here2"); // correct way to change the state
  // text = "Enter text here2"; // wrong way to change the state

  return (
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
          className="btn btn-primary m-4"
          // trigger for function call
          onClick={handleUpperCase}>
          To Uppercase
        </button>
      </div>
    </main>
  );
}

TextForm.propTypes = {
  title: PropTypes.string.isRequired
};

TextForm.defaultProps = {
  title: "set title"
};