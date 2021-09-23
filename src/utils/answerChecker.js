import { getRandomState } from "./getRandomState";

export const answerChecker = (userAnswer, setUserAnswer, randomQuestion, setRandomQuestion, score, setScore) => {

      if ((userAnswer === true && randomQuestion === true) || (userAnswer === false && randomQuestion === false)) {
            setScore(score+1)
      }
      setUserAnswer()
      getRandomState(setRandomQuestion)
}