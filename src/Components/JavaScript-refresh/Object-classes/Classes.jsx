import React from 'react'

export default function Classes() {
    class student 
    {
        constructor(name,age)
        {
          this.name = name;
          this.age = age;
        }
        greet() 
        {
            console.log("Hello! hasii choudhary")
        }
    }

    const stu1 = new student("Haseeb",18);
    console.log(stu1);
    stu1.greet();
  return (
    <div>
        Classes <br />
        -- constructor <br />
        -- function 

    </div>
  )
}
