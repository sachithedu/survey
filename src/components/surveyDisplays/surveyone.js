import React from 'react';
import SurveyOne from '../surveys/surveyone';

const SurveyOne = ({setCurrentSurvey}) => {
  const [numQuestions, setNumQuestions] = useState(0);

  const handleComplete = (survey) => {
    setNumQuestions(survey.data.name);
    setCurrentSurvey(1);
  };

  return (
    <Mysurvey handleComplete={handleComplete} setCurrentSurvey={setCurrentSurvey} />
  );
};

export default SurveyOne;
