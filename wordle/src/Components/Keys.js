import React from 'react'

function Keys({keyVal, bigKey}) {
  return (
    <div className='key' id={bigKey && "big"}>
       {keyVal}
    </div>
  )
}

export default Keys
