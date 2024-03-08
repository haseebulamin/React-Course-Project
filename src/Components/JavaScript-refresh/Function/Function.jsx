import React from 'react'

export default function Function() {
    function greet()  // simple function
    {
        console.log("Hello, Haseeb Ul Amin");
    }
    
    function para(user,msg="what's up?")  // function with parameter
    {
        console.log(user,msg);
    }

    function returning(user,msg) // returning function
    {
        return "Hi, i'm " + user + ". " + msg;
    }
    
    const arrowFunc = (msg)=> // arrow function
    {
        console.log(msg)
    }
    const arrowwithreturn = (msg)=> // arrow function with return 
    {
        return msg;
    }
    
    greet();            // simple function
    para("Alex","how are you!");  // function with parameter
    para("Tom");             // function with default parameter
    const rtrn = returning("Hasii","just focus on work.");  // returning function
    console.log(rtrn);
    arrowFunc("I'm arrow function."); // arrow function
    const arrow = arrowwithreturn("arrow with return!"); // arrow function with return 
    console.log(arrow);
  return (
    <div>
        Function
        <ol>
            <li>Simple function</li>
            <li>Function With parameter</li>
            <li>Returning function</li>
            <li>Arrow function</li>
            <li>Arrow function with return</li>
        </ol>
    </div>
  )
}
