import React from 'react'

export default function ReferenceVsPrimitve() {

    let user = "Haseeb";
    console.log(user);
    user = "Haseeb Ul Amin";
    console.log(user);

    user = user.concat(" Developer");
    console.log(user);

    const hobbies = ["Hockey", "Football"];
    console.log(hobbies);
    hobbies.push("Cricket");
    console.log(hobbies);
  return (
    <div>
        Reference Vs Primitve
        </div>
  )
}
