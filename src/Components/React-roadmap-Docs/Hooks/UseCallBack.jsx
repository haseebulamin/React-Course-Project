import React,{useCallback,useState} from 'react'

export default function UseCallBack() {
    const [number, setNumber] = useState(0);


    const handleClick = useCallback(() => {
      console.log(number);
    }, []);
  
  
    return (
      <div className="App">
        <h1> The Number is:: {number}</h1>
        <button onClick={() => { setNumber(number + 1); handleClick();}}> Increment </button>
      </div>
  
  )
}
