import React from 'react'

export default function MapRevision() {


    const students = [
        {
            name: 'john',
            email: "jhon@gmail.com",
            contact: "03425363762"
        },
        {
            name: 'Matt',
            email: "Matt@gmail.com",
            contact: "03425768782"
        },
        {
          name: 'haseeb',
          email: "haseeb@gmail.com",
          contact: "03425675782"
      },
      {
        name: 'ali',
        email: "ali@gmail.com",
        contact: "03425468782"
    },
    {
      name: 'muaaz',
      email: "muaaz@gmail.com",
      contact: "03423368782"
  },
  {
    name: 'muaaz',
    email: "muaaz@gmail.com",
    contact: "03400068782"
}
    ]

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {students.map((data, i) => (
            <tr key={i}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
