import React from 'react'

export default function Student(props) {
  return (
    <div>
     <h1>Student</h1>
     <button  onClick={props.data}>Click</button>
    </div>
  )
}
