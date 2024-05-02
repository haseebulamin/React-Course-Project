import React,{useRef} from 'react'

export default function UseRef() {
    const inputRef = useRef(null);

    const value = ()=>{
      inputRef.current.value = "Haseeb Ul Amin";
      inputRef.current.style.color = "red";
      inputRef.current.focus();
    }
  return (
    <div>
        <h1>UseRef</h1>
        <input type="text" ref={inputRef} />
        <button onClick={value}>Click</button>

    </div>
  )
}
