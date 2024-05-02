import React,{useRef} from 'react'
import ForwordRef from './ForwordRef';

export default function UseRef() {
    const inputRef = useRef(null);

    const value = ()=>{
      inputRef.current.value = "Data: UseRef to forwardRef";
      inputRef.current.style.color = "red";
      inputRef.current.focus();
    }
  return (
    <div>
        <h1>Hello from UseRef</h1>
        <ForwordRef ref={inputRef}/>
        <button onClick={value}>Click</button>

    </div>
  )
}
