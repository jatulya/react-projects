import React from 'react'

function Functions() {
  
  const onSelectLetter = () => {
     if (currAttempt.letterPos > 4) return ;
          
      newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal
      setBoard(newBoard)
      setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos + 1})  
    
  }

  const onDelete = () => {
      if (currAttempt.letterPos === 0) return     
      
      newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = ""
      setBoard(newBoard)
      setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos - 1})     
  }

  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return
    setCurrAttempt({attempt: currAttempt.attempt+1, letterPos:0 })  
  }

  return (
    <div></div>
  )
}

export default Functions

// boardDefault[2][4] => letter at the 5th position in the 3rd attempt
// boardDefault stores the words being suggested by the user
// each word contains 5 letters and user can do 6 attempts