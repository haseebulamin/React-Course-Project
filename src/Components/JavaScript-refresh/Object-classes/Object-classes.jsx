import React from 'react'

export default function ObjectClasses() {
    const student = {
        name: "Haseeb Ul Amin",
        age: 18,
        greet(msg){
            console.log(msg);
        }
    }
    console.log(student);
    console.log(student.name);
    console.log(student.age);
    student.greet("Hello React!");
  return (
    <div>
        Object-classes
    </div>
  )
}
