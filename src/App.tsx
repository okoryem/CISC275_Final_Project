import React, { useState } from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import { NavigationBar } from "./components/NavigationBar";
// was advised by chatgpt to install router to connect to othere pages
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {Home} from './components/Home'
import { DetailedQuiz } from './components/DetailedQuiz'; 
import { BasicQuiz } from './components/BasicQuiz';      

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  const [key, setKey] = useState<string>(keyData); //for api key input

  const [isBlurred, setIsBlurred] = useState(true); //Used to turn the blur on/off
  const handleReveal = () => {
    setIsBlurred(false);
  };

  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }
  
  
  //ai (specifically ChatGpt) helped with the understanding of using the router
  return (
    <Router>
      <div className="App">
        <NavigationBar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home handleReveal={handleReveal} isBlurred={isBlurred} />} />
            <Route path="/basic" element={<BasicQuiz />} />
            <Route path="/detailed" element={<DetailedQuiz />} />
          </Routes>
        </div>

        <footer className="footer">
          <hr />
          <Form className="api-form">
            <Form.Label>API Key:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Insert API Key Here"
              onChange={changeKey}
            />
            <Button className="submit-button" onClick={handleSubmit}>
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
