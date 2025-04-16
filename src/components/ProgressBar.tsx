

import { Form } from 'react-bootstrap';
import { useState } from 'react';
export function ProgressBar() {

  const [requesting, setRequesting] = useState<string>("0");
  const progress = document.getElementById('progress');
  
  function updateRequest(event: React.ChangeEvent<HTMLInputElement>) {
    if (progress){
      progress.style.width = `${parseInt(requesting)}%`;
    }
    
    setRequesting(event.target.value);
}


  return (

<div>
<div className="progress-container">
      <div className="progress-bar" id="progress"></div>
    </div>
<Form.Group controlId="attemptsInput">
    <Form.Label>TEST Percentage (%):</Form.Label>
                <Form.Control
                    type="number"
                    value={requesting}
                    onChange={updateRequest}
                />
    </Form.Group>
    
    </div>



  )
}
