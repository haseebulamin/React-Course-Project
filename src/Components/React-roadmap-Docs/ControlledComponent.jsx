import React,{useState} from 'react'

export default function ControlledComponent() {
    const [val, setVal] = useState("Start");

  return (
    <div>
        <h1>Hello from ControlledComponent</h1>
        <p>{val}</p>
        <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
    </div>
  )
}
