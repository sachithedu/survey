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

  // Render input fields for each question specified in Survey2
  const inputFields = props.questions.map((question, index) => (
    <div key={index}>
      <label>
        {question}:
        <input type="number" min="1" value={answers[index] || ''} onChange={(event) => handleAnswerChange(event, index)} />
      </label>
      <br />
    </div>
  ));

  return (
    <form onSubmit={handleSubmit}>
      {inputFields}
      <button type="submit">Submit</button>
      <button type="button" onClick={props.onRetake}>Retake</button>
    </form>
  );
}

export default Survey3;
