import React, {useState} from 'react'

export default function State() {
    const [first, setfirst] = useState('');

    const yellow = ()=>{
        setfirst("yellow");
    }
    const red = ()=>{
        setfirst("red");
    }
    const orange = ()=>{
        setfirst("orange");
    }
    const blue = ()=>{
        setfirst("blue");
    }
  return (
    <div>
    <h1 style={{color: first}}>Hello, here's state.</h1>   
    <button onClick={yellow}>yelloe</button> 
    <button onClick={red}>red</button> 
    <button onClick={orange}>orange</button> 
    <button onClick={blue}>blue</button> 
    <button onClick={yellow}>yelloe</button> 
    <button onClick={red}>red</button> 
    <button onClick={orange}>orange</button> 
    <button onClick={blue}>blue</button> 
    </div>
  )
}
