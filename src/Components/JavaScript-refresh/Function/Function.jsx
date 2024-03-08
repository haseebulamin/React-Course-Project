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
    function returning(user,msg) // returning function
    {
        return "Hi, i'm " + user + ". " + msg;
    }
    greet();
    para("Alex","how are you!");
    para("Tom");
    const rtrn = returning("Hasii","just focus on work.");
    console.log(rtrn);
  return (
    <div>
        Function
    </div>
  )
}
