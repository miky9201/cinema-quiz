import React, { useState, useEffect } from 'react';

import './App.css';
import AnswerButton from './components/AnswerButton';
import Question from './components/Question';
import Title from './components/Title';
import Score from './components/Score';

import { getRandomState } from './utils/getRandomState';
import { answerChecker } from './utils/answerChecker';

const App = () => {
      const [ trueAssociation, setTrueAssociation ] = useState({ actor: "Johnny Depp", movie: "Pirate of Caribeans"}) 
      const [ wrongAssociation, setWrongAssociation ] = useState({ actor: "Brad Pitt",  movie: "Titanic"})
      const [randomQuestion, setRandomQuestion] = useState();
      const [userAnswer, setUserAnswer] = useState();
      const [score, setScore] = useState(0);

      useEffect(() => {
            getRandomState(setRandomQuestion)
      }, [])

      useEffect(() => {
            answerChecker(userAnswer, 
                  setUserAnswer, 
                  randomQuestion, 
                  setRandomQuestion,
                  score, 
                  setScore
            )
      // eslint-disable-next-line
      }, [userAnswer])

      return (
            <div className="main-container">
                  <Title content="Cinema Quiz"/>
                  <Question trueAssociation={trueAssociation} wrongAssociation={wrongAssociation} typeOfAssociation={randomQuestion}/>
                  <div className="button-container">
                        <AnswerButton setResponse={setUserAnswer} buttonType="yes"/>
                        <AnswerButton setResponse={setUserAnswer} buttonType="no"/>
                  </div>
                  <Score value={score} />
            </div>
      ) 
}

export default App;
