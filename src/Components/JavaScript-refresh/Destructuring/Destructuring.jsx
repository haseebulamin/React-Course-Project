import React from 'react'

export default function Destructuring() {
    // partation with array 
    let username = ["Tom", "Alis"];
    let firtsname = username[0];
    let lastname = username[1];
    console.log(firtsname,lastname);

    // this code in preerable instead of above 
    const [onePart,twoPart] = ["Haseeb","Ul Amin"];
    console.log(onePart,twoPart);
 
    // partation with object 
    let user = {
        name: "Ibrar",
        Age: 20
    }
    console.log(user.name)
    console.log(user.Age)
  return (
    <div>Destructuring</div>
  )
}
