import { Form } from "react-bootstrap";
import "./QuestionTemplate.css";

interface QuestionTemplateProps {
    id: number;
    question: string;
    options: string[];
    answersGrid: string[];
    setAnswersGrid: (selected: string[]) => void;
    barPercentage: number;
    setBarPercentage: (value: number) => void;
}

export function QuestionTemplate(props: QuestionTemplateProps): React.JSX.Element {
   
    
    function handleSelection(selectedOption: string) {
        const newAnswers = [...props.answersGrid]; // Copy the array
        newAnswers[props.id] = selectedOption; // Update only this question's answer
        props.setAnswersGrid(newAnswers); // Set the new array

        if (props.answersGrid[props.id] === ""){
            if (props.answersGrid.length > 10) props.setBarPercentage(props.barPercentage + 5);
            else props.setBarPercentage(props.barPercentage + 10);
        } 
    }
     return (
        <div className="question-block">
        <div className="question-header">
            Question {props.id + 1}
        </div>
    
        <div className="question-content"> {/* NEW wrapper */}
            <h4 className="question-text">{props.question}</h4>
            <Form>
                {props.options.map((option, index) => (
                    <Form.Check
                        key={option}
                        type="radio"
                        name={`question-${props.id}`}
                        label={option}
                        value={option}
                        checked={props.answersGrid[props.id] === option}
                        onChange={(e) => handleSelection(e.target.value)}
                        className="option"
                        style={{
                            borderBottom: index !== props.options.length - 1 ? "1px solid #ccc" : "none",
                            paddingBottom: "8px",
                            marginBottom: "8px",
                        }}
                    />
                ))}
            </Form>
        </div>
    </div>
    );
}