import React from 'react'

export default function Student(props) {
  return (
    <div>
     <h1>Student</h1>
     <p>{props.name("Haseeb Ul Amin")}</p>
     <button  onClick={props.data}>Click</button>
    </div>
  )
}
