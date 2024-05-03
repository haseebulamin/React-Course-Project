import React from 'react'
import { useParams } from 'react-router-dom'

export default function UseParam() {
    const name = useParams();
    console.log(name);
  return (
    <h1>UseParam</h1>
  )
}
