import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function SearchParam() {
    const [Ser,setSer] = useSearchParams();
    console.log(Ser.get("age"));
  return (
    <div>
        <h1>SearchParam</h1>
        <input type="text" onChange={(e)=>{setSer({age: e.target.value})}}/>
    </div>
  )
}
