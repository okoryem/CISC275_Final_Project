import React from "react";
import { Button, FormCheck, FormGroup, FormLabel } from "react-bootstrap";
import OpenAI from "openai";

const SUBJECTS = [
  "Math",
  "Science",
  "History",
  "English",
  "Art",
  "Physical Education",
  "Music"
];
/*
const DETAILED_QUESTIONS = {
  "What type of work environment do you prefer?": "",
  "How do you feel about problem-solving at work?": "",
  "How do you prefer to communicate at work?": "",
  "Which of these best describes your ideal level of job responsibility?": "",
  "How important is job security to you?": "",
  "How do you feel about working under pressure?": "",
  "Which of the following interests you the most?": "",
  "If you could choose your ideal work schedule, which would you prefer?": "",
  "How do you feel about working in a team versus working alone?": "",
  "When it comes to career growth, which statement fits you best?": "",
  "I enjoy tasks that require attention to detail.": "",
  "I feel more satisfied when my work directly impacts other people's lives.": "",
  "I prefer working in a field that allows me to use my creativity.": "",
  "I am open to working with new technologies and learning new software.": "",
  "True or False: I prefer jobs that involve repetitive tasks.": "",
  "I prefer jobs that involve a lot of interaction with people.": "",
  "On a scale from 1 to 5, how comfortable are you with managing others in a professional setting?": "",
  "How much does work-life balance matter to you?": "",
  "When it comes to work, I value:": "",
  "Which of these industries interests you the most?": ""
}

const BASIC_QUESTIONS = {
  "What do you like doing the most?": "",
  "What kind of work environment do you prefer?": "",
  "Do you enjoy working with people?": "",
  "How do you feel about taking on leadership roles?": "",
  "How important is it for you to have job security?": "",
  "What’s your preferred working style?": "",
  "What type of work do you enjoy the most?": "",
  "How do you feel about routine tasks?": "",
  "How do you approach learning new skills or concepts?": "",
  "What kind of impact do you want to have in your career?": ""
}
*/
export function OpenAIApiTest({ apiKey }: { apiKey: string }): React.JSX.Element {
  const openai = new OpenAI({
    apiKey: apiKey, dangerouslyAllowBrowser: true
  });

  const [subject, setSubject] = React.useState<string>(SUBJECTS[0]);
  const [response, setResponse] = React.useState<string>("OpenAI API Response will appear here");
  //const [apiKey, setApiKey] = React.useState<string>(key);

  async function displayResponse() {
    if (!apiKey) {
      setResponse("Please enter your OpenAI API key at the bottom of the page.");
      return;
    }
        
    const aiResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: 'system', content: "You are a career specialist. You analyze people's responses and help them choose a career. Limit your responses to 3 sentences." },
        { role: 'user', content: `My favorite subject in school is ${subject}. What career should I consider?` }
      ]
    });
    const aiResponseText: string = aiResponse.choices[0].message.content || "No response";
    setResponse(aiResponseText);
  }

  function updateSubject(event: React.ChangeEvent<HTMLInputElement>) {
    setSubject(event.target.value);
  }



  return (
    <div>
      <h4>What's your favorite subject in school</h4>
      <FormGroup controlId="subjectSelect">
        <FormLabel>Choose a subject:</FormLabel>
        {SUBJECTS.map((subjectOption) => (
          <FormCheck
            key={subjectOption}
            type="radio"
            label={subjectOption}
            name="subject"
            value={subjectOption}
            checked={subject === subjectOption}
            onChange={updateSubject}
            inline
            ></FormCheck>
        ))}
      </FormGroup>
      <h4>{response}</h4>
      <Button className="basic-assessment-button" onClick={() => {displayResponse();}}>
        Check OpenAI API
      </Button>
    </div>
  );
}