import React from "react";
import "./Results.css"; 

export function Results({ response }: { response: string }) {
  return (
    <div className="results-page">
      <div className="results-card">
        <h1 className="results-title">🎯 Your Personalized Career Report</h1>
        {response ? (
          <div className="results-content">
            {response.split("\n").map((line, index) => (
              <p key={index} className="results-line">
                {line}
              </p>
            ))}
          </div>
        ) : (
          <p className="loading-text">Loading your career insights...</p>
        )}
      </div>
    </div>
  );
}
