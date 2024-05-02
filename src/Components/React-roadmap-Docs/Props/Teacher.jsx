import React,{useState} from 'react'
import Student from './Student'

export default function Teacher() {
  const [name, setName] = useState("")
    const click = ()=>{
           alert("Student clicked in teacher.")
    }
    const myName = (p)=>{
         setName(p);
    }
  return (
    <div>
        <h1>{name}</h1>
        <Student data={click} name={myName}/>
    </div>

  )
}
