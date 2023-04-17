import React, { useState } from 'react';

function Survey2(props) {
  const [questions, setQuestions] = useState([]);

  const handleQuestionChange = (event, index) => {
    const newQuestions = [...questions];
    newQuestions[index] = event.target.value;
    setQuestions(newQuestions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(questions);
  };

  // Render input fields based on the number of questions specified in Survey1
  const inputFields = [];
  for (let i = 0; i < props.numQuestions; i++) {
    inputFields.push(
      <div key={i}>
        <label>
          Question {i + 1}:
          <input type="text" value={questions[i] || ''} onChange={(event) => handleQuestionChange(event, i)} />
        </label>
        <br />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {inputFields}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Survey2;