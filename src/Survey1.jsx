import React, { useState } from 'react';

function Survey1(props) {
  const [numQuestions, setNumQuestions] = useState('');
  const [email, setEmail] = useState('');

  const handleNumQuestionsChange = (event) => {
    setNumQuestions(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
 

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({ numQuestions, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        How many questions do you want?
        <input type="number" value={numQuestions} onChange={handleNumQuestionsChange} />
      </label>
      <br />
      <label>
        What is your email?
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Survey1;
