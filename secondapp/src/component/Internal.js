import React from 'react'

function Internal() {
    const mystyle={backgroundColor: "white",color:"green"};
    const fontclr={color:"yellow"};
    //style is a key word
    //INSTEAD OF DIV WE USE REACT.FRAGMENT FOR MULTILINE
    //<> </> this is react fragment
    

  return (
   <>
      <p style={mystyle}>color through internal css</p>
      
      <h1 style={fontclr}>hello</h1>

      </>
  )
}

export default Internal
