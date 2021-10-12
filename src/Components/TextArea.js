import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextArea(props) {
    const [text, updateText] = useState("")
    const change = (event) => {
        updateText(event.target.value)
    }

    const convertToUpper = () => {
        props.update('success', 'Text converted to Uppercase');
        const newText = text.toUpperCase();
        updateText(newText);
    }

    const convertToLower = () => {
        props.update('success', 'Text converted to Lowercase!');
        const newText = text.toLowerCase();
        updateText(newText);
    }

    const removeWhitespace = () => {
        props.update('success', 'Extra whitespaces removed!');
        let newText = text.split(/[ ]+/);
        updateText(newText.join(" "));
    }

    const copy = () => {
        let text = document.getElementById('TextBox');
        text.select();
        text.focus();
        navigator.clipboard.writeText(text.value).then(function () {
            props.update('success', 'Copied to clipboard!');
        }, function (err) {
            props.update('danger', 'There was some error!');
        });
        text.setSelectionRange(0, 0);
        text.blur();
    }

    const clear = () => {
        props.update('success', 'Text cleared!');
        updateText('');
    }

    const placeholderToggle = props.mode === 'light' ? {
        backgroundColor: 'white',
        color: 'black'
    } : {
        backgroundColor: 'black',
        color: 'white'
    };

    const textToggle = props.mode === 'light' ? {
        color: 'black'
    } : {
        color: 'white'
    };
    return (
        <>
            <div className="container">
                <div className="mb-3 my-3">
                    <label htmlFor="TextBox"><h1 style={textToggle}>{props.heading}</h1></label>
                    <textarea className="form-control" placeholder="Enter the text here..." value={text} onChange={change} id="TextBox" rows="10" style={placeholderToggle}></textarea>
                    <button disabled={text.length === 0} type="submit" onClick={convertToUpper} className="btn btn-primary my-2 mx-2">{props.task1}</button>
                    <button disabled={text.length === 0} type="submit" onClick={convertToLower} className="btn btn-danger my-2 mx-2">{props.task2}</button>
                    <button disabled={text.length === 0} type="submit" onClick={removeWhitespace} className="btn btn-info my-2 mx-2">{props.task3}</button>
                    <button disabled={text.length === 0} type="submit" onClick={copy} className="btn btn-warning my-2 mx-2">Copy Text</button>
                    <button disabled={text.length === 0} type="submit" onClick={clear} className="btn btn-success my-2 mx-2">Clear Text</button>
                </div>
            </div>
            <div className="container my-3" style={textToggle}>
                <h2 >Analysis of your text</h2>
                <p>The text has {text.split(/\s+/).filter((ele) => { return ele.length !== 0 }).length} words and {text.length} characters.</p>
                <h2>Text Preview</h2>
                <p>{text.length === 0 ? 'No text entered yet!!' : text}</p>
            </div>
        </>
    )
}

TextArea.propTypes = {
    heading: PropTypes.string.isRequired,
    task1: PropTypes.string.isRequired,
    task2: PropTypes.string.isRequired,
    task3: PropTypes.string.isRequired
}