import React from "react";
import "./App.css";


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


const questionsOpenEnded = ["1+1=?", "2+2=?","3+3=?","4+4=?"];
const answers = ["2", "4","6","8"];

const questionsMultipleChoice= [
  {id: 1,text: '1+0=?',choices: [
      {
        id: 'a',
        text: '1'
      },
      {
        id: 'b',
        text: '2'
      },
      {
        id: 'c',
        text: '3'
      },
      {
        id: 'd',
        text: '4'
      }
    ],
    correct: 'a'},

    {id: 2,text: '1+1=?',choices: [
      {
        id: 'a',
        text: '1'
      },
      {
        id: 'b',
        text: '2'
      },
      {
        id: 'c',
        text: '3'
      },
      {
        id: 'd',
        text: '4'
      }
    ],
    correct: 'b'},

    {id: 3,text: '1+2=?',choices: [
      {
        id: 'a',
        text: '1'
      },
      {
        id: 'b',
        text: '2'
      },
      {
        id: 'c',
        text: '3'
      },
      {
        id: 'd',
        text: '4'
      }
    ],
    correct: 'c'},

    {id: 4,text: '1+3=?',choices: [
      {
        id: 'a',
        text: '1'
      },
      {
        id: 'b',
        text: '2'
      },
      {
        id: 'c',
        text: '3'
      },
      {
        id: 'd',
        text: '4'
      }
    ],
    correct: 'd'}

  
  ]
 

let i=getRandomInt(questionsOpenEnded.length);
let j=getRandomInt(questionsMultipleChoice.length);




function App() {
  const [text, setText] = React.useState("");
  const [question,setQuestion]=React.useState(questionsOpenEnded[i]);
  const [question2,setQuestion2]=React.useState(questionsMultipleChoice[j].text)
  const [questionType,setQuestionType]=React.useState(getRandomInt(2));
  if (questionType===0) {
  
  return (
    <div>
    <div>{question}</div>
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
          alert("Correct");
        }
          else {
          alert("Incorrect");
        }; 
        i=getRandomInt(questionsOpenEnded.length);
        setQuestion(questionsOpenEnded[i]);
        setQuestionType(getRandomInt(2));
      
        
        }}
      >
        Submit
      </button>

    </div>
  ); }

  else {return (


    <div>
   <div>{question2}</div>

    <div>
   <button
        onClick={() => {
          
          if (questionsMultipleChoice[j].choices[0].id===questionsMultipleChoice[j].correct) {
          alert("Correct");
        }
          else {
          alert("Incorrect");
        }; 
        j=getRandomInt(questionsMultipleChoice.length);
        setQuestion2(questionsMultipleChoice[j].text);
        setQuestionType(getRandomInt(2));
      
        
        }}
      >
        {questionsMultipleChoice[j].choices[0].text}
      </button>
      </div>

      <div>
   <button
        onClick={() => {
          
          if (questionsMultipleChoice[j].choices[1].id===questionsMultipleChoice[j].correct) {
          alert("Correct");
        }
          else {
          alert("Incorrect");
        }; 
        j=getRandomInt(questionsMultipleChoice.length);
        setQuestion2(questionsMultipleChoice[j].text);
        setQuestionType(getRandomInt(2));
      
        
        }}
      >
        {questionsMultipleChoice[j].choices[1].text}
      </button>
      </div>

      <div>
   <button
        onClick={() => {
          
          if (questionsMultipleChoice[j].choices[2].id===questionsMultipleChoice[j].correct) {
          alert("Correct");
        }
          else {
          alert("Incorrect");
        }; 
        j=getRandomInt(questionsMultipleChoice.length);
        setQuestion2(questionsMultipleChoice[j].text);
        setQuestionType(getRandomInt(2));
      
        
        }}
      >
        {questionsMultipleChoice[j].choices[2].text}
      </button>
      </div>

      <div>
   <button
        onClick={() => {
          
          if (questionsMultipleChoice[j].choices[3].id===questionsMultipleChoice[j].correct) {
          alert("Correct");
        }
          else {
          alert("Incorrect");
        }; 
        j=getRandomInt(questionsMultipleChoice.length);
        setQuestion2(questionsMultipleChoice[j].text);
        setQuestionType(getRandomInt(2));
      
        
        }}
      >
        {questionsMultipleChoice[j].choices[3].text}
      </button>
      </div>


    </div>

  )
  
  }
}

export default App;
