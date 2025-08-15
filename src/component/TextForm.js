import { useState } from "react"
import React from 'react'
// -> import the usestate 
//->initialize the use state 
// this initialize accept initial state and returns two values
//->the current state
//-> the function that updates the state
// we use the value in the textarea
export default function TextForm(props) {
   
   //  text="enter the text here2"// this is not the correct way to change the state 
  const handleUpClick = () => {
  console.log("uppercase was clicked" + text)// this is the correct way to change the state
  let newText= text.toUpperCase();
   setText(newText);
  };
   const handleLoClick = () => {
  console.log("uppercase was clicked" + text)// this is the correct way to change the state
  let newText= text.toLowerCase();
   setText(newText);
  };
  const handleOnChange =(event) =>
  {
    console.log("on change")
    setText(event.target.value);

  };
  const handleclearClick =(event)=>
  {
    //console.log("on change")
    setText(event.target.value);
  }
    const [text, setText] = useState(' ');
  return (
    <>
    <div>
        <h3>{props.heading}</h3>
        <div className="mb-3">
        <textarea className="form-control"  value= {text} onChange={handleOnChange}id="my box" rows="3"></textarea>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}> convert to Uppercase</button>
        <button className='btn btn-primary' onClick={handleLoClick}> convert to Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleclearClick}> clear</button>
        </div> 
  </div>
  <div className="container my-3">
    <h3>your text summary</h3>
    <p>{text.split(" ").length}words and {text.length} charaters</p>
    <p>{0.008*text.split(" ").length} Minutes read</p>
    <h2>Preview</h2> 
    <p>{text}</p> 
  </div>
  </>
  )
}
