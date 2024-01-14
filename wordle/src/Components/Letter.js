//represents each letter guessed in the word
import React, { useContext } from 'react'
import { AppContext } from '../App'

function Letter({letterPos, attemptVal}) {
    let {board} = useContext(AppContext) 
    let letter = board[attemptVal][letterPos]
    // boardDefault[2][4] => letter at the 5th position in the 3rd attempt
  return (
    <div className='letter'>
      {letter}
    </div>
  )
}

export default Letter
