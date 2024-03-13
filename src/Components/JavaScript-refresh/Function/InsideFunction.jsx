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
  return (
    <div>
        Function inside function

    </div>
  )
}
