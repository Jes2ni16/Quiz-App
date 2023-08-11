import React from 'react'

function Finished({points,maxPoints,dispatch}) {
    const percentage=(points/maxPoints)*100;
  return (
    <>
   <p className='result'>You Scored <strong>{points}</strong> Out of {maxPoints} 
   ({Math.ceil(percentage)}%)</p>
   <button className='btn btn-ui' onClick={()=>dispatch({type:'restart'})}>REstart</button></>
  )
}

export default Finished