import React,{useState} from 'react'

export default function RenderingCondition() {
    const [login, setLogin] = useState(true)
    setLogin();
  return (
    <div>
        {login ?  <h1>Welcome Haseeb</h1>: <h1>Hello Haseeb</h1>}
    </div>
  )
}
