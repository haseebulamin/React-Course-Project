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
    let name1 = user.name;
    let age1 = user.Age;
    console.log(name1,age1)
    
    // this code in preerable instead of above
    let {name,age} = {
        name: "Roy",
        age: 19
    }
    console.log(name,age)
  return (
    <div>
        Destructuring
        --partation on array
        --array Destructure
        --partation on object
        --object Destructure
    </div>
  )
}
