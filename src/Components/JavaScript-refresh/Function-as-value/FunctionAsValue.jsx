import React from 'react'

export default function FunctionAsValue() {
    function handleTimeout1()
    {
     console.log("Time out!");   
    }

    const handleTimeout2 = ()=>{
     console.log("Time out .... Again!");
    }

    setTimeout(handleTimeout1, 2000);
    setTimeout(handleTimeout2, 3000);

    setTimeout( () => {
     console.log("More Timing out!");   
    }, 4000);

    function greet(greetfn) {
        greetfn();
    }
    greet(()=>{console.log("hello i'm greet")});
  return (
    <div>
        Function As Value
        </div>
  )
}
