//state Practice

import React, { useState } from "react";

export default function MainContent(props) {
  const [text, setText] = useState("");
  const addVal = (event) => {
    setText(event.target.value); //for adding value in textbox
  };

  const uppCase = () => {
    let upVal = text.toUpperCase();
    setText(upVal);
    props.showAlert("warning","Converted to Uppercase")
  };
  const lowCase = () => {
    let lowVal = text.toLowerCase();
    setText(lowVal);
    props.showAlert("warning","Converted to Lowercase")
  };
  
  const copyTxt = () => {
    let Text = document.getElementById('textArea')
    Text.select()
    navigator.clipboard.writeText(Text.value)
    document.getSelection().removeAllRanges()
  };

  const extSpace = () => {
    let ext = text.split(/[ ] + /)
    setText(ext.join(" "))
  }

  return (
    <>
      <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
        <h1>Enter Your Text Here</h1>
        <div className="mb-3">
          <textarea className={`form-control bg-${props.mode==='light'?'light':'dark'} text-${props.mode==='light'?'dark':'light'}`} value={text} onChange={addVal} id="textArea" rows="10"></textarea>
        </div>
        <button type="button" onClick={uppCase} className="btn btn-primary mx-2">Convert To Uppercase</button>
        <button type="button" onClick={lowCase} className="btn btn-primary mx-2">Convert To Lowercase</button>
        <button type="button" onClick={copyTxt} className="btn btn-primary mx-2">Copy To Clipboard</button>
        <button type="button" onClick={extSpace} className="btn btn-primary mx-2">Remove Extra spaces</button>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Word and {text.length} Character</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read Word</p>
      <h2>Your Text Preview</h2>
      <p>{text.length>0?text:'Enter text above to preview Here'}</p>
      </div>
    </>
  );
}
