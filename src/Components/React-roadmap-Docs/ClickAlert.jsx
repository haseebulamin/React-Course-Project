import React from 'react'

export default function ClickAlert() {

  const click = () =>{
    alert("I clicked.")
  }

  return (
    <div>
      <button onClick={click}>Click Here</button>
    </div>
  )
}
