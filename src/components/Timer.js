import React from 'react';
import { useEffect } from 'react';

function Timer({secondsRemaining, dispatch}) {
    const mins=Math.floor(secondsRemaining/60);
    const sec=secondsRemaining % 60;
    useEffect(function(){
       const ids= setInterval(function(){
            dispatch({type:'tick'})
        },1000);
        return ()=>clearInterval(ids)
    },[])
  return (
    <div className='timer'>{mins}:{sec}</div>
  )
}

export default Timer