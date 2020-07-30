import React from "react";
import "./App.css";


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


var questions = ["1+1=?", "2+2=?","3+3=?","4+4=?"];
var answers = ["2", "4","6","8"];
var i=getRandomInt(questions.length);
var answer;

function App() {
  const [text, setText] = React.useState("");
  const [text2,setText2]=React.useState(questions[i]);
  return (
    <div>
      <div>{text2}</div>
      <input
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          setText("");
        }}
      >
        Reset
      </button>

      <button
        onClick={() => {
          if (text===answers[i]) {
          i=getRandomInt(questions.length);
          setText2(questions[i]);
          answer="Correct";
        }
          else {
          i=getRandomInt(questions.length);
          setText2(questions[i]);
          answer="Incorrect";
        }; 

        alert(answer);
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
