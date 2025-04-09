import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BasicOption } from '../components/BasicAssesmentOption';

export function Home({ handleReveal, isBlurred }: { handleReveal: () => void; isBlurred: boolean }) {
  const navigate = useNavigate();

  return (
    <>
      {/* Optional: blur overlay and popup */}
      <div className={`overlay ${isBlurred ? "blur-active" : "blur-hidden"}`} />
      {isBlurred && <BasicOption handleReveal={handleReveal} isBlurred={isBlurred} />}

      <div className="quiz-button-container">
        <button onClick={() => navigate('/basic')} className="btn btn-primary">Basic Quiz</button>
        <button onClick={() => navigate('/detailed')} className="btn btn-secondary">Detailed Quiz</button>
      </div>
    </>
  );
}
