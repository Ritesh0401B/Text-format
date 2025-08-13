import React, { useState } from 'react'

export default function TextForm(props) {

    // upper case
    const handelUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    // lower case
    const handelLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    // capitalized text
    const handleCapitalizeClick = () => {
        let newText = text
            .toLowerCase()
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

        setText(newText);
        props.showAlert("Converted to capitalized!", "success");
    };

    // copy text
    const handleCopy = () => {
        const text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard!", "success");
    }

    // remove extra spaces from text
    const handleExtraSpaces = () => {
        const newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    // handle Clear Text
    const handleClearText = () => {
        let newText = '';
        setText(newText);
        props.showAlert("All text cleared!", "success");
    }


    const handelOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text = "new text";     // Wrong way to change the state
    // setText("new text");   // Correct way to change the state

    return (
        <>
            <div className="container mt-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3" >
                    <textarea className={`form-control ${props.mode === 'light' ? 'light-mode':'dark-mode'}`} placeholder='Enter text here'
                        value={text} onChange={handelOnChange}
                        style={{
                            backgroundColor: props.mode === 'light' ? 'white' : 'grey',
                            color: props.mode === 'light' ? 'black' : 'white'
                        }} id="myBox" rows="10">

                    </textarea>
                </div>
                <button className="btn btn-primary m-1" onClick={handelUpClick}>Covert to Uppercase</button>
                <button className="btn btn-primary m-1" onClick={handelLoClick}>Covert to Lowercase</button>
                <button className="btn btn-primary m-1" onClick={handleCapitalizeClick}>Capitalized Case</button>
                <button className="btn btn-primary m-1" onClick={handleClearText}>Clear Text</button>
                <button className="btn btn-primary m-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary m-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            </div>
            <div className="container mt-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text : 'Enter something in the texbox above to preview it here'}</p>
            </div>
        </>
    )
}
