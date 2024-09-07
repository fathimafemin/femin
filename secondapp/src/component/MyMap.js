import React from 'react'

function MyMap() {
  const people=[
    {id:1,  Name:"Sam", Gender:"Male" ,Age:45},
    {id:2,  Name:"fathima", Gender:"Female" ,Age:23},
    {id:3,  Name:"Noof", Gender:"Female" ,Age:45},
    {id:4,  Name:"Swathi", Gender:"Female" ,Age:35},
  ]
  return (
    <div>
      {people.map(person =>{
        return(
          <h4>
          <h1><b>Name:{person.Name}</b>
          <p>Id:{person.id}</p>
          <p>Age:{person.Age}</p>
          <p>Gender:{person.Gender}</p>
            </h1>
            </h4>
        )
      })}
    </div>
  )
}

export default MyMap

