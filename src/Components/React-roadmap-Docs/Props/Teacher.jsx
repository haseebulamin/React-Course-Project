import React from 'react'
import Student from './Student'

export default function Teacher() {
    const click = ()=>{
           alert("Student clicked in teacher.")
    }
  return (
    <div>
        <Student data={click}/>
    </div>

  )
}
