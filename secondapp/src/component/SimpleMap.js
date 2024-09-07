import React from 'react'
function SimpleMap(){
    const array1 =[1,4,9,16];
    //pass a function to map
const map1 = array1.map((x) => x*2);
//map will dop as like for loop like taking each element of array
//x is variable like i in for loop
console.log(map1);
  return (
    <div>{map1}
      
    </div>
  )
}

export default SimpleMap



