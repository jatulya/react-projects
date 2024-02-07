import React, { useCallback, useEffect, useContext } from 'react'
import Keys from './Keys'
import { AppContext } from '../App'

function Keyboard() {

  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"]
  const { onDelete, onEnter, onSelectLetter } = useContext(AppContext)

  const handleKeyPress = useCallback((e) => {
    if (e.key === "Enter") {
      onEnter()
    }
    else if (e.key === "Backspace") {
      onDelete()
    }
    else {
      const allKeys = [...keys1, ...keys2, ...keys3];

      allKeys.forEach((key) => {
        if (e.key.toUpperCase() === key.toUpperCase()) {
          onSelectLetter(key);
        }
      });

    }
  })
  //adding and removing keyboard event listener
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress)
    return () => document.removeEventListener("keydown", handleKeyPress)
  }, [handleKeyPress])

  return (
    <div className='keyboard'>

      <div className='line1'>
        {keys1.map((key) => {
          return <Keys keyVal={key} />
        })}
      </div>

      <div className='line2'>
        {keys2.map((key) => {
          return <Keys keyVal={key} />
        })}
      </div>

      <div className='line3'>
        <Keys keyVal={"ENTER"} bigKey />

        {keys3.map((key) => {
          return <Keys keyVal={key} />
        })}

        <Keys keyVal={"DELETE"} bigKey />
      </div>

    </div>
  )
}

export default Keyboard
