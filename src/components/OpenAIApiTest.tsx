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



export function OpenAIApiTest(): React.JSX.Element {
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY, dangerouslyAllowBrowser: true
  });

  const [subject, setSubject] = React.useState<string>(SUBJECTS[0]);
  const [response, setResponse] = React.useState<string>("OpenAI API Response will appear here");
  //const [apiKey, setApiKey] = React.useState<string>(key);

  async function displayResponse() {
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