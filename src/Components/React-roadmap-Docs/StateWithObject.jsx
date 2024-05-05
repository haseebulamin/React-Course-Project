import React,{useState} from 'react'

export default function StateWithObject() {
    const [data, setData] = useState({
        name: "Haseeb Ul Amin",
        regNo: "FA22-BCS-033"
    })

  return (
    <div>
       <h1>State With Object</h1>
       <input type="text" value={data.name} onChange={(e)=>{setData({...data, name: e.target.value})}}/>
       <input type="text" value={data.regNo} onChange={(e)=>{setData({...data, regNo: e.target.value})}}/>
       <p>{data.name}</p>
       <p>{data.regNo}</p>
    </div>
  )
}
