import React, { useState } from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Home } from './pages/Home';
import { BasicQuiz } from './pages/BasicQuiz';
import { DetailedQuiz } from './pages/DetailedQuiz';
import { Results } from './pages/Results';

const saveKeyData = "MYKEY";
let keyData = "";
const prevKey = localStorage.getItem(saveKeyData);
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  const [key, setKey] = useState<string>(keyData);
  const [response, setResponse] = useState<string>("OpenAI API Response will appear here");
  const [isBlurred, setIsBlurred] = useState(true);

  const handleReveal = () => {
    setIsBlurred(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // prevent page reload
    localStorage.setItem(saveKeyData, JSON.stringify(key));
  };

  const changeKey = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKey(event.target.value);
  };

  return (
    <Router>
      <div className="App">
        <NavigationBar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home handleReveal={handleReveal} isBlurred={isBlurred} />} />
            <Route path="/basic" element={<BasicQuiz apiKey={key} setResponse={setResponse} />} />
            <Route path="/detailed" element={<DetailedQuiz apiKey={key} setResponse={setResponse} />} />
            <Route path="/results" element={<Results response={response} />} />
          </Routes>
        </div>

        <footer className="footer">
          <hr />
          <Form className="api-form" onSubmit={handleSubmit}>
            <Form.Label>API Key:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Insert API Key Here"
              value={key}
              onChange={changeKey}
            />
            <Button className="submit-button" type="submit">
              Submit
            </Button>
          </Form>
          <p>Andrew Altmann, Ben Huffman, Oryem Kilama, Kyle Henry</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
