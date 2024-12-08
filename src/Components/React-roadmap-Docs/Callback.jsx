import React from 'react'

export default function Callback() {

    const alert = ()=>{
        setTimeout(() => {
            alert("Hello, i'm alert.")
        });
    }
  return (
    <div>
        <button onClick={alert}>Click</button>
    </div>
  )
}
