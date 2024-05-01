import React,{useState} from 'react'

export default function PrintValue() {
    const [data, setData] = useState("")
    const [display, setDisplay] = useState("")
 
    const getData =(val)=>{
       console.log(val.target.value)
       setData(val.target.value)
    }
    const printData =()=>{
        setDisplay(data)
    }
  return (
    <div>
        <h1>{display}</h1>
        <input onChange={getData} type="text" />
        <button onClick={printData}>Print</button>
    </div>
  )
}
