import React from 'react';
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
import Json from '../surveys/questionOne'

const Mysurvey = ()=>{
    return (
        <Survey.survey
            json = {Json}
        />
    )
}
export default Mysurvey;