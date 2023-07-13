import React from 'react';
import {useState} from 'react';

const Content = () => {

    const [text , setText] = useState('')
    const [displayText, setDisplayText] = useState('');

    const buttonClick = () => {
        if (text === '') {
            setDisplayText('Please Write Your Name')
            return;
        }
        else if (text.length < 3) {
            setDisplayText('Your Name is Too Short')
            return;
        }
        setDisplayText(`Your name is: ${text}`);
    }

    const textAreaChange = (e) => {
        setText(e.target.value)
    }


    return (
        <div className="container">
          <h1>Write Your Name -</h1>
          <textarea className="textarea" onChange={textAreaChange} value={text} />
          <br />
          <button className="button" onClick={buttonClick}>
            Click Me
          </button>
          <br />
          <h1 className="result">{displayText}</h1>
        </div>
      );
      
};

export default Content;