import React from "react";
import "./Results.css"; 

export function Results({ response }: { response: string }) {
  return (
    <div className="results-page">
      <div className="results-card">
        <h1 className="results-title">🎯 Your Personalized Career Report</h1>
        {response ? (
          <div className="results-content">
            <p>{response.match(/Introduction:\s*(.*)/)?.[1]}</p>
            <h3>{response.match(/PrimaryCareer:\s*(.*)/)?.[1]} {response.match(/PrimaryCareerPercentage:\s*(.*)/)?.[1]}</h3>
            <p>{response.match(/PrimaryCareerReason:\s*(.*)/)?.[1]}</p>
            <h3>{response.match(/OtherCareer1:\s*(.*)/)?.[1]} {response.match(/OtherCareer1Percentage:\s*(.*)/)?.[1]}</h3>
            <p>{response.match(/OtherCareer1Reason:\s*(.*)/)?.[1]}</p>
            <h3>{response.match(/OtherCareer2:\s*(.*)/)?.[1]} {response.match(/OtherCareer2Percentage:\s*(.*)/)?.[1]}</h3>
            <p>{response.match(/OtherCareer2Reason:\s*(.*)/)?.[1]}</p>
            <h3>{response.match(/OtherCareer3:\s*(.*)/)?.[1]} {response.match(/OtherCareer3Percentage:\s*(.*)/)?.[1]}</h3>
            <p>{response.match(/OtherCareer3Reason:\s*(.*)/)?.[1]}</p>
          </div>
        ) : (
          <p className="loading-text">Loading your career insights...</p>
        )}
      </div>
    </div>
  );
}
