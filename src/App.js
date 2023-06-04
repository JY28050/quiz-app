import React, { useState, useContext } from 'react'
import './App.css';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz'
import EndScreen from './components/EndScreen'

import { QuizContext } from './helpers/Context'


function App() {

  const [gameState, setGameState] = useState("menu")

  const [score, setScore] = useState(0)

  return (
    <div className="App">
      <h1>Game Of Thrones Quiz App</h1>
      <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
      {gameState === "menu" && <MainMenu/>}
      {gameState === "quiz" && <Quiz />}
      {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  
  );
}

export default App;


/*value of gameState determines which component will be rendered. 

If we click the button in MainMenu, it will have an onClick that will change the gameState from MainMenu to Quiz. 

How do we do this? ContextAPI. 
We are going to create a global state that can be accessed throughout the whole project. 

We can use the useContext hook to use the component right here. 

*/