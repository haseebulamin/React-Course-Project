import React from 'react'

export default function Object() {
    const student = {
        name: "Haseeb Ul Amin",
        age: 18,
        role: "Dev",
        greet(msg){
            console.log(msg);
            console.log(this.role);
        }
    }

    console.log(student);
    console.log(student.name);
    console.log(student.age);
    student.greet("Hello React!");

  return (
    <div>
        Object <br />
        -- Data member <br />
        -- Member function
    </div>
  )
}
