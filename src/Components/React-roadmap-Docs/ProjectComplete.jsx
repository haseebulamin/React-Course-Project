import React,{useState} from 'react'

export default function ProjectComplete() {
    const [dataone, setDataOne] = useState("")
    const [datatwo, setDataTwo] = useState("")
    const [display, setDisplay] = useState("")
 
    const getData1 =(val)=>{
       console.log(val.target.value)
       setDataOne(val.target.value)
    }
    const getData2 =(val)=>{
       console.log(val.target.value)
       setDataTwo(val.target.value)
    }

    const printData =()=>{
        setDisplay(dataone+" "+datatwo);
    }
  return (
    <div>
        <h1>{display}</h1>
        <input onChange={getData1} type="text" /><br />
        <input onChange={getData2} type="text" /><br />
        <button onClick={printData}>Print</button>
    </div>
  )
}
