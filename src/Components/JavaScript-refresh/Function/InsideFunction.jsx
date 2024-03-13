import React from 'react'

export default function InsideFunction() {

    function init(value) // with parameter
    {
        function greet(value) {
            console.log(value)
        }
        greet(value);
    }
    init("Hello! Function inside function");

    function outer() // without parameter
    {
        function inner() {
            console.log("i am inner function")
        }
        inner();
    }
    outer();

  return (
    <div>
        Function inside function

    </div>
  )
}
