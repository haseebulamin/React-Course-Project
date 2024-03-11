import React from 'react'

export default function ControlStructure() {
    const number = prompt("Enter Value: ");

    // if else --conditions
    if (number === "1") 
    {
        console.log("i am 1.")
    } 
    else  if (number === "2") 
    {
        console.log("i am 2.")
    } 
    else  if (number === "3")  {
        console.log("i am 3.")
    } else {
            console.log("invalid number.")  
    }
 
    // for loop 
    let games = ["football", "Vollyball", "hockey", "soccor", "cricket"];

    for (let game of games) 
    {
        console.log(game);
    }
  return (
    <div>
        Control Structure <br />
        -- if else <br />
        -- for loop 

    </div>
  )
}
