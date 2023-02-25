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
    props.showAlert('secondary','Converted to Lowercase.')
  };
  
  const handleUppercase = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert('secondary','Converted to Uppercase.')
  };

  const handleExtraSpaces = () => {
    // remove extra spaces
    let newText = text.split(' ').filter(word => word).join(' ');
    
    // remove space between word and "." or "?" or "!" (sentence termination)
    newText = newText.replace(/\s\./g,".");
    newText = newText.replace(/\s\?/g,"?");
    newText = newText.replace(/\s!/g,"!");

    setText(newText);
    props.showAlert('secondary','Removed extra spaces.')
  };

  const handleCapitalizeSentences = () => {
    let newText = "";
    let myArray = text.split(".");


    for(let i = 0; i < myArray.length; i++)
    {

      // find the first alphabet of the sentence and capitalize it
      for(let j = 0; j < 100; j++){

        // if the first character of the sentence is num, no updation required
        if (Number.isInteger(parseInt(myArray[i].charAt(j))) === true)
        {
          // if any sentence has "?" at the end, don't add "."
          if(myArray[i].charAt((myArray[i].length) - 1) === "?")
          {
            newText += myArray[i];
          }
          else{
            newText += myArray[i] + ".";
          }
          break;
        }
        
        // if the first character of the sentence is alphabet, updation required
        if(myArray[i].charAt(j).toLowerCase() !== myArray[i].charAt(j).toUpperCase())
        {

          if(myArray[i].charAt((myArray[i].length) - 1) === "?")
          {
            newText += myArray[i].replace(myArray[i].charAt(j),myArray[i].charAt(j).toUpperCase());
          }
          else{
            newText += myArray[i].replace(myArray[i].charAt(j),myArray[i].charAt(j).toUpperCase()) + ".";
          }
          break;
        }
      }

    }
        
    setText(newText);
    props.showAlert('secondary','All sentences Capitalized.')
  };
  
  const handleClear = () => {
    setText("");
    props.showAlert('secondary','Text cleared.')
  };
  
  const handleCopy = () => {
    let text = document.getElementById("textBox")
    // text.select();
    navigator.clipboard.writeText(text.value);
    // document.getSelection().removeAllRanges();

    props.showAlert('secondary','Text copied to clipboard.')
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
          disabled={text.length===0}
          className={`btn btn-${btn} m-1`}
          onClick={handleLowercase}>
          To Lowercase
        </button>

        <button
          type="button"
          disabled={text.length===0}
          className={`btn btn-${btn} m-1`}
          onClick={handleUppercase}>
          To Uppercase
        </button>

        <button
          type="button"
          disabled={text.length===0}
          className={`btn btn-${btn} m-1`}
          onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>

        <button
          type="button"
          disabled={text.length===0}
          className={`btn btn-${btn} m-1`}
          onClick={handleCapitalizeSentences}>
          Capitalize Sentences
        </button>

        <button
          type="button"
          disabled={text.length===0}
          className={`btn btn-${btn} m-1`}
          onClick={handleCopy}>
          Copy Text
        </button>

        <button
          type="button"
          disabled={text.length===0}
          className={`btn btn-${btn} m-1`}
          onClick={handleClear}>
          Clear
        </button>

      </div>

        {/* Text Summary */}
        <div className="container my-4">

          <h2 className={`mx-2 text-${modeTextColor}`}>Text summary</h2>

          <button disabled='disabled' type="button" className="btn btn-light m-1">
            Characters
            <span className="mx-2 fs-6">{text.length}</span>
          </button>

          <button disabled='disabled' type="button" className="btn btn-light m-1">
            Words
            <span className="mx-2 fs-6">
              {text.split(/\s+/).filter((n)=>{ return n !== '' }).length}
            </span>
          </button>

          <button disabled='disabled' type="button" className="btn btn-light m-1">
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
              ? "Nothing to preview!"
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