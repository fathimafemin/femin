import React from 'react'
import Child from './Child';
//IMPORT CHILD HERE

function Parent() {
    const flower={
        name:"rose",
        color:"Red",
        petals:5
        //here 1st flower is variable and the flower component assigned to that child variable flower
    };
  return (
    <div>
      <h1>Parent COMPUTING</h1>
      <Child flower1={flower}/> 
    </div>
  )
}

export default Parent

