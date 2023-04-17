import React, { useState } from 'react';
import Survey1 from './Survey1';
import Survey2 from './Survey2';
import Survey3 from './Survey3';
import Survey4 from './Survey4';

function App() {
  const [currentSurvey, setCurrentSurvey] = useState(1);
  const [numQuestions, setNumQuestions] = useState(0);
  const [email, setEmail] = useState('');
  const [surveyQuestions, setSurveyQuestions] = useState([]);

  const handleSurvey1Submit = (data) => {
    setNumQuestions(data.numQuestions);
    setEmail(data.email);
    setCurrentSurvey(2);
  };

  const handleSurvey2Submit = () => {
    setCurrentSurvey(3);
  };

  const handleSurvey3Submit = () => {
    setCurrentSurvey(4);
  };

  const handleSurvey3Retake = () => {
    setCurrentSurvey(3);
  };

  return (
    <div>
      {currentSurvey === 1 && <Survey1 onSubmit={handleSurvey1Submit} />}
      {currentSurvey === 2 && <Survey2 numQuestions={numQuestions} onSubmit={handleSurvey2Submit} />}
      {currentSurvey === 3 && <Survey3 numQuestions={numQuestions} onSubmit={handleSurvey3Submit} onRetake={handleSurvey3Retake} />}
      {currentSurvey === 4 && <Survey4 email={email} />}
    </div>
  );
}

export default App;