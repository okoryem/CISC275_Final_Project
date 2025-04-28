import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BasicQuiz.css";
import OpenAI from "openai";

const questions = [
  {
    question: "What do you like doing the most?",
    options: [
      "Solving problems",
      "Helping others",
      "Organizing things",
      "Creating new things"
    ]
  },
  {
    question: "What kind of work environment do you prefer?",
    options: [
      "Busy and fast-paced",
      "Calm and steady",
      "Collaborative with teams",
      "Independent and quiet"
    ]
  },
  {
    question: "Do you enjoy working with people?",
    options: [
      "Yes, I enjoy it a lot",
      "Sometimes, but I like a balance",
      "Not really, I prefer working alone",
      "No, I prefer to avoid social interactions"
    ]
  },
  {
    question: "How do you feel about taking on leadership roles?",
    options: [
      "I love leading others and taking charge",
      "I’m okay with it, but I prefer sharing the responsibility",
      "I’m comfortable, but I prefer someone else to lead",
      "I don’t want to take on leadership roles"
    ]
  },
  {
    question: "How important is it for you to have job security?",
    options: [
      "Very important",
      "Important, but I can be flexible",
      "Not that important",
      "Not important at all"
    ]
  },
  {
    question: "What’s your preferred working style?",
    options: [
      "Flexible with tasks and deadlines",
      "Structured with clear goals and deadlines",
      "Collaborative with input from others",
      "Independent with minimal supervision"
    ]
  },
  {
    question: "What type of work do you enjoy the most?",
    options: [
      "Work that challenges my problem-solving skills",
      "Helping others and making a difference",
      "Organizing and managing tasks",
      "Using my creativity and thinking outside the box"
    ]
  },
  {
    question: "How do you feel about routine tasks?",
    options: [
      "I enjoy having a consistent routine; it helps me stay organized.",
      "I like some routine, but I need variety to stay engaged.",
      "I prefer to avoid routine tasks and keep things dynamic.",
      "I dislike routine tasks and thrive on constant change."
    ]
  },
  {
    question: "How do you approach learning new skills or concepts?",
    options: [
      "I love learning and actively seek out opportunities to gain new skills.",
      "I’m open to learning but prefer structured environments for it.",
      "I learn best through experience rather than formal training.",
      "I’m not particularly motivated to learn new things unless absolutely necessary."
    ]
  },
  {
    question: "What kind of impact do you want to have in your career?",
    options: [
      "I want to make a meaningful, long-lasting impact on the world.",
      "I want to contribute to a company’s success and grow personally.",
      "I want to be recognized for my individual accomplishments and expertise.",
      "I’m more interested in stability and just doing a job well."
    ]
  }
];

export function BasicQuiz( {apiKey, setResponse}: { apiKey: string; setResponse: React.Dispatch<React.SetStateAction<string>> }) {
  const navigate = useNavigate();

  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );

  const [results, setResults] = useState<{ question: string; selectedOption: string }[]>([]);

  const handleSelect = (qIndex: number, oIndex: number) => {
    const updated = [...selectedAnswers];
    updated[qIndex] = oIndex;
    setSelectedAnswers(updated);
  };

  const getAnswerTexts = () => {
    return questions.map((q, i) => ({
      question: q.question,
      selectedOption: selectedAnswers[i] !== null ? q.options[selectedAnswers[i] as number] : "Not answered"
    }));
  };

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

    const finalAnswers = getAnswerTexts();

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
          content: `I just took a Basic career quiz (mention in your response that these are the results from a Basic career quiz). These are the questions and their respective answers: ${finalAnswers.map(
            (a) =>
              "The question was " +
              a.question +
              " and my answer was: " +
              a.selectedOption +
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
    <div className="quiz-container">
      <h2>Welcome to the Basic Career Quiz</h2>
      {questions.map((q, index) => (
        <div key={index} className="question-block">
          <p><strong>{index + 1}. {q.question}</strong></p>
          {q.options.map((option, i) => (
            <button
              key={i}
              className={`option-button ${selectedAnswers[index] === i ? "selected" : ""}`}
              onClick={() => handleSelect(index, i)}
            >
              {String.fromCharCode(97 + i)} {option}
            </button>
          ))}
        </div>
      ))}

      <button
        className="submit-button"
        onClick={displayResponse}
      >
        Generate Career Report
      </button>
    </div>
  );
}
