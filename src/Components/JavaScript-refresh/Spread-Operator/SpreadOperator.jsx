import React from 'react'

export default function SpreadOperator() {

    let hobbies = ["Football","Cricket","Hockey","Vollyball"];
    let newhobbies = ["Reading"];
    let margeArray = [hobbies,newhobbies]; // simple marge
    console.log(margeArray);

    // marge with spread operator
    let margeArray1 = [...hobbies,...newhobbies];
    console.log(margeArray1);

    // extend object with spread operator
    let user = {
        name: "Ibrar",
        Age: 20
    }
    let extendUser = {
        ID: 322,
        ...user
    }
    console.log(extendUser);

  return (
    <div>
        Spread Operator <br />
        -- marge array <br />
        -- marge array with spread operator <br />
        -- extend object with spread operator <br />
        </div>
  )
}
