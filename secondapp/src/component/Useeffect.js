
import React,{useState,useEffect} from 'react';

function Useeffect() {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log('Component has re-endered'+count)
    },[count]);
  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={()=>setCount(count+1)}>Increment count</button>
    </div>
  )
}

export default Useeffect
