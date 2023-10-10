import React, {useState} from "react";
import PropTypes from 'prop-types'


export default function TextForm(props) {
    // const [text, setText] = useState("Enter the text . . .")
    const [text, setText] = useState("")
    
    // text = "New Text";     //Wrong way to change state
    // setText("New Text");     //Correct way to change state


    const handleUpClick =()=>{
        // console.log("Uppercase was Clicked" +text)
        let newtext = text.toUpperCase();
        // setText("You Have clicked on handleUpClick")
        setText(newtext)
        props.showAlert('Converted to Uppercase', 'success')
      }
      
      const handleLowerClick =()=>{
        // console.log("Lowercase was Clicked" +text)
        let newtext = text.toLowerCase();
        // setText("You Have clicked on handleLowerClick")
        setText(newtext)
        props.showAlert('Converted to Lowercase', 'success')
      }
      const handleClearClick =()=>{
        setText("");
        props.showAlert('Text Cleared', 'success')
      }
      
      const handleOnChnage=(event)=>{
        // console.log("On Change")
        setText(event.target.value);
      }
      const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
      
      return (
        <>
    <div className="container " style={{color : props.mode ==='dark'?'white':'black'}}>
        <h2>
        {props.heading}
        </h2>
      <div className="my-3">
        {/* <label htmlFor="myText" className="form-label">
        Exampe Text Area :
        </label> */}
        <textarea
          style={{backgroundColor : props.mode ==='dark'?'#282C34':'white', color : props.mode ==='dark'?'white':'black'}}
          value={text}
          onChange={handleOnChnage}
          className="form-control"
          id="myText"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert to Uppercase
        </button>
      <button className="btn btn-primary mx-1" onClick={handleLowerClick}>
        Convert to Lowercase
        </button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>
        Clear Text
        </button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    </div>
    
    <div className="container my-3 border-top " style={{color : props.mode ==='dark'?'white':'black'}}>
        <h3 > Your Text summary</h3>
        <p ><b> {text.split(" ").length}</b> Words & <b>{text.length}</b> Characters.</p>
        <p> <b>{0.008 * text.split(" ").length} </b> Minutes take to read.</p>
    </div>
    <div className="container my-3 border-top " style={{color : props.mode ==='dark'?'white':'black'}}>
        <h3 className="my-3">You can Preview Below : -</h3>
        <p>{text.length>0?text:'Enter something Above to show here.'}</p>
    </div>

    </>
   
  );
}

TextForm.PropTypes={
  heading : PropTypes.string.isRequired,
};

TextForm.defaultProps ={
  heading : "Ankit is Here.",
}
