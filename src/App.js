import React, { useState } from 'react';
import Survey1 from './Survey1';
import Survey2 from './Survey2';
import Survey3 from './Survey3';
import Survey4 from './Survey4';
import answerProcessing from './processingAnswers';

function App() {
  const [currentSurvey, setCurrentSurvey] = useState(1);
  const [numQuestions, setNumQuestions] = useState(0);
  const [email, setEmail] = useState('');
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  const handleSurvey1Submit = (data) => {
    setNumQuestions(data.numQuestions);
    setEmail(data.email);
    setCurrentSurvey(2);
  };

  const handleSurvey2Submit = (data) => {
    setQuestions(data);
    setCurrentSurvey(3);
  };

  const handleSurvey3Submit = (data) => {
    const emptyAnswers = Array.from({length:data.length},()=>[]);
    setAnswers(emptyAnswers);
    setAnswers(answers);
    for(let i=0;i<numQuestions;i++){
      let temp = data[i];
      answers.push(temp);
    }
    setCurrentSurvey(4);//breakpoint here for debugging
  };

  const handleSurvey3Retake = (data) => {
    const emptyAnswers = Array.from({length:data.length},()=>[]);
    setAnswers(emptyAnswers);
    setAnswers(answers);
    for(let i=0;i<numQuestions;i++){
      let temp = data[i];
      answers.push(temp)
    }
    answerProcessing(answers);
    setAnswers([]);
    setCurrentSurvey(3); 
  };

  return (
    <div>
      {currentSurvey === 1 && <Survey1 onSubmit={handleSurvey1Submit} />}
      {currentSurvey === 2 && <Survey2 numQuestions={numQuestions} questions={questions} onSubmit={handleSurvey2Submit} />}
      {currentSurvey === 3 && <Survey3 numQuestions={numQuestions} questions={questions} answers = {answers} onSubmit={handleSurvey3Submit} onRetake={handleSurvey3Retake} />}
      {currentSurvey === 4 && <Survey4 email={email} />}
    </div>
  );
}

export default App;