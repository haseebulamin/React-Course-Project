import React,{useRef} from 'react'

export default function UncontrolledComponent() {
    const inputRef = useRef(null);
    function getInput(e) {
      e.preventDefault();
      console.log(inputRef.current.value);
      /////////////
     
      let input2 = document.getElementById("input2").value;
      console.log(input2);
    }
    return (
      <div className='App'>
        <h1>Hello From App</h1>
        <form onSubmit={getInput}>
          <input type='text' ref={inputRef}></input><br />
          <input id='input2' type='text'></input><br />
          <button type='submit'>Click</button>
        </form>
      </div>
    )
}
