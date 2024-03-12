import React from 'react'

export default function SpreadOperator() {

    let hobbies = ["Football","Cricket","Hockey","Vollyball"];
    let newhobbies = ["Reading"];
    let margeArray = [hobbies,newhobbies]; // simple marge
    console.log(margeArray);

    // marge with spread operator
    let margeArray1 = [...hobbies,...newhobbies];
    console.log(margeArray1);

  return (
    <div>
        Spread Operator
        </div>
  )
}
