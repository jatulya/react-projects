import { createContext, useState } from 'react';
import './App.css';
import Board from './Components/Board';
import Keyboard from './Components/Keyboard';

export const AppContext = createContext()
//context api is used to pass states used in parent component to all 
//the mentioned under Appcontext.provider. the values passed is given in the values

function App() {
  
  const boardDefault = [
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
  ]
  
  const [board, setBoard] = useState(boardDefault)
  const [currAttempt, setCurrAttempt] = useState({attempt:0, letterPos: 0})

  return (
    <div className="App">
      <nav><h1>WORDLE CODDLE</h1></nav>
      <AppContext.Provider value={{board, setBoard, currAttempt, setCurrAttempt}}>
        <div className='game'>
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
