import React from 'react'

export default function Callback() {

    const alert = ()=>{
        setTimeout(() => {
            alert("Hello, i'm alert.")
        });
    }
    const alert1 = ()=>{
        setTimeout(() => {
            alert("Hello, i'm alert.")
        },2000);
    }
    const alert2 = ()=>{
        setTimeout(() => {
            alert("Hello, i'm alert.")
        },3000);
    }
  return (
    <div>
        <button onClick={alert}>Click</button>
        <button onClick={alert1}>Click</button>
        <button onClick={alert2}>Click</button>
    </div>
  )
}
