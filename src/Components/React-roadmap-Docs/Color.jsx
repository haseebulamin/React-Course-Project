import React from 'react'

export default function Color() {

    let clr = document.getElementById("color");
    const color = ()=>{
        clr.style.color = "red";
    }
  return (
    <div>
        <h1 id="color">Hello Color</h1>
        <h1 id="color">Hello Color</h1>
        <h1 id="color">Hello Color</h1>
        <h1 id="color">Hello Color</h1>
        <h1 id="color">Hello Color</h1>
        <button onClick={color}>Click</button>
    </div>
  )
}
