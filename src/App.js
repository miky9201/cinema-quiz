import './App.css';
import AnswerButton from './components/AnswerButton';
import Question from './components/Question';
import Title from './components/Title';
import Score from './components/Score';

const App = () => {
      return(
            <div className="main-container">
                  <Title content="Cinema Quiz"/>
                  <Question  actor="Johnny Depp" movie="Titanic"/>
                  <div className="button-container">
                        <AnswerButton  buttonType="yes"/>
                        <AnswerButton  buttonType="no"/>
                  </div>
                  <Score value="4"/>
            </div>
      ) 
}

export default App;
