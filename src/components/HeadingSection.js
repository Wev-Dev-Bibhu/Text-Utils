import React, { useState } from "react";

export default function HeadingSection(props) {
  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase",'success')
  }
  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase",'success')
  }
  // const handleClear = () => {
  //   var text = document.getElementById('myBox');
  //   text.remove();
  //   props.showAlert("Text Cleared",'success')
  // }
  const handleCopy= () => {
   var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text Copied",'success')
  }
  const handleonchange = (event) => {
    setText(event.target.value);
  }

  const [text, setText] = useState("");
 
  
  return (
    <>
        <div className="container my-6" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1 >
        {props.heading}
      </h1>
      <textarea
        className="form-control"
        id="myBox"
        rows="10"
        cols="30"
        placeholder={text}
        value={text}
        onChange={handleonchange}
        style={{backgroundColor:props.mode==='light'?'white':'#042755',color:props.mode === 'dark'?'white':'black'}}
      ></textarea>
      <button disabled={text.length === 0} className="btn btn-primary my-3 mx-2" onClick={handleUpperCase}>
        Convert to Uppercase
      </button>
      <button disabled={text.length === 0} className="btn btn-primary my-3 mx-2" onClick={handleLowerCase}>
        Convert to Lowercase
      </button>
      <button disabled={text.length === 0} className="btn btn-primary my-3 mx-2" onClick={handleCopy}>
        Copy Text
      </button>
      <button disabled={text.length === 0} className="btn btn-primary my-3 mx-2">
        Clear Text
      </button>
    </div>
    <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Text Summary</h1>
        <p> { text.split(' ').filter((element)=>{
          return element.length!==0}).length} words and {text.length} characters</p>
        <p> {0.008* text.split(' ').filter((element)=>{
          return element.length!==0}).length} Minutes Reading</p>
        <h2>Preview of Text</h2>
        <p>{text.length>0?text:"Enter Text to Preview Here !!"}</p>
    </div>
    </>
  );
}
