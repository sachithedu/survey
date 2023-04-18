import React, { useState } from 'react';

function Survey2(props) {
  const [surveyQuestions, setSurveyQuestions] = useState([]);

  const handleQuestionChange = (event, index) => {
    const newQuestions = [...surveyQuestions];
    newQuestions[index] = event.target.value;
    setSurveyQuestions(newQuestions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(surveyQuestions);
  };


  // Render input fields based on the number of questions specified in Survey1
  const inputFields = [];
  for (let i = 0; i < props.numQuestions; i++) {
    inputFields.push(
      <div key={i}>
        <label>
          Question {i + 1}:
          <input type="text" value={surveyQuestions[i] || ''} onChange={(event) => {
            handleQuestionChange(event, i);
            const newQuestions = [...surveyQuestions];
            newQuestions[i] = event.target.value;
            setSurveyQuestions(newQuestions);
          }} />
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
