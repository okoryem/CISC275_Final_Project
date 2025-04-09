import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BasicOption } from '../components/BasicAssesmentOption';
import './Home.css';


export function Home({ handleReveal, isBlurred }: { handleReveal: () => void; isBlurred: boolean }) {
  const navigate = useNavigate();

  return (
    <>
      <div className={`overlay ${isBlurred ? "blur-active" : "blur-hidden"}`} />
      {isBlurred && <BasicOption handleReveal={handleReveal} isBlurred={isBlurred} />}

      <div className="home-container">
        <h1 className="quiz-title">The Ultimate Career Quiz</h1>

        <div className="quiz-card-container">
          <div className="quiz-card">
            <h2>Basic Quiz</h2>
            <p>Shorter quiz with simpler questions to help find your ideal career</p>
            <button className="btn" onClick={() => navigate('/basic')}>Select</button>
          </div>

          <div className="quiz-card">
            <h2>Detailed Quiz</h2>
            <p>Completely in depth quiz to find your perfect career match</p>
            <button className="btn" onClick={() => navigate('/detailed')}>Select</button>
          </div>
        </div>
      </div>
    </>
  );
}