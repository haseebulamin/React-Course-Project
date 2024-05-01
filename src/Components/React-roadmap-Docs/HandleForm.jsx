import React,{useState} from 'react'

export default function HandleForm() {
   const [name, setName] = useState("");
   const [sport, setSport] = useState("");
   const [term, setTerm] = useState(true)
   const getData = (e)=>{
      e.preventDefault();
      console.log(name,sport,term);
   }
   return (
    <div>
        <form onSubmit={getData}>
        <span>Name: </span>
        <input onChange={(e)=>setName(e.target.value)} type="text" />
        <br /><br />
        <span>Sport: </span>
        <select onChange={(e)=>setSport(e.target.value)}>
            <option >Select</option>
            <option >Football</option>
            <option >Hockey</option>
        </select>
        <br /><br />
        <input onChange={(e)=>setTerm(e.target.checked)} type="checkbox" />
         <span>Agree term and conditions</span>
         <br /><br />
         <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
