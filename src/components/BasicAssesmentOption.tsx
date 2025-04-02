import React from "react";
import { Button } from "react-bootstrap";
import "./BasicAssessmentOption.css";

export function BasicOption(): React.JSX.Element {
  return (
    <div className="basic-assessment-container">
      <h4>Not sure what career is right for you? Take our quick quiz!</h4>
      <Button className="basic-assessment-button" onClick={() => console.log("Basic Assessment Option Button Pressed.")}>
        Find Your Career Path
      </Button>
    </div>
  );
}