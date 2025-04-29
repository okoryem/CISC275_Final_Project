import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DetailedQuiz.css";
import OpenAI from "openai";
import { ProgressBar } from "../components/ProgressBar";
import { QuestionTemplate } from "../components/QuestionTemplate";
import { detailedQuestions } from "./DetailedQuizData";


export function DetailedQuiz({
  apiKey,
  setResponse,
}: {
  apiKey: string;
  setResponse: React.Dispatch<React.SetStateAction<string>>;
}) {

  //THIS ARRAY BELOW IS WHERE THE ANSWERS ARE STORED FOR EACH QUESTION
  const [answersGrid, setAnswersGrid] = useState<(string[])>(["","","","","","","","","","","","","","","","","","","",""]);

  //Bar fills up at the top of screen based on integer value e.g (0-100)
  const [barPercentage, setBarPercentage] = useState<number>(0); 

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
          content: `I just took a career quiz. These are the questions and their respective answers: ${detailedQuestions.map(
            (item, i) =>
              "The question was " +
              item.question +
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
    <div>
      <h2>Welcome to the Detailed Career Quiz</h2>
      <div className="progress-bar-container">
            Completion %
            <ProgressBar value={barPercentage}></ProgressBar>
            </div>
      
            <div className ="question-block-group">
              Please Answer The Questions Below:
            {detailedQuestions.map((prop) =>  <QuestionTemplate id={prop.id} question={prop.question} options={prop.options} answersGrid={answersGrid} setAnswersGrid={setAnswersGrid} barPercentage={barPercentage} setBarPercentage={setBarPercentage} ></QuestionTemplate>)}
      </div>

      <button
        className="submit-button"
        onClick={displayResponse}
      >
        Generate Career Report
      </button>
    </div>
  );
}