//represents each letter guessed in the word
import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App'

function Letter({ letterPos, attemptVal }) {
  let { board, correctWord, currAttempt, disabledLetters, setDisabledLetters } = useContext(AppContext)
  let letter = board[attemptVal][letterPos]
  // boardDefault[2][4] => letter at the 5th position in the 3rd attempt
  let correct = correctWord[letterPos] === letter // if entered letter is equal to the correct letter for that place
  let almost = !correct && letter !== "" && correctWord.includes(letter)  //if the input letter in the word ; !correct -> removes any clashes with correct position
  let letterState = currAttempt.attempt > attemptVal && (correct ? "correct" : almost ? "almost" : "error")
  //the colors are applied only when full letters are completed and next word writing chance comes up
  //if the ip is in right pos -> correct -> green, else if ip letter in the word -> almost -> yellow 
  useEffect(()=>{
    if (letter !=="" && letterState === "error")
      setDisabledLetters((prev) => [...prev, letter])
  }, [currAttempt.attempt])
  //disable the letters after every attempt
  return (
    <div className='letter' id={letterState}>
      {letter}
    </div>
  )
}

export default Letter
