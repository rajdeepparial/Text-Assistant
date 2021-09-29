import React, {useState} from "react";

export default function TextForm(props) {


    const [text, setText] = useState("");      //creating usestate for the text inside textbox
    const clickUpperCase = ()=>{              //this is a function to make uppercase
        let newText = text.toUpperCase();
        setText(newText);
    }
    const clickLowerCase = ()=>{
        let newText = text.toLowerCase();     //this is a function to make lowercase
        setText(newText);
    }

    const clearText = ()=>{                   //clearing the text
      let newText = "";
      setText(newText);
    }

    const clickTitleCase = ()=>{
      let newText = text.toLowerCase().replace(/\b(\w)/g,  s => s.toUpperCase());           //Titlecase Function
      setText(newText);
    }

  
    const onClickChange = (event)=>{
        console.log("Value written to textbox")
        setText(event.target.value)        //this is used to add texts in textbox
    }
    
    const [myStyle, setmyStyle] = useState({color:'black', backgroundColor: 'white'})   //Dark Mode function
    const [btnText, setbtnText] = useState('Enable Dark Mode')
    const darkMode = ()=>{
      if(myStyle.color === 'black'){
        setmyStyle({color:'white', backgroundColor: 'black', border: '1px solid white'})
        setbtnText('Disable Dark Mode')        
      }
      else{
        setmyStyle({color:'black', backgroundColor: 'white'})
        setbtnText('Enable Dark Mode')
      }
    }

    const copyToClipboard = ()=>{
        var text = document.getElementById("exampleFormControlTextarea1")   //assigns the text in textbox to text var
        text.select();
        navigator.clipboard.writeText(text.value);
    }



  return (    
    <div style={myStyle}> 
    <div className="container" >
      <h3 className="my-3">{props.heading}</h3>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="9"
          value={text}
          onChange={onClickChange}
          style={myStyle}
        ></textarea>
      </div>

      <div className="container">
      <button className="btn btn-primary mx-3 my-2" onClick={clickUpperCase} >Convert to Uppercase</button>
      <button className="btn btn-warning mx-3 my-2" onClick={clickLowerCase} >Convert to Lowercase</button>
      <button className="btn btn-secondary mx-3 my-2"  onClick={clickTitleCase} >Convert to Titlecase</button>
      <button className="btn btn-info mx-3 my-2" onClick={copyToClipboard} >Copy to Clipboard</button>
      <button className="btn btn-danger mx-3 my-2" onClick={clearText} >Clear Text</button>
      <button className="btn btn-dark mx-3 my-2" onClick={darkMode}>{btnText}</button>

      </div>
      
    </div>

    <div className="container my-4" style={myStyle}>
      <h2>Your text has:</h2>
      <p><b>{text.split(" ").length-1}</b> words and <b>{text.length}</b> characters.</p>
      <p>Approx {0.008*(text.split(" ").length-1)} mintues needed to read this text.</p>
      <h2>Preview of your text</h2>
      <p>{text}</p>
    </div>


    </div>
  );
}


