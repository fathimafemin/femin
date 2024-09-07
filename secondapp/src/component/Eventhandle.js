import React from 'react'

function Eventhandle() {
    function sayHai(){
        alert("Hai")
    }
    //here onClick is event sayHai is function on click event call function sayhai
  return (
    
    <button onClick={sayHai}>Click me!</button>
  )
}

export default Eventhandle
