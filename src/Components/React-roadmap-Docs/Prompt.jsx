import React from 'react'

export default function Prompt() {
    const click = ()=>{
        prompt("Enter Your age: ");
        if(age<18)
          {
            alert("You are under 18.")
          }
          else{
            alert("You are 18.")
          }
    }
  return (
    <div>
        <button onClick={click}>click</button>
    </div>
  )
}
