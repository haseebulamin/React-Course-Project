import React,{useState,useEffect} from 'react'

export default function UseEffect() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      console.log("This is console.");
    })
    

  return (
    <div>
        UseEffect
    <h1>Hello from USeEffect {count}</h1>
    <button onClick={()=>setCount(count+1)}>ADD</button>
    </div>
  )
}
