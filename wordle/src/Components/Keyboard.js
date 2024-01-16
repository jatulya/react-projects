import React from 'react'
import Keys from './Keys'

function Keyboard() {

  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"]

  return (
    <div className='keyboard'>
      
      <div className='line1'>
        { keys1.map((key) => {
          return <Keys keyVal={key}/>
        })}
      </div>
      
      <div className='line2'>
        { keys2.map((key) => {
          return <Keys keyVal={key}/>
        })}
      </div>
      
      <div className='line3'>
        <Keys keyVal={"ENTER"} bigKey />
        { keys3.map((key) => {
          return <Keys keyVal={key}/>
        })}
        <Keys keyVal={"DELETE"} bigKey />
      </div>

    </div>
  )
}

export default Keyboard
