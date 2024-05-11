import React,{useState} from 'react'

export default function Practice() {
  const [tech, setTech] = useState("");

  const flow = ()=>{
    
      setTech("3")
    
    setInterval(() => {
      setTech("2")
    }, 1000);
    setInterval(() => {
      setTech("1")
    }, 2000);

  }

  return (
    <div>

       <h1>{tech}</h1>
       <button onClick={flow}>Submit</button>

      {/* <span>Name:</span><input type="text" placeholder='Name'/><br />
      <span>Email:</span><input type="text" placeholder='Email'/><br />
      <span>NUmber:  </span><input type="text" placeholder='Number'/><br />
       */}

    </div>
  )
}
