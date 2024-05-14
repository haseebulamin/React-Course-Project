import React,{useState} from 'react'

export default function Practice() {
  const [tech, setTech] = useState("");

  const flow = ()=>{
    
      setTech("3")
    
    setInterval(() => {
      setTech("2")
    }, 500);
    setInterval(() => {
      setTech("1")
    }, 1000);
    setInterval(() => {
      setTech("Register")
    }, 1500);
    setInterval(() => {
      setTech("Now!")
    }, 2000);
    setInterval(() => {
      setTech("For")
    }, 2500);
    setInterval(() => {
      setTech("TegaThon")
    }, 3000);
    

  }

  return (
    <div>
       <h1>Are you Ready for tegathon?</h1>
       <h1>{tech}</h1>
       <button onClick={flow}>What?</button>

      {/* <span>Name:</span><input type="text" placeholder='Name'/><br />
      <span>Email:</span><input type="text" placeholder='Email'/><br />
      <span>NUmber:  </span><input type="text" placeholder='Number'/><br />
       */}

    </div>
  )
}
