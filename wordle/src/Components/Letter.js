//represents each letter guessed in the word
import React, { useContext } from 'react'
import { AppContext } from '../App'

function Letter({letterPos, attemptVal}) {
    let {board, correctWord} = useContext(AppContext) 
    let letter = board[attemptVal][letterPos]
    // boardDefault[2][4] => letter at the 5th position in the 3rd attempt

    let correct = correctWord[letterPos] === letter
    let almost = !correct && letter !== "" && correctWord.includes(letter)  //if the input letter in the word ; !correct -> removes any clashes with correct position
    let letterState = correct ? "correct" : almost ? "almost" : "error"
    //if the ip is in right pos -> correct -> green, else if ip letter in the word -> almost -> yellow
  return (
    <div className='letter' id={letterState}>
      {letter}
    </div>
  )
}

export default Letter
