import React, { useState } from "react";

export default function TextForm({ heading }) {
  const handleUpClick = () => {
    // console.log("UpperCase Was Clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    document.getElementById("copyBtn").textContent="Copy to Clipboard";
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    document.getElementById("copyBtn").textContent="Copy to Clipboard";
  };
  const handleInvert = () => {
    let newText = Array.from(text);
    let InverseText ="";
    for (let index = newText.length-1; index >=0; index--) {
      InverseText += newText[index];
    }
    setText(InverseText);
    document.getElementById("copyBtn").textContent="Copy to Clipboard";
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
    document.getElementById("copyBtn").textContent="Copy to Clipboard";
  };
  const handleClearClick = () => {
    setText('');
    document.getElementById("copyBtn").textContent="Copy to Clipboard";
  };
  const copyText = () => {
    navigator.clipboard.writeText(text);
    console.log("Copied to Clipboard");
    document.getElementById("copyBtn").textContent="Copied to Clipboard✅";
    
  };
  const [text, setText] = useState("");

  //text - state variable
  //"enter text here"--> default value of text
  // wrong way to change the value of the state variable text="ldjflaj"; never ever use this instead of use this
  //setText("new updated value of text" )--> used to set the value of text

  return (
    <>
      <div className="container mb-3">
        <label htmlFor="myBox" className="form-label"> <h2>{heading}</h2></label>
        <textarea className="form-control" id="myBox"rows="10"onChange={handleOnChange}value={text} placeholder="Enter Your Text here !"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase </button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase </button>
      <button className="btn btn-primary mx-2" onClick={handleInvert}>Invert text</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear TextArea</button> 
      <button className="btn btn-primary mx-2" id="copyBtn" onClick={copyText}>Copy to Clipboard</button> 

        <div className="container my-3">
            <h2>Your Summary</h2>
            <p>{text.split(" ").length + text.split("\n").length -2} Words And {text.length} Character</p>
            <h3>Reading time is : {.008 *(text.split(" ").length + text.split("\n").length -2)} Minutes</h3>
            <h1>Preview</h1>
            <p>{text}</p>
        </div>
    </>
  );
}
