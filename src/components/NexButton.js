import React from 'react'

function NexButton({dispatch,answer,index,numQuestions}) {
    if(answer===null) return null;
 if(index < numQuestions-1) return (
 <button className='btn btn-ui' onClick={()=>dispatch({type:'nextQuestion'})}>
    NExt
 </button>
  )
  if(index === numQuestions-1) return (
    <button className='btn btn-ui' onClick={()=>dispatch({type:'finish'})}>
      Finished
    </button>
     )
}

export default NexButton;