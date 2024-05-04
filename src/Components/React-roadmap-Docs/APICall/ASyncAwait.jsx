import React, { useState, useEffect } from 'react'

export default function ASyncAwait() {
   const [data, setData] = useState("")

   useEffect(() => {
     async function fetchUser() {
        const  response = await fetch("https://dummy.restapiexample.com/api/v1/employees");
        const  json = await response.json();
        setData(json);
     }
     fetchUser();
   }, [])
   console.log(data);
  return (
    <div>
        ASyncAwait

    </div>
  )
}
