// type rfce, then press enter key to get basic code
// this component contains the basic of our code
import React from 'react' 
import Letter from './Letter'

function generateRows() {
  const rows = [];
  for (let i = 0; i < 5; i++) {
    const letters = [];
    for (let j = 0; j < 5; j++) {
      letters.push(<Letter letterPos={j} attemptVal={i} />);
    }
    rows.push(<div className='row'>{letters}</div>);
  }
  return rows;
}

function Board() {
  return (
    <div className='board'>
      {generateRows()} 
    </div>  
  )
}

export default Board
