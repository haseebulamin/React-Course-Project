import React from 'react'

export default function Prompt() {
    const click = ()=>{
        prompt("Enter Your age: ");
    }
  return (
    <div>
        <button onClick={click}>click</button>
    </div>
  )
}
