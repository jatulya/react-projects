import React,{ useContext} from 'react'
import { AppContext } from '../App'

function Keys({keyVal, bigKey}) {      
  const {board, setBoard, currAttempt, setCurrAttempt} = useContext(AppContext) 
  const newBoard = [...board]

  const selectLetter = () => {
    
    if (keyVal === "ENTER") {    
    }

    else if (keyVal === "DELETE"){
      }

    else{     
      if (currAttempt.letterPos > 4) return ;
          
      newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal
      setBoard(newBoard)
      setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos + 1})  
    }
  };
  
  return (
    <div className='key' id={bigKey && "big"} onClick={selectLetter}>
       {keyVal}
    </div>
  )
}

export default Keys
