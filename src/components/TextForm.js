import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        //console.log("Uppercase Was Clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () =>{
        //console.log("Uppercase Was Clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = () =>{
        //console.log("Uppercase Was Clicked"+ text);
        let newText = ' ';
        setText(newText)
    }
    const handleOnChange = (event) =>{
        //console.log("On Change");
        setText(event.target.value);
    }
    const[text, setText]= useState('Enter text here ');
    //text= "New Text";
    //setText=("New Text")
    return (
    <>
    <div className="container mx-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mytextbox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowerercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container mx-3">
        <h2>Your text summary here</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
