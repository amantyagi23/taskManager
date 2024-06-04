import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch();
  return (
    <>
    <h1>
{count}
    </h1>
    
    </>
  )
}

export default Counter