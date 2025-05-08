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
  const [answersGrid, setAnswersGrid] = useState<string[]>(
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
  );

  //Bar fills up at the top of screen based on integer value e.g (0-100)
  const [barPercentage, setBarPercentage] = useState<number>(0);

  // Tracks whether the app is waiting for OpenAI's response
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const openai = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true,
  });

  async function displayResponse() {
    if (!apiKey) {
      setResponse("Please enter your OpenAI API key at the bottom of the page.");
      return;
    }

    setLoading(true); // start loading

    try {
      const aiResponse = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
            `You are a career specialist. You analyze people's responses and help them choose a career. 
            Have 4 career options, specifically have one primary career you think they should folllow and 3 other possible careers. 
            Also say why you choose that career and what percentage you think this career matches their quiz responses. Make sure that you
              give a detailed explanation of the reasoning behind each career choice and a detailed explanation of the career.
            Have an introduction that mentions that this is a basic quiz.
            When giving a response format it like this:
            Introduction: <introduction>
            PrimaryCareer: <career name>
            PrimaryCareerReason: <reason>
            PrimaryCareerPercentage: <percentage>
            OtherCareer1: <career1 name>
            OtherCareer1Reason: <reason>
            OtherCareer1Percentage: <percentage>
            OtherCareer2: <career2 name>
            OtherCareer2Reason: <reason>
            OtherCareer2Percentage: <percentage>
            OtherCareer3: <career3 name>
            OtherCareer3Reason: <reason>
            OtherCareer3Percentage: <percentage>`,
        },
          {
            role: "user",
            content: `I just took a career quiz. These are the questions and their respective answers: ${detailedQuestions
              .map(
                (item, i) =>
                  `The question was "${item.question}" and my answer was: ${answersGrid[i]}.`
              )
              .join(" ")}`,
          },
        ],
      });

      const aiResponseText =
        aiResponse.choices[0].message.content || "No response";
      setResponse(aiResponseText);
      navigate("/results");
    } catch (error) {
      console.error("Error generating career report:", error);
      setResponse("An error occurred while generating your report.");
    } finally {
      setLoading(false); // stop loading
    }
  }

  return (
    <div>
      <h2>Welcome to the Detailed Career Quiz</h2>
      <div className="progress-bar-container">
        Completion %
        <ProgressBar value={barPercentage} />
      </div>

      <div className="question-block-group">
        Please Answer The Questions Below:
        {detailedQuestions.map((prop) => (
          <QuestionTemplate
            key={prop.id}
            id={prop.id}
            question={prop.question}
            options={prop.options}
            answersGrid={answersGrid}
            setAnswersGrid={setAnswersGrid}
            barPercentage={barPercentage}
            setBarPercentage={setBarPercentage}
          />
        ))}
      </div>

      <button
        className="submit-button"
        onClick={displayResponse}
        disabled={loading}
      >
        {loading ? "Generating your career report..." : "Generate Career Report"}
      </button>
    </div>
  );
}
