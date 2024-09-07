import React from 'react'

function Child(props) {
    //using props we can assign each values under the name color petals
    const {name,color,petals}=props.flower1;

  return (
    <div>
        <h1>Child component</h1>
        <p1>Flower name: {name}</p1><br></br>
        <p2>Color: {color}</p2><br></br>
        <p3>Petals: {petals}</p3>
      
    </div>
  )
}

export default Child
