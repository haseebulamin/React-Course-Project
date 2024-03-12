import React from 'react'

export default function DOM() {
    document.getElementById("demo").innerHTML = "Hello World!";
  return (
    <div>
        DOM
        <ul className='list'>
            <li>hello</li>
            <li>hi</li>
            <li id='demo'></li>
        </ul>
    </div>
  )
}
