import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BasicQuiz.css";
import { QuestionTemplate } from "../components/QuestionTemplate";
import { ProgressBar } from "../components/ProgressBar";
import { basicQuestions } from "./BasicQuizData";
import OpenAI from "openai";

export function BasicQuiz({apiKey, setResponse}: { apiKey: string; setResponse: React.Dispatch<React.SetStateAction<string>> }) {
  
  //This array below is where the answers for each question will be stored e.g (answersGrid[0] = ANSWER FOR FIRST QUESTION)
  const [answersGrid, setAnswersGrid] = useState<(string[])>(["","","","","","","","","",""]);
  const [barPercentage, setBarPercentage] = useState<number>(0); //Bar fills up based on integer value e.g (0-100)
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const openai = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true,
  });

  async function displayResponse() {
    if (!apiKey) {
      setResponse(
        "Please enter your OpenAI API key at the bottom of the page."
      );
      return;
    }

    const aiResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a career specialist. You analyze people's responses and help them choose a career. Can you give a nicely formatted response. Have multiple career options, and primary career you think they should take. Also say why you choose that career. You can use bullets and lists to make it easier to read.",
        },
        {
          role: "user",
          content: `I just took a Basic career quiz (mention in your response that these are the results from a Basic career quiz). These are the questions and their respective answers: ${basicQuestions.map(
            (a, i) =>
              "The question was " +
              a.question +
              " and my answer was: " +
              answersGrid[i] +
              ". "
          ).join("")}`,
        },
      ],
    });

    const aiResponseText: string =
      aiResponse.choices[0].message.content || "No response";
    setResponse(aiResponseText);

    // Navigate to the results page AFTER getting the response
    navigate("/results");
  } 

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
        onClick={() => {
          setShowResults(true) 
          displayResponse()
          }
        }
        
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
