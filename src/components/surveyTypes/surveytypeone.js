import React from 'react';
import { json } from '../surveys/questionOne';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';

const Mysurvey = (props) => {
  const survey = new Survey.Model(json);
  
  survey.onComplete.add((survey) => {
    props.handleComplete(survey);
  });

  return (
    <Survey.Survey model={survey} />
  );
};

export default Mysurvey;
