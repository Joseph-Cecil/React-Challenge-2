import React, { useState } from "react";
import "./App.css"


type Questions = {
  prompt: string,
  answers: string[],
  correctAnswer: string
}

const questions : Questions[] = [
  {
    prompt: " What is the full meaning of Dom",
    answers: [
      "Dont Off Me",
      "Dont Angry Me",
      "Document Object Model"
    ],
    correctAnswer: "Document Object Model"
  },

  {
    prompt: " What is the full meaning of Dom",
    answers: [
      "Dont Off Me",
      "Dont Angry Me",
      "Document Object Model"
    ],
    correctAnswer: "Document Object Model"
  }
]

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const isGameOver = currentQuestionIndex >= questions.length;
  return(
    <div className="App">
      <div className="App-header">
        {isGameOver ? <h2>Your Score is {score}</h2> : (
        <form onSubmit={(e) => {
          e.preventDefault()
          if(selectedAnswer === currentQuestion.correctAnswer) {
            setScore(score + 1)
          }

          setCurrentQuestionIndex(currentQuestionIndex + 1);
        }}>
        {currentQuestion.prompt}
        {currentQuestion.answers.map((answer) => {
          return( <label key={answer}><input type="radio" name="answer" onChange={() => {
            setSelectedAnswer(answer)
          }}></input>{answer}</label>)
        })}
        <button>submit</button>
        </form>
        )}
      </div>
    </div>
  )
}

export default App;