import React from 'react'

export default function DeleteApiData() {
    
    const deleteData = async (p)=> {
        console.log(p);
        const response = await fetch(`https://dummy.restapiexample.com/api/v1/employees/${p}`, {
            method: "Delete",
        });
    }

  return (
    <div>
        <button onClick={()=>deleteData(item.id)}>Delete</button>
    </div>
  )
}
