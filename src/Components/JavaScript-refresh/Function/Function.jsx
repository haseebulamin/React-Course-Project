import React from 'react'

export default function Function() {
    function greet()  // simple function
    {
        console.log("Hello, Haseeb Ul Amin");
    }
    
    function para(user,msg="what's up?")  // function with parameter
    {
        console.log(user);
        console.log(msg);
    }
    
    greet();
    para("Alex","how are you!");
    para("Tom");
  return (
    <div>
        Function
    </div>
  )
}
