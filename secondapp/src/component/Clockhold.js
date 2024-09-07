import React from 'react'
import { useState,useEffect } from 'react'

function Clockhold() {
    const[date,setDate]=useState(new Date());
    function newclock(){
        setDate(new Date())
    }
    useEffect(()=>{
        setInterval(newclock,1000)
    })
  return (
    <div>
      <h1>{date.toLocaleTimeString()}</h1>
    </div>
  )
}

export default Clockhold