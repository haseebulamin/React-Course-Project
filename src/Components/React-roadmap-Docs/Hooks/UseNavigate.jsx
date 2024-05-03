import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function UseNavigate() {
    const navigate = useNavigate();
  return (
    <div>
        <h1>UseNavigate</h1>
        <p>This is home page</p>
        <button onClick={()=>navigate("/about")}>About</button>
        <button onClick={()=>navigate("/Contact")}>Contact</button>
    </div>
  )
}
