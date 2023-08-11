import React from 'react'

function StartScreen({numQuestions,dispatch}) {
  return (
    <div className='start'>
<h2>Welcome to the React Quiz</h2>
<h3>{numQuestions} questions to take your React mastery</h3>
<button className='btn btn-ui'onClick={()=>dispatch({type:'start'})}>Lets's Start</button>
    </div>
  )
}

export default StartScreen;