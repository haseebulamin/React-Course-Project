import React from 'react'
import { useLocation } from 'react-router-dom'

export default function UseLocation() {
    const loc = useLocation();
    console.log(loc);
  return (
    <div>
       <h1>UseLocation</h1>
        <button onClick={()=>loc("/about")}>About</button>
        <button onClick={()=>loc("/Contact")}>Contact</button>
    </div>
    
  )
}
