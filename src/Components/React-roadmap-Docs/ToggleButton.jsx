import React,{useState} from 'react'

export default function ToggleButton() {
    const [status, setStatus] = useState(true)
  return (
    <div>
        {status ? <h1>ON</h1>: <h1>OFF</h1>}
        <button onClick={()=> setStatus(!status)}>Toggle</button>
    </div>
  )
}
