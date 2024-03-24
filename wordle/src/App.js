import { createContext, useEffect, useState } from 'react';
import './App.css';
import { boardDefault, generateWordSet } from './Words';
import Board from './Components/Board';
import Keyboard from './Components/Keyboard';
import GameOver from './Components/GameOver';

export const AppContext = createContext()
//context api is used to pass states used in parent component to all 
//the mentioned under Appcontext.provider. the values passed is given in the values

function App() {
  
  const [board, setBoard] = useState(boardDefault)
  const [currAttempt, setCurrAttempt] = useState({attempt:0, letterPos: 0})    
  const newBoard = [...board]
  const [wordSet, setWordSet] = useState(new Set())
  const [disabledLetters, setDisabledLetters] = useState([])
  const [correctWord, setCorrectWord] = useState("")
  const [gameOver, setGameOver] = useState({
    over :  false,
    correct : false
  })

  useEffect(() => {
    generateWordSet().then((words) => {
      //generate function is an async function
      console.log(words.wordSet)
      setWordSet(words.wordSet) 
      setCorrectWord(words.newWord.toUpperCase())
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
    if (currAttempt.letterPos !== 5) return;
    //taking complete word
    let currWord = ""
    for (let i=0; i<5; i++){
      currWord += board[currAttempt.attempt][i]
    }
    //checking if the word exists
    if (wordSet.has(currWord.toLowerCase()))
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 })
    else
      alert("Word not found")

    if (currWord == correctWord){
      setGameOver({over: true, correct:true})
      return;
    }

    if (currAttempt.attempt === 4)
      setGameOver({over:true, correct:false })
  }

  return (
    <div className="App">
      <nav><h1>WORDLE CODDLE</h1></nav>
      <AppContext.Provider value={{
        board, setBoard, 
        currAttempt, setCurrAttempt, 
        onDelete, onEnter,onSelectLetter, 
        boardDefault,
        correctWord,
        disabledLetters, setDisabledLetters,
        gameOver, setGameOver
      }}>
        <div className='game'>
          <Board />
          {gameOver.over ? <GameOver /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
