import { createContext, useEffect, useState } from 'react';
import './App.css';
import { boardDefault, generateWordSet } from './Words';
import Board from './Components/Board';
import Keyboard from './Components/Keyboard';

export const AppContext = createContext()
//context api is used to pass states used in parent component to all 
//the mentioned under Appcontext.provider. the values passed is given in the values

function App() {
  
  const [board, setBoard] = useState(boardDefault)
  const [currAttempt, setCurrAttempt] = useState({attempt:0, letterPos: 0})    
  const newBoard = [...board]
  const correctWord = "RIGHT"

  useEffect(() => {
    generateWordSet().then((words) => {
      console.log(words)
    }) 
  }, [])

  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > 4) return;
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal
    setBoard(newBoard)
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 }) 
  }
  
   const onDelete = () => {
    if (currAttempt.letterPos === 0) return
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = ""
    setBoard(newBoard)
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 })
  }
  
   const onEnter = () => {
    if (currAttempt.letterPos !== 5) return
    setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 })
  }

  return (
    <div className="App">
      <nav><h1>WORDLE CODDLE</h1></nav>
      <AppContext.Provider value={{
        board, 
        setBoard, 
        currAttempt, 
        setCurrAttempt, 
        onDelete, 
        onEnter,onSelectLetter, 
        boardDefault,
        correctWord
      }}>
        <div className='game'>
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
