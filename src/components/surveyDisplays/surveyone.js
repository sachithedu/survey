import React, { useState } from 'react';
import MySurvey from '../surveyTypes/surveytypeone';

const SurveyOne = ({ setCurrentSurvey }) => {
  const [numQuestions, setNumQuestions] = useState(0);

  const handleComplete = (survey) => {
    setNumQuestions(survey.data.name);
    setCurrentSurvey(1);
  };

  return <MySurvey onComplete={handleComplete} />;
};

export default SurveyOne;
