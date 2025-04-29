import React, { useState } from "react";
import "./BasicQuiz.css";
import { QuestionTemplate } from "../components/QuestionTemplate";
import { ProgressBar } from "../components/ProgressBar";
import { basicQuestions } from "./BasicQuizData";

export function BasicQuiz() {
  
  //This array below is where the answers for each question will be stored e.g (answersGrid[0] = ANSWER FOR FIRST QUESTION)
  const [answersGrid, setAnswersGrid] = useState<(string[])>(["","","","","","","","","",""]);
  const [barPercentage, setBarPercentage] = useState<number>(0); //Bar fills up based on integer value e.g (0-100)
  const [showResults, setShowResults] = useState(false);
 
  return (
    <div >
      <div className="progress-bar-container">
      Completion %
      <ProgressBar value={barPercentage}></ProgressBar>
      </div>

      <div className ="question-block-group">
        Please Answer The Questions Below:
      {basicQuestions.map((prop) =>  <QuestionTemplate id={prop.id} question={prop.question} options={prop.options} answersGrid={answersGrid} setAnswersGrid={setAnswersGrid} barPercentage={barPercentage} setBarPercentage={setBarPercentage} ></QuestionTemplate>)}
      </div>

      <button
        className="submit-button"
        onClick={() => setShowResults(true)}
      >
        Generate Career Report
      </button>

      {showResults && (
        <div className="results">
          <h3>Your Answers:</h3>
          <ul>
            {basicQuestions.map((item, i) => (
              <li key={i}>
                <strong>{basicQuestions[i].question}</strong><br />
                Answer: {answersGrid[i]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
