import React from 'react'

export default function Array() {
    let hobbies = ["Football","Cricket","Hockey","Vollyball"]; // simple array
    console.log(hobbies);
    console.log(hobbies[0]);
    console.log(hobbies[1]);
    console.log(hobbies[2]);
    console.log(hobbies[3]);
//---------------------------------------------

    // Array Methods 
    hobbies.push("Ludo"); // Add value in array
    console.log(hobbies);
//---------------------------------------------

    const index = hobbies.findIndex((item)=> { // finding ndex of value
      return item === "Hockey";
    })
    console.log(index);
//---------------------------------------------  

    const maphobby = hobbies.map((item)=> item + "!"); // for update array
    console.log(maphobby);
//---------------------------------------------

    const mapObject = hobbies.map((item)=> ({game: item})); // create a object
    console.log(mapObject);

  return (
    <div>
      Array <br />
      -- Simple array <br />
      -- Array Methods <br />
      -push <br />
      -findIndex <br />
      -map <br />
      -map for object
    </div>
  )
}
