import React from 'react'
import { Route,Routes,Link } from 'react-router-dom';
import UseEffect from './UseEffect';

export default function DynamicRouting() {
    const users = [
        { id: 1, name: "salman", email: "salma@gmail.com" },
        { id: 2, name: "Ali", email: "ali@gmail.com" },
        { id: 3, name: "Talha", email: "talha@gmail.com" },
        { id: 4, name: "Zubi", email: "zubi@gmail.com" },
        { id: 5, name: "hasan", email: "hassan@gmail.com" },
      ];
      return (
        
        <div >
          <Routes>
            <Route exact path="/user/:id/:name" element={<UseEffect/> }></Route>
          </Routes>
          <h1>Hello from the app</h1>
          {users.map((item, i) => (
            <div key={i}>
              <Link to={"/user/" + item.id + "/" + item.name}>{item.name}</Link>
            </div>
          ))}
        </div>
      )
    
}
