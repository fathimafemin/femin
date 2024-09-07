//OBJECT CREATION
import React from 'react'

function Createobj() {
    var employee={
        name:"femin",
        dept:"cs",
        place:"calicut",
        rollno:12

    };
  return (
    <div>
      <h1>
        employee details
      </h1>
      <p>{employee.name}</p>
      <p>{employee.dept}</p>
      <p>{employee.place}</p>
      <p>{employee.rollno}</p>
    </div>
  )
}

export default Createobj
