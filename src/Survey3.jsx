import React, { useState } from 'react';

function Survey3(props) {
  const [answers, setAnswers] = useState([]);

  const handleAnswerChange = (event, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = parseInt(event.target.value);
    setAnswers(newAnswers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(answers);
  };
  const handleRetake = (event) => {
    event.preventDefault();
    props.onRetake(answers);
  };

  // Render input fields for each question specified in Survey2
  const inputFields = props.questions && props.questions.map((question, index) => (
    <div key={index}>
      <label>
        {question}:
        <input type="number" min="1" value={answers[index] || ''} onChange={(event) => handleAnswerChange(event, index)} />
      </label>
      <br />
    </div>
  ));

  return (
    <form>
      {inputFields}
      <button type="submit" onClick={handleSubmit}>Submit</button>
      <button type="retake" onClick={handleRetake}>Retake</button>
    </form>
  );
}

export default Survey3;
