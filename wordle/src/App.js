import { createContext, useState } from 'react';
import './App.css';
import Board from './Components/Board';
import Keyboard from './Components/Keyboard';
import { boardDefault } from './Words'

export const AppContext = createContext()
//context api is used to pass states used in parent component to all 
//the mentioned under Appcontext.provider. the values passed is given in the values

function App() {
  const [board, setBoard] = useState(boardDefault)

  return (
    <div className="App">
      <nav><h1>WORDLE CODDLE</h1></nav>
      <AppContext.Provider value={{board, setBoard}}>
        <div className='game'>
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
