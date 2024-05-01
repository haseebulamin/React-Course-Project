import React,{useState} from 'react'

export default function GetInboxValue() { //    using input
  const [data, setData] = useState("")
  
  const getData = (val)=>{
      console.log()
      setData(val.target.value);
  }  
  
    
  
  return (
    <div>
      <h1>{data}</h1>
      <input onChange={getData} type="text" />
    </div>
  )
}
