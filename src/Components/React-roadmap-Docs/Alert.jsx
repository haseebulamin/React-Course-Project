import React from 'react'

export default function Alert() {

    const click = ()=>{
        alert("i'm clicked");
    }
  return (
    <div>
        <button onClick={click}>click</button>
    </div>
  )
}
