import React from "react";
import { Button } from "react-bootstrap";
import "./BasicAssessmentOption.css";

interface Prop {
  handleReveal: (newValue: boolean) => void
  isBlurred: boolean
}

export function BasicOption({handleReveal, isBlurred}: Prop): React.JSX.Element {
  
  return (
    <div className="basic-assessment-container">
      <h4>Not sure what career is right for you? Take our quick quiz!</h4>
      <Button className="basic-assessment-button" onClick={() => {
        handleReveal(false)
        console.log("Basic Assessment Option Button Pressed.")
        }}>
        Find Your Career Path
      </Button>
    </div>
  );
}