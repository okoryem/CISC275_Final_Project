import React from "react";
import { Button } from "react-bootstrap";

export function BasicOption(): React.JSX.Element {

    return (
        <div>
            <h4>Not sure what career is right for you? Take our quick quiz!</h4>
            <Button onClick={() => {console.log("Basic Assesment Option Button Pressed. Temporary Function")}}>
                Find Your Career Path
            </Button>
        </div>
    );
}